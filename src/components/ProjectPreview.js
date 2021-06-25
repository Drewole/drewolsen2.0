import React from "react"
import { FaPlus } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { motion } from "framer-motion"

const Project = (props) => {
  const thumbImage = getImage(props.squareImg)

  function randomRotate() {
    let rand = (min, max) => Math.floor(Math.random() * (max - min)) + min
    let randomNum = rand(- 120, 120) / 100
    return randomNum
  }

  return (
    <>
      <div className="portfolio-item">
        <motion.div
          className="item-wrap"
          whileHover={{ scale: 1.1, rotate: randomRotate() }}
          whileTap={{ scale: 0.8 }}
        >
          <AniLink
            swipe
            direction="left"
            entryOffset={30}
            to={`/projects/${props.slug}`}
            duration={0.8}
          >
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
          </AniLink>
        </motion.div>
      </div>
    </>
  )
}

export default Project
