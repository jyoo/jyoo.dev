import React from "react"
import "./layout.css"

const Footer = ({color}) => {
    let fontClass = color === "white" ? "jyoo-font__white" : "jyoo-font__black";
    return (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 0`,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span className={`${fontClass} jyoo-font-size__small`}>
            James Yoo
          </span>
        </div>
        <div>
          <span className={`${fontClass} jyoo-font-size__small`}>
            <a className={`${fontClass}`} href="mailto:jungsup.yoo@gmail.com">
              jungsup.yoo@gmail.com
            </a>
          </span>
        </div>
      </div>
    )
}

export default Footer;
