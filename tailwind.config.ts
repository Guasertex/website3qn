/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./content/**/*.{md,yml,json,yaml,toml,csv}",
    "./app.vue",
  ],
  theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: colors.violet[700],
					...colors.violet,
				},
			},
			fontFamily: {
				sans: ["Inter"],
			},
		},
	},
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}