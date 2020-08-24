import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/layout.css"


const Work = () => (
  <Layout backgroundColor={"#FFFAFA"}>
    <SEO title="Work" />
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
          <h1
            className={"jyoo__font-black" + " " + "jyoo-font-size__extra_big"}
          >
            Work
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="home-work__record">
            <p className="jyoo-font-size__default jyoo-font__gray">
              I work at <span className="jyoo-font__black">Chy Square</span> as
              a <span className="jyoo-font__black">full-stack developer</span>{" "}
              specialized in building and managing services and software.
            </p>
            <p className="jyoo-font-size__default jyoo-font__gray">
              With experience in languages such as{" "}
              <span className="jyoo-font__black">
                JavaScript / Node.js, Python and Java
              </span>
              , I have developed and deployed web apps and services on the{" "}
              <span className="jyoo-font__black">AWS and Azure</span>. Using
              frameworks from React to Vue.js, I have also designed, tested and
              deployed websites for people in the world.
            </p>
          </div>
        </div>
      </div>
      {/* <h1 className={"jyoo-font-size__default" + " " + "jyoo-body__title"}>
        Hello. I'm <span className={"jyoo-font__black"}>James</span>,
      </h1>
      <h1 className={"jyoo-font-size__default" + " " + "jyoo-body__title"}>
        Toronto-based{" "}
        <span className={"jyoo-font__black"}>software developer</span> who
        loves technology, cities and charts.
      </h1> */}
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className={"jyoo-space__container"}
      >
        <div className="jyoo-space__record">
          <h2 className="jyoo-font__black">Chy Square</h2>
          <p className="jyoo-font-size__default jyoo-font__black">
            Full-stack developer{" "}
            <span className="jyoo-font__gray">• 2018 - Present</span>
          </p>
        </div>
        <div className="jyoo-space__record">
          <h2 className="jyoo-font__black">
            WOORI Education & Immigration Consulting
          </h2>
          <p className="jyoo-font-size__default jyoo-font__black">
            Case Processing Assistant{" "}
            <span className="jyoo-font__gray">• 2019</span>
          </p>
        </div>
        <div className="jyoo-space__record">
          <h2 className="jyoo-font__black">Indeed</h2>
          <p className="jyoo-font-size__default jyoo-font__black">
            INTL General Research Team Member{" "}
            <span className="jyoo-font__gray">• 2018 - 2019</span>
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={"jyoo-body__title-wrapper"}>
          <h1
            className={"jyoo__font-black" + " " + "jyoo-font-size__extra_big"}
          >
            Projects
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className={"jyoo-space__container"}
        >
          <div className="jyoo-space__record">
            <h2 className="jyoo-font__black">Chy Square</h2>
            <p className="jyoo-font-size__small jyoo-font__gray">
              Collaborated in the designing and creation of websites, iOS and
              Android apps using React for Chy Square and clients.
            </p>
          </div>
          <div className="jyoo-space__record">
            <h2 className="jyoo-font__black">Unlyst</h2>
            <p className="jyoo-font-size__small jyoo-font__gray">
              Wrote Python scripts to track the status of real estate projects
              in Toronto and save them on AWS RDS. Designed and deployed a
              website together with Brandon Graham Donnelly.
            </p>
          </div>
          <div className="jyoo-space__record">
            <h2 className="jyoo-font__black">Averagenie</h2>
            <p className="jyoo-font-size__small jyoo-font__gray">
              Designed and developed a website that shows the average of things
              in the world.
            </p>
          </div>
          <div className="jyoo-space__record">
            <h2 className="jyoo-font__black">Han Translations</h2>
            <p className="jyoo-font-size__small jyoo-font__gray">
              Developed and updated a company's website to support multiple
              languages. Created and managed the company's other websites such
              as Han Copywriting.
            </p>
          </div>
          <div className="jyoo-space__record">
            <h2 className="jyoo-font__black">Hyra</h2>
            <p className="jyoo-font-size__small jyoo-font__gray">
              Designed and developed an iOS app to allow users to record their
              expenses and income by taking a photo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
export default Work
