/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"myBlack": "var(--black)",
				"myBlue": "var(--blue)",
				"myYellow": "var(--yellow)",
				"whiteGray": "var(--white-gray)"
			  },
		},
	},
	plugins: [],
}
