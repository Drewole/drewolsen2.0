import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import { siteMetadata } from '../../gatsby-config';
import ProfilePic from './ProfilePic';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const availabilityText =
  siteMetadata.available === true ? 'available!' : 'unavailable :(';
const available = siteMetadata.available === true ? 'available' : '';
const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns pic">
        <ProfilePic />
        <p className={available}>Have a Project? Looking to hire?</p>
        <p className={available}>
          I'm <span>{availabilityText}</span>
        </p>
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          A full-stack engineer capable of taking projects from wireframes to
          deployment. My 7 years of development experience have taught me much
          about the front-end of web development and brought me closer to my
          goal: building complete web applications from scratch. So, I recently
          graduated from an intense 12-week boot camp from the University of
          Minnesota to level up my back-end skills. It's amazing what you can do
          with just a text editor and an internet connection and I wanted to be
          a part of the whole story, not just what a user sees. For the next
          part of my career, I want to be engineering more challenging aspects
          of an application instead of just focusing on the UX. I am seeking a
          Junior to Mid, Full Stack Javascript position at a company where I can
          learn, grow, and continue to master this craft.
        </p>
        <p>
          Have a project you might want my help with?
          <AnchorLink className="form-link" to="/#contact">
            Let's chat.
          </AnchorLink>
        </p>

        <h3>My skills include but are not limited to:</h3>
        <p className="small">
          HTML5 - SCSS - CSS3 - Styled Components - Git - JavaScript -
          Typescript - React.js - Next.js - Gatsby - Nodejs - MongoDB - MySQL -
          Sketch - Figma - Adobe Suite - Responsive Design
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <h4>Drew Olsen</h4>
            <p className="contact-info">
              <a href="tel:952.381.5559">
                <span>
                  <FaPhone focusable="false" />
                </span>
                952.381.5559
              </a>
              <AnchorLink className="form-link" to="/#contact">
                <span>
                  <FaEnvelope focusable="false" />
                </span>
                Contact Me
              </AnchorLink>
            </p>
          </div>
          <div className="columns download">
            <a
              aria-label="download-resume"
              href="https://docs.google.com/document/d/1BVaBmjF_cEJfX9o0K8vTuRRh-qAL9PxtyuNbv7Hj_bk/edit?usp=sharing"
              className="button"
            >
              <span>
                <MdDescription focusable="false" />
              </span>
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
