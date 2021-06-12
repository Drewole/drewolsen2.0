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
				<p className={available}>
					Have a Project? I'm <span>{availabilityText}</span>
				</p>
			</div>
			<div className="nine columns main-col">
				<h2>About Me</h2>
				<p>
					I am a Front-End Web Developer with around ten years of experience. Some might consider me a Developer that can Design. I have an eye for design but also understand, can implement, and explain the technical side of Website Development.
				</p>
				<p>
					My start in Web Development began ten years ago and I have strived to be on the cutting edge of the
					new web technologies ever since. Because of this, <span className="bold">I recently graduated from an intense, 12-week boot camp to level up my back-end skills.</span> This is a regular practice so I can improve the quality of work I provide my clients, and ensure I am using the most appropriate technology for their project.
				</p>
				<p>
					Have a project you might want my help with?
					<AnchorLink className="form-link" to="/#contact" >
						Let's chat.
					</AnchorLink>

				</p>

				<h3>My skills include but are not limited to:</h3>
				<p className="small">
					HTML5 - SCSS - CSS3 - Responsive Design - JS - React.js - Express.js - MongoDB - MySQL - Node.js - Gatsby - Sketch - Figma - Adobe Suite - Netlify - Webpack - Docker - Git - Gulp
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
									<FaPhone />
								</span>
								952.381.5559
							</a>
							<a className="form-link" href="https://forms.gle/s9VwLkV3KA4xjcmk6">
								<span>
									<FaEnvelope />
								</span>
								Contact Me
							</a>
						</p>

					</div>
					<div className="columns download">
						<AnchorLink to="/#contact" className="button">
							<span>
								<MdDescription />
							</span>
							Contact Me
						</AnchorLink>

					</div>
				</div>
			</div>
		</div>
	</section>
);

export default About;
