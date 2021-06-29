import React from "react"
import { MdFace, MdCardTravel, MdDescription } from "react-icons/md"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import SiteLogo from "./SiteLogo"

const Navigation = () => {

  return (
    <nav id="nav-wrap">
      <SiteLogo />
      <ul id="nav" className="nav hidden">
        <li className={"#about"}>
          <AnchorLink
            title="Go to the about me section"
            className="about"
            to="/#about"
          >
            <span>
              <MdFace focusable={false} />
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
              <MdCardTravel focusable={false} />
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
              <MdDescription focusable={false} />
            </span>
            Contact
          </AnchorLink>
        </li>
      </ul>
    </nav>
  );//End of return
}

export default Navigation
