import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

// Styles
import '../../styles/screen.css'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node;
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null;
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null;

    return (
    <>
        <Helmet>
            <html lang={site.lang} />
            <style type="text/css">{`${site.codeinjection_styles}`}</style>
            <body className={bodyClass} />
        </Helmet>

        <div className="site-wrapper">
            <header className="site-head">
                <div className="site-head-container">
                    <a className="nav-burger" href="#">
                        <div className="hamburger hamburger--collapse" aria-label="Menu" role="button"
                             aria-controls="navigation">
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </a>
                    <nav id="swup" className="site-head-left">
                        {/* The navigation items as setup in Ghost */}
                        <Navigation data={site.navigation} navClass="site-nav-item" />
                    </nav>
                    <div className="site-head-center">
                        <Link to="/" className="site-head-logo">
                            {site.logo ?
                                <img src={site.logo} alt={site.title} />
                                : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                            }
                        </Link>
                    </div>
                    <div className="site-head-right">
                        <div className="social-links">
                            { site.twitter && <a href={ twitterUrl } target="_blank" rel="noopener noreferrer">Twitter</a>}
                            { site.facebook && <a href={ facebookUrl } target="_blank" rel="noopener noreferrer">Facebook</a>}
                            <a href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer">RSS</a>
                        </div>
                    </div>
                </div>
            </header>

            <main id="site-main" className="site-main">
                <div id="swup" className="transition-fade">
                    { isHome ?
                        <header className="page-head">
                            <h2 className="page-head-title">{site.description}</h2>
                        </header>
                        :
                        null}
                    {children}

                </div>
            </main>

            <footer className="site-foot">
                © 2019 <Link to="/">{site.title}</Link> &mdash; Published with <a href="https://ghost.org" target="_blank" rel="noopener">Ghost</a>
            </footer>
        </div>

    </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
