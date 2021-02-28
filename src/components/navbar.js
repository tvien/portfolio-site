import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import useScrollTopChecker from '../hooks/useScrollTopChecker'

import { VscGithub } from 'react-icons/vsc'
import { SiLinkedin } from 'react-icons/si'

import LogoSvg from '../images/logo.svg'
import Logo1 from '../images/logo1.png'

const Navbar = ({ siteTitle }) => {
	const scrolled = useScrollTopChecker()

	return (
		<header
			style={{
				// backgroundColor: 'white'
				backgroundColor: scrolled ? 'white' : 'transparent'
			}}
			className='hidden md:block sticky top-0 z-10 px-8 lg:px-16'
		>
			<nav className='h-16 flex justify-between items-center'>
				<div className='flex items-center space-x-6'>
					<div>
						{/* <a href='/'>
							<img className='h-6 w-auto' src={LogoSvg} alt='' />
						</a> */}
						<div className='overflow-hidden rounded-full h-12 w-12'>
							<a href='/'>
								<img className='h-full w-auto' src={Logo1} alt='' />
							</a>
						</div>
					</div>

					<ul className='flex space-x-9'>
						<li>
							<a href='#about'>About</a>
						</li>
						<li>
							<a href='#career'>Career</a>
						</li>
						<li>
							<a href='#portfolio'>Portfolio</a>
						</li>
						<li>
							<a href='#skills'>Skills</a>
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
				</div>

				<div className='flex items-center space-x-6'>
					<ul className='lg:flex space-x-6'>
						{/* <li>
							<a href=''>(813) 817-5146</a>
						</li> */}
						<li>
							<a class='text-sm font-semibold' href='mailto:info@tonyvien.com'>
								info@tonyvien.com
							</a>
						</li>
					</ul>

					<a href='https://github.com/tvien' target='_blank'>
						<VscGithub size='1.35rem' />
					</a>

					<a href='https://www.linkedin.com/in/tonyvien' target='_blank'>
						<SiLinkedin size='1.35rem' />
					</a>
				</div>
			</nav>
		</header>
	)
}

Navbar.propTypes = {
	siteTitle: PropTypes.string
}

Navbar.defaultProps = {
	siteTitle: ``
}

export default Navbar
