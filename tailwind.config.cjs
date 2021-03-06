/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#53C5B9',
				primaryLight: '#63D5C3',
				darkGray: '#3B3E52'
			},
			backgroundImage: {
				wavesSvg: "url('/waves.svg')"
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
