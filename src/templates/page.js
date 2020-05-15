import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import {Layout, Pagination, PostCard} from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single page (/:slug)
*
* This file renders a single page and loads all the content.
*
*/
const Page = ({ data, location }) => {
    const page = data.ghostPage;
    const posts = data.allGhostPost.edges;
    let postCounter = 0;

    if (page.custom_template) {
        return (
            <>
                <MetaData location={location} />
                <Layout>
                    <div className="post-content">
                        {posts.map(({ node }) => {
                            postCounter++;
                            return (
                                // The tag below includes the markup for each post - components/common/PostCard.js
                                <PostCard key={node.id} post={node} count={postCounter} />
                            )
                        })}
                    </div>
                </Layout>
            </>
        );
    } else {
        return (
            <>
                <MetaData
                    data={data}
                    location={location}
                    type="website"
                />
                <Helmet>
                    <style type="text/css">{`${page.codeinjection_styles}`}</style>
                </Helmet>
                <Layout>
                    <article className="post-content">
                        <div className="post-content-body"
                             dangerouslySetInnerHTML={{ __html: page.html }} />
                    </article>
                </Layout>
            </>
        )
    }
}

Page.propTypes = {
    data: PropTypes.shape({
        ghostPage: PropTypes.shape({
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
        ghostPost: PropTypes.shape({
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Page

export const postQuery = graphql`
    query($slug: String!, $custom_template: String) {
        ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
        }
        allGhostPost(
          filter: {custom_template: {eq: $custom_template}},
        ) {
          edges {
            node {
              ...GhostPostFields
            }
          }
        }
    }
`

/**
 * ghostPost() {
            ...GhostPostFields
        }
 */
