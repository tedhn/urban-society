/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			black: "#000000",
			gold: "#FFD369",
			darkgrey: "#222831",
			grey: "#393E46",
			offwhite: "#EEEEEE",
			danger: "#dc2626",
		},
		extend: {},
	},
	plugins: [],
};
