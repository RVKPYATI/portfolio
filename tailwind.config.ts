import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "15px",
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "960px",
				xl: "1200px",

			},
			fontFamily: {
				primary: "var(--font-jetbrainsMono)",
			},
			colors: {
				primary: "#1c1c22",
				accent: {
					DEFAULT: "#00ff99",
					hover: "#00e187",
				},
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require('@tailwindcss/forms')],
} satisfies Config;
