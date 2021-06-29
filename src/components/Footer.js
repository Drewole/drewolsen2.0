import React from "react"
import SocialLinks from "./SocialLinks"
import { Link } from 'gatsby'
import { FaChevronCircleUp } from "react-icons/fa"

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer id="footer">
      <SocialLinks />

      <ul className="copyright">
        <li>&copy; Copyright {year} <span className="bold" > DrewOlsen.Design</span></li>
      </ul>

      <div id="go-top">
        <Link aria-label="to-top" to="/">
          <FaChevronCircleUp focusable='false' />
        </Link>
      </div>
      <p className="cheatcode"><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">↑ ↑ ↓ ↓ ← → ← → b a select start</a></p>
    </footer>
  )

}

export default Footer
