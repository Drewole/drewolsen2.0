import React from "react"
import { FaPlus, FaTag, FaTimes, FaGithub } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Project = (props) => {
  const thumbImage = getImage(props.squareImg)
  const mainImage = getImage(props.frontImg)
  return (
    <>
      <div className="columns portfolio-item">
        <div className="item-wrap">
          <a href={`#modal-${props.slug}`}>
            <GatsbyImage image={thumbImage} alt={props.title} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{props.title}</h5>
                <h6>{props.year}</h6>
                <p>{props.shortDescription}</p>
                <p>{props.type}</p>
              </div>
            </div>
            <div className="link-icon">
              <FaPlus />
            </div>
          </a>
        </div>
      </div>
      <div className="popup-modal-shadow">
        <div id={`modal-${props.slug}`} className="popup-modal mfp-hide">
          <GatsbyImage image={mainImage} alt={props.title} />
          <div className="description-box">
            <h4>{props.title}</h4>
            <p>{props.longDescription}</p>
            <span className="categories">
              <FaTag /> <span>{props.tags}</span>
            </span>
          </div>

          <div className="link-box">
            {props.extSite && (
              <a className="btn" href={`${props.extSite}`}>
                View Site
              </a>
            )}

            <a href="#portfolio" className="btn popup-modal-dismiss">
              Close
            </a>
            {props.github && (
              <p className="github"><a href={`https://github.com${props.github}`}>View on <span>Github <FaGithub /></span></a></p>
            )}

          </div>
          <a href="#portfolio" className="popup-modal-close">
            <FaTimes />
          </a>
        </div>
      </div>
    </>
  )
}

export default Project
