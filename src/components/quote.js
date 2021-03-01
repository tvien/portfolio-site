import React from 'react'
import PropTypes from 'prop-types'

import { FaQuoteLeft } from 'react-icons/fa'

import { useSpring, animated, config } from 'react-spring'

import useInViewChecker from '../hooks/useInViewChecker'

const Quote = props => {
	const { ref, isInView } = useInViewChecker(200)

	const springProps = useSpring({
		from: {
			opacity: 0,
			transform: 'translateY(50px)'
		},

		opacity: isInView ? 1 : 0,
		transform: isInView ? 'translateY(0px)' : 'translateY(50px)',
		delay: 150,
		// reverse: !isInView,

		config: config.molasses
	})

	return (
		<animated.div
			ref={ref}
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

				<p className='text-xl font-medium text-gray-400'>
					- Sam Redwine{' '}
					<span className='text-sm'>
						@ 4th International Software Process Workshop
					</span>
				</p>
			</div>
		</animated.div>
	)
}

Quote.propTypes = {}

export default Quote
