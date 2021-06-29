import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import { siteMetadata } from '../../gatsby-config';
import ProfilePic from './ProfilePic';
import { AnchorLink } from "gatsby-plugin-anchor-links"

const availabilityText = siteMetadata.available === true ? 'available!' : 'unavailable :(';
const available = siteMetadata.available === true ? 'available' : '';
const About = () => (
	<section id="about">
		<div className="row">
			<div className="three columns pic">
				<ProfilePic />
				<p className={available}>Have a Project? Looking to hire?</p>
				<p className={available}>I'm <span>{availabilityText}</span></p>
			</div>
			<div className="nine columns main-col">
				<h2>About Me</h2>
				<p>
					My name is Drew, and I am a Full-Stack Web Developer with around eight years of web development experience. Some might consider me a Developer that can Design. I have an eye for design but also understand, can implement, and explain the technical side of Website Development.
				</p>
				<p>
					My start in Web Development began ten years ago and I have strived to be on the cutting edge of the
					new web technologies ever since. Because of this, <span className="bold">I recently graduated from an intense, 12-week boot camp to level up my back-end skills.</span> I am constantly learning so I can improve the quality of work I provide my clients, and ensure I am using the most appropriate technology for their project.
				</p>
				<p>
					Have a project you might want my help with?
					<AnchorLink className="form-link" to="/#contact" >
						Let's chat.
					</AnchorLink>

				</p>

				<h3>My skills include but are not limited to:</h3>
				<p className="small">
					HTML5 - SCSS - CSS3- Git - JavaScript - React.js - Express.js - Node.js - Gatsby - MongoDB - MySQL - Sketch - Figma - Adobe Suite - Responsive Design
				</p>
				<div className="row">
					<div className="columns contact-details">
						<h2>Contact Details</h2>
						<h4>Drew Olsen</h4>
						<p className="address">
							<span>
								11432 Zion Cir
								<br /> Bloomington, MN 55437
							</span>
						</p>
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
						<a aria-label="download-resume" href="https://docs.google.com/document/d/13aRDfbAJbjCxB8CvQ_ErsKtz1Sn7N7-E_5pJXJmljXg/edit?usp=sharing" className="button">
							<span>
								<MdDescription focusable="false" />
							</span>
							Download Resume
						</a>

					</div>
				</div>
			</div>
		</div>
	</section>
);

export default About;
