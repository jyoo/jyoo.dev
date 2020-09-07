import React from 'react';
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Footer from "../components/footer";
import "../components/layout.css";

export default function Posts({data}) {

    const {markdownRemark} = data;
    const {frontmatter, html} = markdownRemark

    return (
      <Layout backgroundColor="#FFFAFA">
        <SEO title={frontmatter.title} description={frontmatter.excerpt} />
        <div className="jyoo-body__container">
          <div className={"jyoo-body__title-wrapper"}>
            <h1>{frontmatter.title}</h1>
            <h3>{frontmatter.date}</h3>
          </div>
          <div
            className="post-space__section"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>

        <Footer color={"black"} />
      </Layout>
    )
}

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`