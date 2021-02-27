import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi'

import Logo1 from '../images/logo1.png'

const NavbarMobile = props => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

	return (
		<div className='sticky top-0 z-10 flex md:hidden '>
			{/* mobile nav button */}
			<button className='ml-auto p-3' onClick={() => setIsMobileNavOpen(true)}>
				<HiMenuAlt3 size='1.75rem' />
			</button>

			{isMobileNavOpen && (
				<div className='absolute w-full pb-6 m left-0 rounded-md shadow-lg bg-white'>
					<div className='w-full flex justify-between'>
						<button
							className='ml-auto p-3'
							onClick={() => setIsMobileNavOpen(false)}
						>
							<HiOutlineX size='1.75rem' />
						</button>
					</div>

					<div className='w-full text-center'>
						{/* <img
							className='h-8 w-auto mb-8 mx-auto sm:h-10'
							src={LogoSvg}
							alt=''
						/> */}
						<div className='overflow-hidden rounded-full h-20 w-20 mx-auto mb-6'>
							<a href='/'>
								<img className='h-full w-auto' src={Logo1} alt='' />
							</a>
						</div>

						<ul className='space-y-9'>
							<li>
								<a href='#about' onClick={() => setIsMobileNavOpen(false)}>
									About
								</a>
							</li>
							<li>
								<a href='#career' onClick={() => setIsMobileNavOpen(false)}>
									Career
								</a>
							</li>
							<li>
								<a href='#portfolio' onClick={() => setIsMobileNavOpen(false)}>
									Portfolio
								</a>
							</li>
							<li>
								<a href='#skills' onClick={() => setIsMobileNavOpen(false)}>
									Skills
								</a>
							</li>
							<li>
								<a href='#contact' onClick={() => setIsMobileNavOpen(false)}>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}

NavbarMobile.propTypes = {}

export default NavbarMobile
