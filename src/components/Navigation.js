import React from "react"
import { MdFace, MdCardTravel, MdDescription } from "react-icons/md"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import SiteLogo from "./SiteLogo"

const Navigation = () => {

  function addNavBkg() {

    const navBar = document.getElementById("nav-wrap")
    let windowWidth = window.innerWidth
    let scrollFromTop = window.scrollY
    if (windowWidth >= 768 && scrollFromTop >= 130) {
      navBar.style.cssText += `background: rgba(33, 30, 50, 0.858);`
    } else if (navBar.hasAttribute("background")) {
      navBar.style.cssText += `background: rgba(33, 30, 50, 0);`
    }
  }
  //Lets add the class to add shading to the nav when scrolling
  window.addEventListener("scroll", addNavBkg)

  return (
    <nav id="nav-wrap">
      <SiteLogo />
      <ul id="nav" className="nav">
        <li className={"#about"}>
          <AnchorLink
            title="Go to the about me section"
            className="about"
            to="/#about"
          >
            <span>
              <MdFace />
            </span>
            About
          </AnchorLink>
        </li>
        <li className={"#portfolio"}>
          <AnchorLink
            title="Go to my portfolio"
            to="/#portfolio"
            className="portfolio"
          >
            <span>
              <MdCardTravel />
            </span>
            Portfolio
          </AnchorLink>
        </li>
        <li className={"#resume"}>
          <AnchorLink
            title="Contact me"
            className="contact"
            rel="noopener"
            to="/#contact"
          >
            <span>
              <MdDescription />
            </span>
            Contact
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );//End of return
}

export default Navigation
