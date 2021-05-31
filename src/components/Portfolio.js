import React from 'react';
import { FaPlus, FaTag, FaTimes } from 'react-icons/fa';

import Coffee from '../images/portfolio/mnapt-square.jpg';
import Arrow from '../images/portfolio/arrow-square.jpg';
import Judah from '../images/portfolio/sweetbasil-square.jpg';
import IntoTheLight from '../images/portfolio/jrhoades2017-square.jpg';

import CoffeeModal from '../images/portfolio/modals/m-coffee.jpg';
import ConsoleModal from '../images/portfolio/modals/m-console.jpg';
import JudahModal from '../images/portfolio/modals/m-judah.jpg';
import IntoTheLightModal from '../images/portfolio/modals/m-intothelight.jpg';

const Portfolio = () => (
	<section id="portfolio">
		<div className="row">
			<div className="twelve columns collapsed">
				<h1>Some of My Work.</h1>
				<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
					<div className="columns portfolio-item">
						<div className="item-wrap">
							<a href="#modal-01" title="">
								<img alt="" src={Coffee} />
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>MNAPT</h5>
										<p>Web Design, Web Development</p>
									</div>
								</div>
								<div className="link-icon">
									<FaPlus />
								</div>
							</a>
						</div>
					</div>

					<div className="columns portfolio-item">
						<div className="item-wrap">
							<a href="#modal-02" title="">
								<img alt="" src={Arrow} />
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>Arrow</h5>
										<p>Web Development</p>
									</div>
								</div>
								<div className="link-icon">
									<FaPlus />
								</div>
							</a>
						</div>
					</div>

					<div className="columns portfolio-item">
						<div className="item-wrap">
							<a href="#modal-03" title="">
								<img alt="" src={Judah} />
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>Judah</h5>
										<p>Webdesign</p>
									</div>
								</div>
								<div className="link-icon">
									<FaPlus />
								</div>
							</a>
						</div>
					</div>

					<div className="columns portfolio-item">
						<div className="item-wrap">
							<a href="#modal-04" title="">
								<img alt="" src={IntoTheLight} />
								<div className="overlay">
									<div className="portfolio-item-meta">
										<h5>Into The Light</h5>
										<p>Photography</p>
									</div>
								</div>
								<div className="link-icon">
									<FaPlus />
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="modal-01" className="popup-modal mfp-hide">
			<img className="scale-with-grid" src={CoffeeModal} alt="" />

			<div className="description-box">
				<h4>Coffee Cup</h4>
				<p>
					Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
					elit consequat ipsum, nec sagittis sem nibh id elit.
				</p>
				<span className="categories">
					<FaTag /> Branding, Webdesign
				</span>
			</div>

			<div className="link-box">
				<a href="http://www.behance.net">Details</a>
				<a href="#portfolio" className="popup-modal-dismiss">
					Close
				</a>
			</div>
			<a href="#portfolio" className="popup-modal-close">
				<FaTimes />
			</a>
		</div>

		<div id="modal-02" className="popup-modal mfp-hide">
			<img className="scale-with-grid" src={ConsoleModal} alt="" />

			<div className="description-box">
				<h4>Console</h4>
				<p>
					Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
					elit consequat ipsum, nec sagittis sem nibh id elit.
				</p>
				<span className="categories">
					<FaTag />
					Branding, Web Development
				</span>
			</div>

			<div className="link-box">
				<a href="http://www.behance.net">Details</a>
				<a href="#portfolio" className="popup-modal-dismiss">
					Close
				</a>
			</div>
			<a href="#portfolio" className="popup-modal-close">
				<FaTimes />
			</a>
		</div>

		<div id="modal-03" className="popup-modal mfp-hide">
			<img className="scale-with-grid" src={JudahModal} alt="" />

			<div className="description-box">
				<h4>Judah</h4>
				<p>
					Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
					elit consequat ipsum, nec sagittis sem nibh id elit.
				</p>
				<span className="categories">
					<FaTag />
					Branding
				</span>
			</div>

			<div className="link-box">
				<a href="http://www.behance.net">Details</a>
				<a href="#portfolio" className="popup-modal-dismiss">
					Close
				</a>
			</div>
			<a href="#portfolio" className="popup-modal-close">
				<FaTimes />
			</a>
		</div>

		<div id="modal-04" className="popup-modal mfp-hide">
			<img className="scale-with-grid" src={IntoTheLightModal} alt="" />

			<div className="description-box">
				<h4>Into the Light</h4>
				<p>
					Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
					elit consequat ipsum, nec sagittis sem nibh id elit.
				</p>
				<span className="categories">
					<FaTag />
					Photography
				</span>
			</div>

			<div className="link-box">
				<a href="http://www.behance.net">Details</a>
				<a href="#portfolio" className="popup-modal-dismiss">
					Close
				</a>
			</div>
			<a href="#portfolio" className="popup-modal-close">
				<FaTimes />
			</a>
		</div>
	</section>
);

export default Portfolio;
