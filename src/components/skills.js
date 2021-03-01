import React from 'react'
import PropTypes from 'prop-types'

import SectionHeader from './section-header'

import useInViewChecker from '../hooks/useInViewChecker'

const languages = [
	{
		imgSrc: 'https://cdn.svgporn.com/logos/html-5.svg',
		alt: 'html5',
		siteUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/css-3.svg',
		alt: 'css3',
		siteUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/javascript.svg',
		alt: 'javascript',
		siteUrl: 'https://www.javascript.com/'
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
		alt: 'typescript',
		siteUrl: 'https://www.typescriptlang.org/'
	},

	{
		imgSrc: 'https://cdn.svgporn.com/logos/java.svg',
		alt: 'java',
		siteUrl: 'https://www.java.com/en/'
	},

	{
		imgSrc: null,
		name: 'VB.NET',
		alt: 'visual basic',
		siteUrl:
			'https://docs.microsoft.com/en-us/dotnet/visual-basic/getting-started/'
	},

	{
		imgSrc: 'https://cdn.svgporn.com/logos/php.svg',
		alt: 'php',
		siteUrl: 'https://www.php.net/'
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/mysql.svg',
		alt: 'mysql',
		siteUrl: 'https://www.mysql.com/'
	}
]

const frameworksAndLib = [
	{
		imgSrc: 'https://cdn.svgporn.com/logos/react.svg',
		alt: 'react',
		siteUrl: 'https://reactjs.org/'
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/angular.svg',
		alt: 'angular',
		siteUrl: 'https://angular.io/'
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/redux.svg',
		alt: 'redux',
		siteUrl: 'https://react-redux.js.org/'
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/dotnet.svg',
		alt: '.net',
		siteUrl: ''
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/express.svg',
		alt: 'express',
		siteUrl: 'https://expressjs.com/'
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/jquery.svg',
		alt: 'jquery',
		siteUrl: 'https://jquery.com/'
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/material-ui.svg',
		alt: 'material ui',
		siteUrl: 'https://material-ui.com/'
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/bootstrap.svg',
		alt: 'bootstrap',
		siteUrl: 'https://getbootstrap.com/'
	}
]

const software = [
	{
		imgSrc: 'https://cdn.svgporn.com/logos/nodejs-icon.svg',
		alt: 'nodejs',
		siteUrl: 'https://nodejs.org/en/'
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/git.svg',
		alt: 'git',
		siteUrl: 'https://git-scm.com/'
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/github-icon.svg',
		alt: 'github',
		siteUrl: 'https://github.com/'
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/asana.svg',
		alt: 'asana',
		siteUrl: 'https://asana.com/'
	},

	{
		imgSrc: 'https://cdn.svgporn.com/logos/visual-studio.svg',
		alt: 'visual studio',
		siteUrl: 'https://visualstudio.microsoft.com/'
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/visual-studio-code.svg',
		alt: 'visual studio code',
		siteUrl: 'https://code.visualstudio.com/'
	},
	{
		imgSrc: 'https://cdn.svgporn.com/logos/aws.svg',
		alt: 'amazon web services',
		siteUrl: 'https://aws.amazon.com/'
	},

	{
		imgSrc: 'https://cdn.svgporn.com/logos/sass.svg',
		alt: 'sass',
		siteUrl: 'https://sass-lang.com/'
	}
]

const Skills = props => {
	// const { ref, isInView } = useInViewChecker()

	return (
		<div
			//  ref={ref}
			className='container mx-auto lg:max-w-7xl px-8 lg:px-16'
		>
			<div className='w-full mb-6'>
				<SectionHeader title='Skills' />
			</div>

			<div>
				<h3 className='text-2xl text-center text-gray-500'>Languages</h3>

				<hr className='w-10 mt-4 mb-6 mx-auto' />

				<div class='grid grid-cols-2 md:grid-cols-4 gap-1'>
					{languages.map(({ alt, imgSrc, name = '', siteUrl }) => (
						<a
							target='_blank'
							href={siteUrl}
							className='flex text-center items-center justify-center p-8 bg-gray-100 hover:bg-gray-50 rounded-sm'
						>
							{imgSrc ? (
								<img className='h-12 w-auto' src={imgSrc} alt={alt} />
							) : (
								<p className='text-gray-700 text-2xl font-semibold'>{name}</p>
							)}
						</a>
					))}
				</div>
			</div>

			<div className='mt-12'>
				<h3 className='text-2xl text-center text-gray-500'>
					Frameworks & Libraries
				</h3>

				<hr className='w-10 mt-4 mb-6 mx-auto' />

				<div class='grid grid-cols-2 md:grid-cols-4 gap-1'>
					{frameworksAndLib.map(({ alt, imgSrc, name = '', siteUrl }) => (
						<a
							target='_blank'
							href={siteUrl}
							className='flex text-center items-center justify-center p-8 bg-gray-100 hover:bg-gray-50 rounded-sm'
						>
							{imgSrc ? (
								<img className='h-12 w-auto' src={imgSrc} alt={alt} />
							) : (
								<p className='text-gray-700 text-2xl font-semibold'>{name}</p>
							)}
						</a>
					))}
				</div>
			</div>

			<div className='mt-12'>
				<h3 className='text-2xl text-center text-gray-500'>Software</h3>

				<hr className='w-10 mt-4 mb-6 mx-auto' />

				<div class='grid grid-cols-2 md:grid-cols-4 gap-1'>
					{software.map(({ alt, imgSrc, name = '', siteUrl }) => (
						<a
							target='_blank'
							href={siteUrl}
							className='flex text-center items-center justify-center p-8 bg-gray-100 hover:bg-gray-50 rounded-sm'
						>
							{imgSrc ? (
								<img className='h-12 w-auto' src={imgSrc} alt={alt} />
							) : (
								<p className='text-gray-700 text-2xl font-semibold'>{name}</p>
							)}
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

Skills.propTypes = {}

export default Skills
