import React from 'react'
import Navigation from '../../components/Navigation'
import Layout from '../../layouts/Layout'
import { FaTag, FaTimes } from "react-icons/fa"
import { GatsbyImage } from "gatsby-plugin-image"

const ProjectsJson = () => {
    return (
        <Layout>
            <header>
                <Navigation />
            </header>
            <main>
                <div className="popup-modal-shadow">
                    <div id="props.slug" className="popup-modal mfp-hide">
                        <GatsbyImage image="mainImage" alt="props.title" />
                        <div className="description-box">
                            <h4>{"props.title"}</h4>
                            <p>{"props.longDescription"}</p>
                            <span className="categories">
                                <FaTag /> <span>{"props.tags"}</span>
                            </span>
                        </div>

                        <div className="link-box">
                            {/* {props.extSite && (
                                <a className="btn" href={`${props.extSite}`}>
                                    View Site
                                </a>
                            )}
                    
                            {props.github && (
                                <p className="github"><a href={`https://github.com${props.github}`}>View on <span>Github <FaGithub /></span></a></p>
                            )} */}

                        </div>
                        <a href="#portfolio" className="popup-modal-close">
                            <FaTimes />
                        </a>
                    </div>
                </div>
            </main>

        </Layout>
    )
}

export default ProjectsJson
