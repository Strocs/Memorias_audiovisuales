/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'light-green': '#d2f4d5',
				'pale-green': '#5a7869',
				lilac: '#8f87a8',
				primary: '#17171b',
				secondary: '#b7b7bb',
				white: '#f5f5fa'
			},
			fontFamily: {
				paragraph: ['Nunito Sans', 'system-ui', 'sans-serif'],
				title: ['Mukta Vaani', 'system-ui', 'sans-serif'],
				secondary: ['Kanit', 'system-ui', 'sans-serif']
			}
		}
	},
	plugins: []
}
