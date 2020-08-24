import React from 'react';
import {Link} from 'gatsby';

const Post = ({ post, titleClass, excerptClass }) => {

    return (
      <div className="jyoo-space__record">
        <h2 className={titleClass}>{post.frontmatter.title}</h2>
        <p className={`${excerptClass} jyoo-font-size__small`}>
          {post.excerpt}
        </p>
        <div className="jyoo-flex__read-more">
          <Link to={post.frontmatter.slug}>
            <p className={`${titleClass} jyoo-font-size__small`}>
              Read More
            </p>
          </Link>
        </div>
      </div>
    )

}

export default Post;