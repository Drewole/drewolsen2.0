import React from "react"
import SocialLinks from "./SocialLinks"
import { FaChevronCircleUp } from "react-icons/fa"
import { RiGatsbyLine } from "react-icons/ri"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
          <li>&copy; Copyright 2021 DrewOlsen.Design</li>
          <li>
            Built with{" "}
            <a href="https://www.gatsbyjs.org/">
              <span>
                <RiGatsbyLine />
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div id="go-top">
        <AnchorLink title="Back to Top" to="/#home">
          <FaChevronCircleUp />
        </AnchorLink>
      </div>
    </div>
  </footer>
)

export default Footer
