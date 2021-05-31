import React from "react"
import { MdFace, MdCardTravel, MdDescription } from "react-icons/md"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import SiteLogo from "./SiteLogo"

//Lets add the class to add shading to the nav when scrolling
if (typeof window !== `undefined`) {
  window.addEventListener("scroll", addNavBkg)
}

function addNavBkg() {
  const navBar = document.getElementById("nav-wrap")
  let windowWidth = window.innerWidth
  let scrollFromTop = window.scrollY
  if (windowWidth >= 768 && scrollFromTop >= 130) {
    navBar.classList.add("scroll")
  } else {
    if (navBar.classList.contains("scroll")) {
      navBar.classList.remove("scroll")
    }
  }
}

const isCurrent = (anchor, pathname) =>
  pathname.endsWith(anchor) ? "current" : ""

class Navigation extends React.Component {
  state = {
    pathname: "#home",
  }
  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({ pathname: window.location.href })
    })
  }
  render() {
    const { pathname = "" } = this.state
    return (
      <nav id="nav-wrap">
        <SiteLogo />
        <ul id="nav" className="nav">
          <li className={isCurrent("#about", pathname)}>
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
          <li className={isCurrent("#portfolio", pathname)}>
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
          <li className={isCurrent("#resume", pathname)}>
            <a
              title="Download my resume"
              className="resume"
              rel="noopener"
              href="https://drive.google.com/file/d/1i8chX2JYvaPvsJd__pZwLBONGygN0sDs/view?usp=sharing"
            >
              <span>
                <MdDescription />
              </span>
              Resumé
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
