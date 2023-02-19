/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html', '/swiper/css'],
	theme: {
		extend: {
			colors: {
				primary: 'hsl(29, 96%, 48%)',
				darkPrimary: 'hsl(29, 96%, 30%)',
			},
			fontSize: {
				xsm: '.7rem',
			},
		},
	},
	plugins: [],
};
