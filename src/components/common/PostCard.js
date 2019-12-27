import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (

        <article
            className={`post-card ${post.count % 3 === 0 && `post-card-large`}
             ${post.feature_image ? `with-image` : `no-image`}`}
            style={
                post.feature_image && {
                    backgroundImage: `url(${
                        post.feature_image
                    })`,
                }
            }
        >
            <Link to={url} className="post-card-link">
                <div className="post-card-content">
                    <h2 className="post-card-title">
                        {post.title || post.slug}
                    </h2>
                </div>
            </Link>

        </article>
    )
}

PostCard.propTypes = {
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

export default PostCard
