import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LandingHero from '../components/landing-hero'
import Quote from '../components/quote'
import About from '../components/about'
import CareerTimeline from '../components/career-timeline'
import Portfolio from '../components/portfolio'
import Skills from '../components/skills'
import Contact from '../components/contact'

const IndexPage = () => (
	<Layout>
		<SEO title='Home' />

		{/* Landing */}
		<LandingHero />

		{/* Quote */}
		<Quote />

		{/* About me */}
		<div id='about' className='py-9' />
		<About />

		{/* Career timeline */}
		<div id='career' className='py-9' />
		<CareerTimeline />

		{/* Portfolio */}
		<div id='portfolio' className='py-9' />
		<Portfolio />

		{/* Skills */}
		<div id='skills' className='py-9' />
		<Skills />

		{/* Contact */}
		<div id='contact' className='py-9' />
		<Contact />
	</Layout>
)

export default IndexPage
