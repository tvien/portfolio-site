import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
	return (
		<footer
			style={{
				marginTop: `2rem`
			}}
		>
			<div className='text-center py-6'>
				© {new Date().getFullYear()}, Site made by Tony V.
			</div>
		</footer>
	)
}

Footer.propTypes = {}

export default Footer
