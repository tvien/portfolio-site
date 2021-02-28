import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { FiDownload } from 'react-icons/fi'

import LandingImage from './landing-image'
import resumePdf from '../files/Tony_Vien-Resume.pdf'

import { useSpring, animated, config } from 'react-spring'

const LandingHero = props => {
	const heroUrl =
		'https://images.unsplash.com/photo-1526040652367-ac003a0475fe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3900&q=80'

	const colorSpectrum = [
		'linear-gradient(45deg, rgba(250,139,255), rgba(43,210,255),  rgba(43,255,136))',

		'linear-gradient(125deg, rgba(81,220,255), rgba(206,94,255),  rgba(255,222,79))',

		'linear-gradient(135deg, rgba(255,154,139), rgba(255,106,136),  rgba(255,153,172))',

		'linear-gradient(165deg, rgba(255,119,43), rgba(250,217,97),  rgba(255,119,43))',

		'linear-gradient(225deg, rgba(65,88,208), rgba(200,80,192),  rgba(255,204,112))',

		'linear-gradient(335deg, rgba(255,60,172), rgba(120,75,160), rgba(43,134,197)',

		'linear-gradient(25deg, rgba(81,220,255), rgba(206,94,255),  rgba(255,222,79))',

		'linear-gradient(45deg, rgba(250,139,255), rgba(43,210,255),  rgba(43,255,136))'
	]

	const animationDuration = 2500

	const [reset, setReset] = useState(false)

	const animatedProps = useSpring({
		reset: reset,
		from: { backgroundImage: colorSpectrum[0] },

		to: colorSpectrum.map(grad => ({ backgroundImage: grad })),

		// to: async next => {
		// 	while (1) {
		// 		for (const spectrum of colorSpectrum) {
		// 			await next({ backgroundImage: spectrum })
		// 		}
		// 	}
		// },
		config: {
			// ...config.molasses
			duration: animationDuration
		}
	})

	useEffect(() => {
		const i = setInterval(() => {
			console.log('resetting animationg...')
			setReset(res => !res)
			setReset(res => !res)
		}, colorSpectrum.length * animationDuration)

		return () => {
			clearInterval(i)
		}
	}, [])

	return (
		<>
			<div className='hidden lg:flex lg:flex-wrap h-5/6'>
				<div className='relative w-full lg:flex lg:items-center lg:w-1/2'>
					<div
						style={{ zIndex: 1 }}
						className='w-11/12 pt-8 mx-auto transform translate-x-9'
					>
						<h1 className='text-3xl'>Hi, my name is Tony 👋</h1>

						<div className='w-10 h-1 mt-4 mb-3  bg-gradient-to-br from-green-300 to-blue-500' />

						<h1 className='text-lg'>
							I'm a <strong>full-stack web developer</strong> in Tampa, FL
						</h1>

						{/* <animated.div
							style={{
								height: 200,
								width: '100%',
								...animatedProps
							}}
						></animated.div> */}

						<animated.h2
							style={animatedProps}
							className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-5xl font-bold pb-2'
						>
							with a passion for creating unique user experiences
						</animated.h2>

						<div className='flex space-x-6 mt-6'>
							<a
								href='#contact'
								className='bg-gradient-to-br from-green-300 to-blue-500 px-4 py-2 text-lg text-white rounded-md focus:ring-2 focus:outline-none hover:shadow-lg hover:from-green-400 hover:to-blue-700'
							>
								Contact Me
							</a>

							<a
								href={resumePdf}
								download
								className='flex items-center ring-2 space-x-2 ring-green-300 px-4 py-2 text-base rounded-md focus:ring-2 text-green-300 focus:outline-none hover:bg-green-300 hover:bg-opacity-10'
							>
								<FiDownload /> <p>Resume</p>
							</a>
						</div>
					</div>

					<svg
						class='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
						fill='currentColor'
						viewBox='0 0 100 100'
						preserveAspectRatio='none'
						aria-hidden='true'
					>
						<polygon points='50,0 100,0 50,100 0,100' />
					</svg>
				</div>

				<div className='w-full lg:w-1/2'>
					<LandingImage />
				</div>
			</div>

			<div
				className='lg:hidden h-auto w-full bg-cover bg-bottom'
				style={{
					backgroundImage: `linear-gradient(to top, rgba(245, 246, 252, 0.36), rgba(255, 255, 255, 0.53)),
				url('${heroUrl}')`
				}}
			>
				<div className='relative w-full py-8'>
					<div className='w-11/12 pt-8 mx-auto'>
						<h1 className='text-3xl'>Hi, my name is Tony 👋</h1>

						<div className='w-10 h-1 mt-4 mb-3  bg-gradient-to-br from-green-300 to-blue-500' />

						<h1 className='text-base'>
							I'm a <strong>full-stack web developer</strong> in Tampa, FL
						</h1>

						<h2 className='text-4xl font-bold'>
							with a passion for creating unique user experiences
						</h2>

						<div className='flex space-x-6 mt-6'>
							<a
								href='#contact'
								className='bg-gradient-to-br from-green-300 to-blue-500 px-3 py-1 text-lg text-white rounded-md focus:ring-2 focus:outline-none hover:shadow-lg hover:from-green-400 hover:to-blue-700'
							>
								Contact Me
							</a>

							<a
								href={resumePdf}
								download
								className='flex items-center ring-2 space-x-2 ring-green-300 px-4 py-2 text-base rounded-md focus:ring-2 text-green-300 focus:outline-none  hover:bg-green-300 hover:bg-opacity-10'
							>
								<FiDownload /> <p>Resume</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

LandingHero.propTypes = {}

export default LandingHero
