import React, { useState, useRef, useEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Excerpt from "../components/excerpt";
import Footer from "../components/footer";

import "../components/layout.css"

const FadeIn = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    })

    observer.observe(domRef.current);
  }, []);

  return (
    <div 
      className={`jyoo__fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}


const IndexPage = ({data}) => {

  const {allMarkdownRemark} = data;
  const {edges} = allMarkdownRemark;

  return (
    <Layout backgroundColor="black">
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <SEO title="Hello" />
        <FadeIn>
          <h1 className={"jyoo-font__gray" + " " + "jyoo-font-size__extra_big"}>
            Hello. I'm <span className={"jyoo-font__white"}>James</span>,
          </h1>
          <h1 className={"jyoo-font__gray" + " " + "jyoo-font-size__extra_big"}>
            Canada-based{" "}
            <span className={"jyoo-font__white"}>software engineer</span> who
            loves web, technology and investment.
          </h1>
        </FadeIn>
      </div>

      <div
        style={{
          minHeight: "100vh",
        }}
      >
        <FadeIn>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={"jyoo-body__title-wrapper"}>
              <h1 className={"jyoo-font__white jyoo-font-size__extra_big"}>
                Blog
              </h1>
            </div>
          </div>
        </FadeIn>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className={"jyoo-space__container"}
        >
          {edges.map(edge => (
            <FadeIn key={edge.node.id}>
              <Excerpt
                key={edge.node.id}
                post={edge.node}
                titleClass={"jyoo-font__white"}
                excerptClass={"jyoo-font__light-gray"}
              />
            </FadeIn>
          ))}
        </div>

        {/* 
        <FadeIn>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={"jyoo-body__title-wrapper"}>
              <h1 className={"jyoo-font__white jyoo-font-size__extra_big"}>
                Work
              </h1>
            </div>
          </div>
        </FadeIn>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className={"jyoo-space__container"}
        >
          <FadeIn>
            <div className="jyoo-space__record">
              <h2 className="jyoo-font__white">Chy Square</h2>
              <p className="jyoo-font__white jyoo-font-size__default ">
                Full-stack developer{" "}
                <span className="jyoo-font__gray">• 2019 - Present</span>
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="jyoo-space__record">
              <h2 className="jyoo-font__white">
                WOORI Education & Immigration Consulting
              </h2>
              <p className="jyoo-font__white jyoo-font-size__default ">
                Case Processing Assistant{" "}
                <span className="jyoo-font__gray">• 2019</span>
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="jyoo-space__record">
              <h2 className="jyoo-font__white">Indeed</h2>
              <p className="jyoo-font__white jyoo-font-size__default ">
                INTL General Research Team Member{" "}
                <span className="jyoo-font__gray">• 2018 - 2019</span>
              </p>
            </div>

            <div className="jyoo-flex__read-more">
              <Link to="/work">
                <span className="jyoo-font__white jyoo-font-size__small">
                  Read More
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      
       */}
      </div>

      <Footer color={"white"} />
    </Layout>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 5 
      sort: { order: DESC, fields: [frontmatter___date] }) {
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