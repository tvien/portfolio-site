import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './section-header'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { useSpring, animated, config } from 'react-spring'

import profileUrl from '../images/profile.jpg'

import useInViewChecker from '../hooks/useInViewChecker'

const AboutImage = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "iMac.png" }) {
				childImageSharp {
					fluid(maxWidth: 600) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	if (!data?.placeholderImage?.childImageSharp?.fluid) {
		return <div>Picture not found</div>
	}

	return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const About = () => {
	// const { ref, isInView } = useInViewChecker()

	// const { opacity, transform: t1 } = useSpring({
	// 	opacity: isInView ? 1 : 0,
	// 	transform: isInView ? 'translateX(0px)' : 'translateX(-50px)',

	// 	delay: 150,
	// 	reverse: !isInView,
	// 	config: config.molasses
	// })

	// const { transform: t2 } = useSpring({
	// 	transform: isInView ? 'translateY(0px)' : 'translateY(50px)',

	// 	delay: 150,
	// 	reverse: !isInView,
	// 	config: config.molasses
	// })

	return (
		<div
			// ref={ref}
			className='container mx-auto lg:max-w-7xl px-8 lg:px-16'
		>
			<SectionHeader title='About' />

			<div class='grid grid-cols-1 md:grid-cols-2 gap-8'>
				{/* <animated.div style={{ opacity, transform: t1 }}>
					<AboutImage />
				</animated.div> */}
				<div>
					<AboutImage />
				</div>

				<div>
					<div className='h-32 w-32 mb-4 rounded-full overflow-hidden'>
						<img className='h-full' src={profileUrl} alt='' />
					</div>

					<h2 className='text-3xl mb-3'>A bit about me</h2>

					<hr className='w-14 pb-3' />

					<p className='text-base'>
						I started learning some basic HTML when I created my first{' '}
						<a href='https://en.wikipedia.org/wiki/Xanga'>Xanga</a> blog profile
						back in 2005. At the time, I knew next to nothing about programming,
						but definitely enjoyed making my website look nice (for an early
						2000s website at least).
					</p>

					<br />

					<p className='text-base'>
						These days, I strive to write clean code and create intuitive user
						experiences. I always find myself inspired by other developers' work
						and aim to learn something new about programming everyday.
					</p>

					<br />

					<p className='text-base'>
						When I'm not programming, I can usually be found trying out a new
						local restaurant with friends, immersed in some retro video game, or
						at home watching Bob's Burgers.
					</p>
				</div>
			</div>
		</div>
	)
}

About.propTypes = {}

export default About
