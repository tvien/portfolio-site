import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFormspark } from '@formspark/use-formspark'

import { BiMailSend } from 'react-icons/bi'
import { VscGithub } from 'react-icons/vsc'
import { SiLinkedin } from 'react-icons/si'
import { FiPhone, FiMail } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SectionHeader from './section-header'

const ContactImage = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "Card-Reader.png" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
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

const Contact = props => {
	const [submit, submitting] = useFormspark({
		formId: 'ddZF0lOO'
	})
	const [email, setEmail] = useState('')
	const [company, setCompany] = useState('')
	const [message, setMessage] = useState('')

	return (
		<div id='contacts' className='container mx-auto lg:max-w-7xl px-8 lg:px-16'>
			<div className='w-full mb-12'>
				<SectionHeader title='Contact' />
			</div>

			<div class='flex flex-wrap'>
				<div className='w-full lg:w-2/5 mb-12'>
					<h2 className='text-3xl mb-3'>Let's get in touch</h2>

					<hr className='w-14 pb-3' />

					<ul className='space-y-3 mb-4'>
						<li className='flex items-center space-x-3'>
							<HiOutlineLocationMarker size='1.5rem' />{' '}
							<p class='text-sm'>Tampa, FL</p>
						</li>
						<li className='flex items-center space-x-3'>
							<FiPhone size='1.35rem' />{' '}
							<a class='text-sm' href='tel:+1-813-817-5146'>
								(813) 817-5146
							</a>
						</li>
						<li className='flex items-center space-x-3'>
							<FiMail size='1.35rem' />
							<a class='text-sm' href='mailto:info@tonyvien.com'>
								info@tonyvien.com
							</a>
						</li>
					</ul>

					<div className='flex items-center space-x-6'>
						<a href='https://github.com/tvien' target='_blank'>
							<VscGithub size='1.35rem' />
						</a>

						<a href='https://www.linkedin.com/in/tonyvien' target='_blank'>
							<SiLinkedin size='1.35rem' />
						</a>
					</div>

					<div className='w-2/3 hidden md:block'>
						<ContactImage />
					</div>
				</div>

				<div className='w-full lg:w-3/5'>
					<form
						className='space-y-4'
						onSubmit={async e => {
							e.preventDefault()
							await submit({ company, email, message })
						}}
					>
						<label class='block'>
							<span class='text-gray-700 text-sm font-semibold'>Company</span>
							<input
								type='text'
								value={company}
								onChange={e => setCompany(e.target.value)}
								class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
								placeholder='Optional'
							/>
						</label>

						<label class='block'>
							<span class='text-gray-700 text-sm font-semibold'>Email</span>
							<input
								type='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
								class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
								// placeholder='john@example.com'
								required
							/>
						</label>

						<label class='block'>
							<span class='text-gray-700 text-sm font-semibold'>Message</span>
							<textarea
								value={message}
								onChange={e => setMessage(e.target.value)}
								class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
								rows='5'
								required
							></textarea>
						</label>

						<button
							type='submit'
							disabled={submitting}
							className='flex space-x-2 items-center ml-auto bg-gradient-to-br from-green-300 to-blue-500 px-3 py-1 text-lg text-white rounded-md focus:ring-2 focus:outline-none hover:shadow-lg hover:from-green-400 hover:to-blue-700'
						>
							<BiMailSend size='1.25rem' /> <p>Send</p>
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

Contact.propTypes = {}

export default Contact
