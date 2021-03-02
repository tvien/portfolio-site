const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Raleway', ...defaultTheme.fontFamily.sans]
			},
			transitionDuration: {
				60000: '60000ms'
			}
		}
	},
	variants: {
		scale: ['responsive', 'hover', 'focus', 'group-hover'],
		transform: ['responsive', 'group-hover'],
		// transformOrigin: ['responsive'],
		// transitionDelay: ['responsive'],
		// transitionDuration: ['responsive'],
		// transitionProperty: ['responsive'],
		// transitionTimingFunction: ['responsive'],
		translate: ['responsive', 'hover', 'focus', 'group-hover'],
		extend: {}
	},
	plugins: [require('@tailwindcss/forms')]
}
