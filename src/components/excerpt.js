import React from 'react';
import {Link} from 'gatsby';

const Post = ({ post, titleClass, excerptClass }) => {
    let hrClass = titleClass.indexOf('black') > -1 ? 'jyoo-hr__black' : 'jyoo-hr__white';

    return (
      <div className="jyoo-space__record">
        <h2 className={titleClass}>{post.frontmatter.title}</h2>
        <p className={`${excerptClass} jyoo-font-size__small`}>
          {post.excerpt}
        </p>
        <div className="jyoo-flex__read-more">
          <Link to={post.frontmatter.slug}>
            <p className={`${titleClass} jyoo-font-size__small`}>Read More</p>
          </Link>
        </div>

        <hr className={hrClass} />
      </div>
    )

}

export default Post;