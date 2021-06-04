import React from "react"
import { FaPlus, FaTag, FaTimes } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Project = (props) => {
  const thumbImage = getImage(props.squareImg)
  const mainImage = getImage(props.frontImg)
  console.log(mainImage, thumbImage, "Main image and thumb image deets")

  return (
    <div className="project">
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
      {/* modal-${props.slug} */}
      <div className="popup-modal-shadow">
        <div id={`#`} className="popup-modal mfp-hide">
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
              <a href={`https://projects.drewolsen.design/${props.slug}`}>
                View Site
              </a>
            )}

            <a href="#portfolio" className="popup-modal-dismiss">
              Close
            </a>
          </div>
          <a href="#portfolio" className="popup-modal-close">
            <FaTimes />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
