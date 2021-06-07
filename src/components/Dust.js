import React from 'react'
import Particles from 'react-particles-js'
import dustConfig from './Dust-config'

const Dust = () => {
	return (
		<Particles
			params={dustConfig}
			style={{
				position: 'absolute',
				zIndex: -4,
				left: 0,
				right: 0,
				bottom: 0,
				top: 0
			}}
		/>
	)
}

export default Dust
