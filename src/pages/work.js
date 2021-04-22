import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/footer";

import "../components/layout.css"


const Work = () => (
  <Layout backgroundColor={"#FFFFFF"}>
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
            <h2 className="jyoo-font__black">
              <a href="https://jasan.io">Jasan</a>
            </h2>
            <p className="jyoo-font-size__small jyoo-font__gray">
              Jasan is a platform that you use to get investment ideas,
              regardless of your level of experience.
            </p>
          </div>
          <div className="jyoo-space__record">
            <h2 className="jyoo-font__black">
              <a href="https://www.chysquare.com">Chy Square</a>
            </h2>
            <p className="jyoo-font-size__small jyoo-font__gray">
              Chy Square is a digital agency that integrates strategy,
              creativity & experience to help you build your brands.
            </p>
          </div>
          <div className="jyoo-space__record">
            <h2 className="jyoo-font__black">
              <a href="https://www.unlyst.com">Unlyst</a>
            </h2>
            <p className="jyoo-font-size__small jyoo-font__gray">
              Unlyst provides subscribers with an email, including the latest
              status of active development projects in Toronto every morning.
            </p>
          </div>
          <div className="jyoo-space__record">
            <h2 className="jyoo-font__black">
              <span>Averagenie</span>
            </h2>
            <p className="jyoo-font-size__small jyoo-font__gray">
              Designed and developed a website that shows the average of things
              in the world.
            </p>
          </div>
          <div className="jyoo-space__record">
            <h2 className="jyoo-font__black">
              <a href="https://hantranslations.com">Han Translations</a>
            </h2>
            <p className="jyoo-font-size__small jyoo-font__gray">
              Developed and updated a company's website to support multiple
              languages. Created and managed the company's other websites such
              as Han Copywriting.
            </p>
          </div>
          <div className="jyoo-space__record">
            <h2 className="jyoo-font__black">
              <a href="https://apps.apple.com/ca/app/hyra-money-expense-tracker/id1445975570">
                Hyra
              </a>
            </h2>
            <p className="jyoo-font-size__small jyoo-font__gray">
              Designed and developed an iOS app to allow users to record their
              expenses and income by taking a photo.
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer color={"black"} />
  </Layout>
)
export default Work
