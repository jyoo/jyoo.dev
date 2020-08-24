import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import "../components/layout.css"

const Blog = ({ data }) => {

    const { allMarkdownRemark } = data
    const { edges } = allMarkdownRemark
  
    return (
      <Layout backgroundColor={"#FFFAFA"}>
        <div className="jyoo-body__container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={"jyoo-body__title-wrapper"}>
              <h1 className={"jyoo-font-size__extra_big"}>Posts</h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {edges.map(edge => (
                <Post
                  key={edge.node.id}
                  post={edge.node}
                  titleClass={"jyoo-font__black"}
                  excerptClass={"jyoo-font__gray"}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    )
}
export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`