import React from 'react'
import PropTypes from 'prop-types'

const SectionHeader = ({ title }) => {
	return (
		<div>
			<h2 className='text-5xl font-bold text-gray-800'>{title}</h2>

			<div className='w-10 h-1 mt-4 mb-4 bg-gradient-to-br from-green-300 to-blue-500' />
		</div>
	)
}

SectionHeader.propTypes = {
	title: PropTypes.string.isRequired
}

export default SectionHeader
