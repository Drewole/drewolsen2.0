import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
	<ul className="social">
		<li>
			<a className="twitter" rel="noopener" aria-label="twitter" href="https://twitter.com/drewole">
				<AiOutlineTwitter focusable={false} />
			</a>
		</li>
		<li>
			<a className="instagram" rel="noopener" aria-label="instagram" href="https://instagram.com/drewole">
				<AiFillInstagram focusable={false} />
			</a>
		</li>
		<li>
			<a className="linkedin" rel="noopener" aria-label="linkedin" href="https://www.linkedin.com/in/drew-olsen-74508447/">
				<AiOutlineLinkedin focusable={false} />
			</a>
		</li>
		<li>
			<a className="github" rel="noopener" aria-label="github" href="https://github.com/drewole">
				<AiOutlineGithub focusable={false} />
			</a>
		</li>
	</ul>
);

export default SocialLinks;
