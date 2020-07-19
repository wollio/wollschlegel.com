import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ pageContext }) => {
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext

    return (
        <nav className="pagination" role="navigation">
            {previousPagePath && (

                <Link to={previousPagePath} rel="prev">
                    ← Newer Posts
                </Link>

            )}
            {numberOfPages > 1 && <span className="pagination-location">Page {humanPageNumber} of {numberOfPages}</span>}
            {nextPagePath && (

                <Link to={nextPagePath} rel="next">
                    Older Posts →
                </Link>
            )}
        </nav>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default Pagination
