import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'nexaBold': ['Nexa-Heavy', 'sans-serif'],
			'nexa': ['Nexa-ExtraLight', 'sans-serif'],
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('tailwindcss-patterns'),
	],
};

