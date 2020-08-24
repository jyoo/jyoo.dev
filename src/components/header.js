import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState, useRef, useCallback } from "react"

import { motion } from "framer-motion"


import "./layout.css"
import "../src/hamburgers.css"

// Update listenerRef
// With useCallback, we can avoid unnecessary rerendering.
const useEventListener = (event, setter) => {
  
  let windowElement = window;
  const setterRef = useRef();
  
  useEffect(() => {
    setterRef.current = setter;
  }, [setter]);

  useEffect(() => {

    const listener = e => setterRef.current(e);
    
    windowElement.addEventListener(event, listener);

    return () => {windowElement.removeEventListener(event, listener)};

  }, [event, windowElement])

}

const AnimationWrapper = (props) => {
  
    const [isNavVisible, setIsNavVisible] = useState(false)
    const setter = useCallback(() => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop

      if (winScroll > 100 && !isNavVisible) {
        setIsNavVisible(true)
      } else if (winScroll < 100 && isNavVisible) {
        setIsNavVisible(false)
      }
    })

    useEventListener("scroll", setter)
  
  
    return (
      <motion.div
        animate={{ opacity: isNavVisible ? 1 : 0, display: isNavVisible ? "inline" : "none"}}
        className="jyoo-header__container jyoo-header__container-animation"
      >
        {props.children}
      </motion.div>
    )
}

const CoreHeader = ({toggleMobileMenu}) => (
  <div className="jyoo-header__container">
    <div
      style={{
        // margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <h2 className="jyoo-header__name">James Yoo</h2>
      </Link>
    </div>

    <div
      style={{
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        alignItems: "center",
      }}
      className={"jyoo-header__normal-container"}
    >
      <span>
        <Link
          to="/works"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <h4 className="jyoo-header__button">Works</h4>
        </Link>
      </span>

      <span>
        <Link
          to="/blog"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <h4 className="jyoo-header__button">Blog</h4>
        </Link>
      </span>

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
    </div>

    <div
      
      className={"jyoo-header__mobile-container"}
    >
      <span
        style={{ }}
        className="jyoo-header__button"
      >
        <Hamburger toggleMobileMenu={toggleMobileMenu} />
      </span>
    </div>
  </div>
)


const Header = ({toggleMobileMenu}) => {
  
  if (typeof window !== 'undefined' && window.location.pathname === "/") {
    return (
      <AnimationWrapper>
        <CoreHeader toggleMobileMenu={toggleMobileMenu} />
      </AnimationWrapper>
    )
  }

  else return <CoreHeader toggleMobileMenu={toggleMobileMenu} />

}
const Hamburger = ({toggleMobileMenu}) => {

  const [isActive, setActive] = useState(false);
  const pressHamburgerButton = () => {
    setActive(prev => !prev);
    toggleMobileMenu();
  }
  
  return (
    <button
      onClick={pressHamburgerButton}
      className={
        isActive
          ? "hamburger hamburger--collapse is-active"
          : "hamburger hamburger--collapse "
      }
      type="button"
    >
      <span
        className="hamburger-box"
        style={{ display: "flex", alignItems: "center" }}
      >
        <span class="hamburger-inner"></span>
      </span>
    </button>
  )
}


// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
