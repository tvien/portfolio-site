import React from 'react'
import PropTypes from 'prop-types'

import { FaQuoteLeft } from 'react-icons/fa'

import { useSpring, animated, config } from 'react-spring'

const Quote = props => {
	const springProps = useSpring({
		from: {
			opacity: 0,
			transform: 'translateY(50px)'
		},

		opacity: 1,
		transform: 'translateY(0px)',
		delay: 150,
		config: config.molasses
	})

	return (
		<animated.div
			style={springProps}
			className='container mx-auto pt-12 lg:pt-6 lg:max-w-5xl px-8 lg:px-16'
		>
			<div className='relative rounded-md mt-16'>
				<div className='absolute -top-16'>
					<FaQuoteLeft size='6rem' className='text-blue-600 opacity-20' />
				</div>

				<blockquote
					className='text-4xl text-gray-600 font-semibold'
					cite='https://simonecarletti.com/quotes/52a5eb7c0d52b0753b00000a/'
				>
					Software and cathedrals are much the same — first we build them, then
					we pray
				</blockquote>

				<br />

				<p className='text-xl font-medium text-gray-400'>- Sam Redwine</p>
			</div>
		</animated.div>
	)
}

Quote.propTypes = {}

export default Quote
