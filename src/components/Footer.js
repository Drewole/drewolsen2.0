import React from "react"
import SocialLinks from "./SocialLinks"
import { FaChevronCircleUp } from "react-icons/fa"
import { RiGatsbyLine } from "react-icons/ri"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from 'gatsby'

const Footer = () => (
  <footer id="footer">
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

    <div id="go-top">
      <AnchorLink title="Back to Top" to="/#home">
        <FaChevronCircleUp />
      </AnchorLink>
    </div>
    <p className="cheatcode"><Link target="_blank" rel="noopener noreferrer" to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">↑ ↑ ↓ ↓ ← → ← → a b b a</Link></p>
  </footer>
)

export default Footer
