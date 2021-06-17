import React from "react"
import SocialLinks from "./SocialLinks"
import { FaChevronCircleUp } from "react-icons/fa"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Footer = () => {
  let year = new Date().getFullYear();
  console.log(year)
  return (
    <footer id="footer">
      <SocialLinks />

      <ul className="copyright">
        <li>&copy; Copyright {year} <span className="bold" > DrewOlsen.Design</span></li>
      </ul>

      <div id="go-top">
        <AnchorLink title="Back to Top" to="/#home">
          <FaChevronCircleUp />
        </AnchorLink>
      </div>
      <p className="cheatcode"><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">↑ ↑ ↓ ↓ ← → ← → b a select start</a></p>
    </footer>
  )

}

export default Footer
