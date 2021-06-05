import React from "react"
import { Link } from "gatsby"

import { FaPlus, FaTag } from "react-icons/fa"
import Image from "gatsby-image"

const ProjectPreview = ({
  squareImg,
  title,
  description,
  tags,
  slug,
  type,
  frontImg,
}) => {
  return (
    <React.Fragment>
      <div className="columns portfolio-item">
        <div className="item-wrap">
          <a href="#modal-01" title="">
            <Image fluid={squareImg} alt={title} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{title}</h5>
                <p>{type}</p>
              </div>
            </div>
            <div className="link-icon">
              <FaPlus />
            </div>
          </a>
        </div>
      </div>
      <div id="modal-01" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src={frontImg} alt="" />

        <div className="description-box">
          <h4>{title}</h4>
          <p>{description}</p>
          <span className="categories">
            <FaTag /> {tags}
          </span>
        </div>

        <div className="link-box">
          <Link className="details" to={`/projects/${slug}`}>
            Details
          </Link>
          <a className="close popup-modal-dismiss" href="#portfolio">
            Close
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ProjectPreview
