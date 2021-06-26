import React from 'react';

import Navigation from './Navigation';
import Headroom from 'react-headroom'

const Header = () => {

	return (
		<Headroom>
			<header>
				<Navigation />
			</header>
		</Headroom>
	);
};

export default Header;
