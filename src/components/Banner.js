import React from 'react';
import { MdCardTravel } from 'react-icons/md';

import SocialLinks from './SocialLinks';

const Banner = () => (
	<div className="row banner">
		<div className="banner-text">
			<h1 className="responsive-headline">A Designer That Can Code.</h1>
			<h3>
				A Multi-faceted Front-End Web Developer with a knack for effectively conceptualizing and delivering
				elegant, user-friendly solutions.
				<br />
				<a className="smoothscroll" href="#portfolio">
					View My Portfolio{' '}
					<span>
						<MdCardTravel />
					</span>
				</a>
			</h3>
			<hr />
			<SocialLinks />
		</div>
	</div>
);

export default Banner;
