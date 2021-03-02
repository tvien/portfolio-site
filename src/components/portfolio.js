import React from 'react'
import PropTypes from 'prop-types'

import SectionHeader from './section-header'

import { AiOutlineGithub } from 'react-icons/ai'

import engagedTextingUrl from '../images/portfolio-engagedtexting.jpg'
import tampaRealtyServiceUrl from '../images/portfolio-tamparealtyservice.jpg'
import portfolioSiteUrl from '../images/portfolio-personal.jpg'

import { useSpring, useTrail, animated, config } from 'react-spring'

import useInViewChecker from '../hooks/useInViewChecker'

const portfolioWork = [
	{
		imgUrl: portfolioSiteUrl,
		title: 'Personal Portfolio',
		description:
			'A simple online portfolio made with React, Gatsby, and Tailwind CSS (Currently a work-in-progress)',
		techUsed: ['ReactJS', 'Gatsby', 'Tailwind CSS'],
		github: 'https://github.com/tvien/portfolio-site',
		visitLink: ''
	},
	{
		imgUrl: tampaRealtyServiceUrl,
		title: 'Tampa Realty Service',
		description:
			'Personal online realtor portfolio to display current listings, search or list homes, or view the local walkscore',
		techUsed: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
		github: 'https://github.com/tvien/tampa-realty-service',
		visitLink: 'https://tvien.github.io/tampa-realty-service/'
	},
	{
		imgUrl: engagedTextingUrl,
		title: 'Engaged Texting',
		description:
			'A software as a service application for providing simple and affordable SMS marketing solutions',
		techUsed: [
			'ReactJS',
			'Redux',
			'TypeScript',
			'MySql',
			'Material-UI',
			'NodeJS',
			'AWS',
			'Twilio'
		],
		github: '',
		visitLink: 'https://www.engagedtexting.com/'
	}
]

export const PortfolioCard = ({
	imgUrl,
	title,
	description,
	techUsed,
	github,
	visitLink
}) => {
	return (
		<div className='w-full overflow-hidden rounded-md shadow-md hover:shadow-xl transition-shadow group'>
			<div className='h-auto overflow-hidden'>
				<img
					className='h-auto w-full transform group-hover:scale-150 group-hover:translate-x-16 group-hover:translate-y-10 duration-60000'
					src={imgUrl}
					alt=''
				/>
			</div>

			<div className='p-4'>
				<div className='flex items-center justify-between'>
					<h3 className='text-lg font-semibold'>{title}</h3>

					<div className='flex items-center space-x-4'>
						{github && (
							<a target='_blank' href={github}>
								<AiOutlineGithub className='text-2xl text-gray-600' />
							</a>
						)}

						{visitLink && (
							<a
								target='_blank'
								href={visitLink}
								className='ring-1 ring-green-300 px-2 py-1 text-sm text-green-300 rounded-md focus:outline-none hover:bg-green-100'
							>
								Visit
							</a>
						)}
					</div>
				</div>

				<div className='w-10 h-px mt-2 mb-2  bg-gradient-to-br from-green-300 to-blue-500' />

				<p className='text-base'>{description}</p>

				<br />

				<p className='text-sm'>
					<strong>Technologies Used:</strong> {techUsed && techUsed.join(', ')}
				</p>
			</div>
		</div>
	)
}

PortfolioCard.propTypes = {
	imgUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	techUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
	github: PropTypes.string,
	visitLink: PropTypes.string
}

const Portfolio = props => {
	// const { ref, isInView } = useInViewChecker()

	// const trail = useTrail(portfolioWork.length, {
	// 	opacity: isInView ? 1 : 0,
	// 	// transform: isInView ? 'translateY(0px)' : 'translateY(25px)',

	// 	reverse: !isInView,
	// 	config: config.gentle
	// })

	return (
		<div
			// ref={ref}
			className='container mx-auto lg:max-w-7xl px-8 lg:px-16'
		>
			<div className='w-full mb-12'>
				<SectionHeader title='Portfolio' />
			</div>

			<div class='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{portfolioWork.map(work => (
					<PortfolioCard {...work} />
				))}
				{/* {trail.map((props, ndx) => (
					<animated.div style={props}>
						<PortfolioCard {...portfolioWork[ndx]} />
					</animated.div>
				))} */}
			</div>
		</div>
	)
}

Portfolio.propTypes = {}

export default Portfolio
