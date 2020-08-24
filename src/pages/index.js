import React, { useState, useRef, useEffect } from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Post from "../components/post"



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
        <SEO title="Home" />
        <FadeIn>
          <h1 className={"jyoo-font__gray" + " " + "jyoo-font-size__extra_big"}>
            Hello. I'm <span className={"jyoo-font__white"}>James</span>,
          </h1>
          <h1 className={"jyoo-font__gray" + " " + "jyoo-font-size__extra_big"}>
            Toronto-based{" "}
            <span className={"jyoo-font__white"}>software developer</span> who
            loves technology, charts and buildings.
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
                Works
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
                <span className="jyoo-font__gray">• 2018 - Present</span>
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
              <Link to="/works">
                <span className="jyoo-font__white jyoo-font-size__small">
                  Read More
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>

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
            <FadeIn>
              <Post
                key={edge.node.id}
                post={edge.node}
                titleClass={"jyoo-font__white"}
                excerptClass={"jyoo-font__light-gray"}
              />
            </FadeIn>
          ))}

          {/* <div className="jyoo-space__record">
              <h3 className="jyoo-font__white">
                Android App Crashed by React Native Maps and Firebase
              </h3>
              <p className={"jyoo-font__light_gray jyoo-font-size__small"}>
                Using React Native which includes a JavaScript library, I can
                make an iOS and Android app at the same time, and it is quite
                useful. To develop my app, I installed the well-known packages,
                react-native-maps and react-native-firebase. My iOS app was
                working very well when I used both packages at the same time,
                but Android app kept crashing whenever the screen was mounted.
                By using lite-mode of Google Map, the app became working well.
              </p>
            </div>

            <hr style={{ backgroundColor: "gray" }} /> */}

          {/* <div className="jyoo-space__record">
            <h2 className="jyoo-font__white">Averagenie</h2>
            <p className="jyoo-font-size__default">
              Designed and developed a website that shows the average of things
              in the world.
            </p>
          </div>
          <div className="jyoo-space__record">
            <h2 className="jyoo-font__white">Han Translations</h2>
            <p className="jyoo-font-size__default">
              Developed and updated a company's website to support multiple
              languages. Created and managed the company's other websites such
              as Han Copywriting.
            </p>
          </div>
          <div className="jyoo-space__record">
            <h2 className="jyoo-font__white">Hyra</h2>
            <p className="jyoo-font-size__default">
              Designed and developed an iOS app to allow users to record their
              expenses and income by taking a photo.
            </p>
          </div> */}
        </div>
      </div>
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