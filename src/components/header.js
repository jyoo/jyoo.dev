import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useEffect, useState, useRef, useCallback } from "react"

import { motion } from "framer-motion"
import GitHub from "../images/github.png"


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
        animate={{ opacity: isNavVisible ? 1 : 0, display: isNavVisible ? "flex" : "none"}}
        className="jyoo-header__container jyoo-header__container-animation"
      >
        {props.children}
      </motion.div>
    )
}

const NonAnimationWrapper = (props) => (
  <div className="jyoo-header__container">
    {props.children}
  </div>
)

const CoreHeader = ({ toggleMobileMenu }) => (
  <>
    <span className="jyoo-header__button-wrapper">
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <h2 className="jyoo-header__name">James Yoo</h2>
      </Link>
    </span>

    <span className={"jyoo-header__button-container"}>
      <span className="jyoo-header__button-wrapper">
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

      <span className="jyoo-header__button-wrapper">
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <h4 className="jyoo-header__button">About</h4>
        </Link>
      </span>

      <span className="jyoo-header__button-wrapper">
        <a
          href="https://github.com/jyoo"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <h4 className="jyoo-header__button">GitHub</h4>
        </a>
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
    </span>

    <span className={"jyoo-header__mobile-container"}>
      <span style={{}} className="jyoo-header__button">
        <Hamburger toggleMobileMenu={toggleMobileMenu} />
      </span>
    </span>
  </>
)


const Header = ({toggleMobileMenu}) => {
  
  if (typeof window !== 'undefined' && window.location.pathname === "/") {
    return (
      <AnimationWrapper>
        <CoreHeader toggleMobileMenu={toggleMobileMenu} />
      </AnimationWrapper>
    )
  }

  else 
    return (
      <NonAnimationWrapper>
        <CoreHeader toggleMobileMenu={toggleMobileMenu} />
      </NonAnimationWrapper>
    )

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
        <span className="hamburger-inner"></span>
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
