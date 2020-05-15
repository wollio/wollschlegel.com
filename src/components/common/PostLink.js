import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const PostLink = ({ post, count }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (

        <article
            className={`post-link`}
        >
            <Link to={url} className="post-card-link">
                <h2>{post.title || post.slug}</h2>
            </Link>

        </article>
    )
}

PostLink.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostLink
