import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.svg"

const Sitetitle = () => (
  <Link className="logo" to="/#home">
    <h1 className="site-title">
      <img alt="Drew Olsen Design Logo" src={logo} /> Drew Olsen
    </h1>
  </Link>
)

export default Sitetitle
