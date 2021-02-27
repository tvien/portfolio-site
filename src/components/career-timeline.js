import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './section-header'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { IoIosSchool } from 'react-icons/io'
import { FaLaptopCode, FaSms } from 'react-icons/fa'
import { BiBriefcase } from 'react-icons/bi'
import { SiWordpress } from 'react-icons/si'

import { useSpring, useTrail, animated, config } from 'react-spring'

import useInViewChecker from '../hooks/useInViewChecker'

const careerPoints = [
	{
		Icon: <SiWordpress className='text-xl text-white' />,
		title: 'Nov 2015 - SKILLZ World Wide Internship',
		description:
			'Started my first internship at one of the top online curriculum providers specializing in child psychology and development for martial arts and fitness instructors.'
	},
	{
		Icon: <FaLaptopCode className='text-xl text-white' />,
		title: 'Feb 2017 - Freelance Web Development',
		description:
			'Began my freelancing career during college by collaborating with a local realtor from Ellie and Associates Realty to create their online professional portfolio'
	},
	{
		Icon: <IoIosSchool className='text-xl text-white' />,
		title: 'May 2018 - Graduated at University of South Florida',
		description: '' // 'Go Bulls! 🤘'
	},
	{
		Icon: <BiBriefcase className='text-xl text-white' />,
		title: 'Aug 2018 - Tenex Software Solutions',
		description:
			'Landed my first professional software development role at Tenex Software Solutions - a small startup company known for their iPad-based electronic poll books used across the nation'
	},
	{
		Icon: <FaSms className='text-xl text-white' />,
		title: 'Dec 2019 - Engaged Texting',
		description:
			'Joined Engaged Texting - a small startup software company focused on creating SMS marketing solutions'
	}
]

const CareerImage = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "Folder.png" }) {
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

export const CareerPoint = ({ Icon, title, description }) => {
	return (
		<div>
			<div class='flex items-center mb-1'>
				<div
					class='flex items-center justify-center bg-gradient-to-br from-green-300 to-blue-500 rounded-full h-8 w-8'
					style={{ zIndex: 1 }}
				>
					{Icon}
				</div>

				<div class='flex-1 ml-4 font-medium'>{title}</div>
			</div>
			<div class='ml-12'>{description}</div>
		</div>
	)
}

CareerPoint.propTypes = {
	Icon: PropTypes.node,
	title: PropTypes.string,
	description: PropTypes.string
}

const CareerTimeline = () => {
	// const { ref, isInView } = useInViewChecker()

	// const trail = useTrail(careerPoints.length, {
	// 	opacity: isInView ? 1 : 0,
	// 	// transform: isInView ? 'translateX(0px)' : 'translateX(-25px)',

	// 	delay: 150,
	// 	reverse: !isInView,
	// 	config: config.gentle
	// })

	// const { opacity, height, transform } = useSpring({
	// 	opacity: isInView ? 1 : 0,
	// 	height: isInView ? '100%' : '0%',
	// 	transform: isInView ? 'translateX(0px)' : 'translateX(50px)',

	// 	delay: 150,
	// 	reverse: !isInView,
	// 	config: config.slow
	// })

	return (
		<div
			// ref={ref}
			className='container mx-auto flex flex-wrap lg:max-w-7xl px-8 lg:px-16'
		>
			<div className='w-full mb-6'>
				<SectionHeader title='Career' />
			</div>

			<div className='w-full px-8 pb-12 md:px-48 lg:px-0 order-1 lg:order-2 lg:w-2/5'>
				<CareerImage />
			</div>
			{/* <animated.div
				style={{ opacity, transform }}
				className='w-full px-8 pb-12 md:px-48 lg:px-0 order-1 lg:order-2 lg:w-2/5'
			>
				<CareerImage />
			</animated.div> */}

			<div className='w-full order-2 lg:order-1 lg:w-3/5'>
				<div class='relative'>
					<div class='z-0 absolute bg-gradient-to-b from-green-300 to-blue-500 h-full w-0.5 top-0 left-4' />
					{/* <animated.div
						style={{ height }}
						class='z-0 absolute bg-gradient-to-b from-green-300 to-blue-500 h-full w-0.5 top-0 left-4'
					/> */}

					<ul class='relative -top-8 list-none m-0 p-0 space-y-6'>
						{careerPoints.map(career => (
							<li>
								<CareerPoint
									Icon={career.Icon}
									title={career.title}
									description={career.description}
								/>
							</li>
						))}
						{/* {trail.map((props, ndx) => (
							<animated.li style={props}>
								<CareerPoint
									Icon={careerPoints[ndx].Icon}
									title={careerPoints[ndx].title}
									description={careerPoints[ndx].description}
								/>
							</animated.li>
						))} */}
					</ul>
				</div>
			</div>
		</div>
	)
}

CareerTimeline.propTypes = {}

export default CareerTimeline
