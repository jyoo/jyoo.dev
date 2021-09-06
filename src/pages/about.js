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
          // alignItems: "center",
        }}
      >
        <h2 className="jyoo-font__black">Hi!</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="home-work__record">
            <p className="jyoo-font-size__default jyoo-font__gray">
              My name is Jung Sup (James), and I am a{" "}
              <span className="jyoo-font__black">software engineer</span>. I
              moved from Seoul, Korea to Toronto, Ontario to study at{" "}
              <span className="jyoo-font__black">University of Toronto</span>.
              After graduating with my bachelor degree in statistics and
              economics, I had been working for companies like{" "}
              <span className="jyoo-font__black">Indeed</span> and{" "}
              <span className="jyoo-font__black">
                Woori Immigration Consulting
              </span>
              .
            </p>

            <p className="jyoo-font-size__default jyoo-font__gray">
              I work at <span className="jyoo-font__black">Replicon</span> as a
              software engineer. My{" "}
              <span className="jyoo-font__black">
                Site Reliability Engineering (SRE)
              </span>{" "}
              team ensures highly available and scalable services for our 
              clients, and my primary job is to work with teammates to achieve 
              that goal.
            </p>

            <p className="jyoo-font-size__default jyoo-font__gray">
              Before joining Replicon, I had been running my company,{" "}
              <span className="jyoo-font__black">Chy Square</span>. Chy Square is a digital agency 
              that provides web and software development services for clients in the world. 
              As a co-founder, I had great opportunities to work with professional and brilliant teammates.
            </p>
          </div>
        </div>
      </div>
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
        <div className={"jyoo-body__title-wrapper"}>
          <h1
            className={"jyoo__font-black" + " " + "jyoo-font-size__extra_big"}
          >
            Work History
          </h1>
        </div>
        <div className="jyoo-space__record">
          <h2 className="jyoo-font__black">Replicon</h2>
          <p className="jyoo-font-size__default jyoo-font__black">
            Full-stack developer{" "}
            <span className="jyoo-font__gray">• 2021 - Present</span>
          </p>
        </div>
        <div className="jyoo-space__record">
          <h2 className="jyoo-font__black">Chy Square</h2>
          <p className="jyoo-font-size__default jyoo-font__black">
            Co-founder / Full-stack developer{" "}
            <span className="jyoo-font__gray">• 2018 - 2021</span>
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
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <div className={"jyoo-body__title-wrapper"}>
        <h1 className={"jyoo__font-black" + " " + "jyoo-font-size__extra_big"}>
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
            <span>Jasan</span>
          </h2>
          <p className="jyoo-font-size__default jyoo-font__gray">
            Jasan is a place that you visit to get investment ideas, regardless
            of your level of experience.
          </p>
        </div>
        <div className="jyoo-space__record">
          <h2 className="jyoo-font__black">
            <span>Chy Square</span>
          </h2>
          <p className="jyoo-font-size__default jyoo-font__gray">
            Chy Square is a digital agency that integrates strategy, creativity
            & experience to help you build your brands.
          </p>
        </div>
        <div className="jyoo-space__record">
          <h2 className="jyoo-font__black">
            <span>Seenive</span>
          </h2>
          <p className="jyoo-font-size__default jyoo-font__gray">
            Seenive is a marketing agency that provides a full range of
            marketing services for companies and institutions in Southern Asia,
            North America, and Europe.
          </p>
        </div>

        <div className="jyoo-space__record">
          <h2 className="jyoo-font__black">
            <span>Unlyst</span>
          </h2>
          <p className="jyoo-font-size__default jyoo-font__gray">
            Unlyst provides subscribers with an email, including the latest
            status of active development projects in Toronto every morning.
          </p>
        </div>
        {/* <div className="jyoo-space__record">
          <h2 className="jyoo-font__black">
            <span>Han Translations / Han Copywriting</span>
          </h2>
          <p className="jyoo-font-size__default jyoo-font__gray">
            Developed and updated a company's website to support multiple
            languages.
          </p>
        </div>
        <div className="jyoo-space__record">
          <h2 className="jyoo-font__black">
            <span>Hyra</span>
          </h2>
          <p className="jyoo-font-size__default jyoo-font__gray">
            Designed and developed an iOS app to allow users to record their
            expenses and income by taking a photo.
          </p>
        </div> */}
      </div>
    </div>

    <Footer color={"black"} />
  </Layout>
)
export default Work
