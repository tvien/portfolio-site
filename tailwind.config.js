const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Raleway', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/forms')]
}
