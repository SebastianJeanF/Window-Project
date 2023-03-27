/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html', '/swiper/css'],
	theme: {
		extend: {
			colors: {
				primary: 'hsl(29, 96%, 48%)',
				darkPrimary: 'hsl(29, 96%, 30%)',
				textPrimary: 'rgb(55 65 81)',
				quotePrimary: 'yellow',
			},
			fontSize: {
				xsm: '.7rem',
			},
			screens: {
				quotelg: '1060px',
				navmd: '830px',
				quotemd: '830px',
				quotesm: '530px',
			},
		},
	},
	plugins: [],
};
