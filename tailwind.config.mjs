/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#fff',
				'primary-100': '#fff',
				'primary-200': '#02321',
				'primary-300': '#eef0ef',
				// "primary-400": opacityColor("primary-400"),
				// "primary-500": opacityColor("primary-500"),
				'primary-600': '#606060',
				'primary-700': '#303030',
				'primary-800': '#201f1f',
				'primary-900': '#000',
				secondary: '#437c8a',
				'secondary-100': '#B9D2DB'
			}
		}
	},
	plugins: []
}
