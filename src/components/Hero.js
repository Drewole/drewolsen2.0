import React from 'react';
import BannerImage from './BannerImage';

const Hero = () => (
	<header id="home">
		<div id="dust">
			<BannerImage
				title={"Full-Stack Developer"}
				link={"/#portfolio"}
				backgroundImage={"image.jpg"}
			/>
		</div>
	</header>
);

export default Hero;
