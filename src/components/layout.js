/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { motion } from "framer-motion"

import Header from "./header"
import "./layout.css"



const Layout = ({ children, backgroundColor }) => {

  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);


  const toggleMobileMenu = useCallback(() => {
    
    setMobileMenuVisible(prev => !prev);
  })

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: "100vh" }}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        toggleMobileMenu={toggleMobileMenu}
      />
      <div
        style={
          {
            // minHeight: "300vh",
          }
        }
      >
        <motion.div
          animate={{ opacity: isMobileMenuVisible ? 1 : 0 }}
          transition={{
            duration: 0.5,
          }}
          style={{
            width: "100%",
            top: "100px",
            height: "100%",
            padding: `1.45rem 1.0875rem`,
            backgroundColor: "black",
            position: "fixed",
            display: isMobileMenuVisible ? "flex" : "none",
            flexDirection: "column",
            alignItems: "center",
            zIndex: isMobileMenuVisible ? 10 : 0,
            opacity: 0,
          }}
        >
          <div style={{ margin: "2rem", padding: "1rem 1rem" }}>
            <Link
              to="/about"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <h2
                className="jyoo-header__button"
                onClick={() => setMobileMenuVisible(false)}
              >
                About
              </h2>
            </Link>
          </div>

          <div>
            <Link
              to="/blog"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <h2
                className="jyoo-header__button"
                onClick={() => setMobileMenuVisible(false)}
              >
                Blog
              </h2>
            </Link>
          </div>

          {/* <span>
        <Link
          to="/charts"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <h4 className="jyoo-header__font">Charts</h4>
        </Link>
      </span> */}
        </motion.div>
        <main
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.0875rem 1.45rem`,
          }}
        >
          {children}
        </main>
      </div>
      


      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
