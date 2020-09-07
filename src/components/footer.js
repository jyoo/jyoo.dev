const Footer = (color) => {

    let fontClass = color === "white" ? "jyoo-font__white" : "jyoo-font__black";
    
    return (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span className={`${fontClass} jyoo-font-size__small`}>
          © {new Date().getFullYear()}
          {` `}
          James Yoo. All Rights Reserved.
        </span>
        <span className={`${fontClass} jyoo-font-size__small`}>
          jungsup.yoo@gmail.com
        </span>
      </div>
    )
}