import React from "react"
import { FaPlus } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const Project = (props) => {
  const thumbImage = getImage(props.squareImg)

  // function randomRotate() {
  //   let rand = (min, max) => Math.floor(Math.random() * (max - min)) + min
  //   let randomNum = rand(- 100, 100) / 100
  //   return randomNum
  // }

  return (
    <>
      <div className="portfolio-item">
        <div className="item-wrap" >
          <Link to={`/projects/${props.slug}`}>
            <GatsbyImage aspectratio={1 / 1} image={thumbImage} alt={props.title} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{props.title}</h5>
                <h6>{props.year}</h6>
                <p>{props.shortDescription}</p>
                <p className="type"><span>Type: </span>{props.type}</p>
              </div>
            </div>
            <div className="link-icon">
              <FaPlus />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Project
