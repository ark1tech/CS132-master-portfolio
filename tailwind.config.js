// import { fontFamily } from "tailwindcss/defaultTheme";
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const svgToDataUri = require('mini-svg-data-uri');

const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			// padding: "2rem",
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			animation: {
				'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
				spotlight: 'spotlight 12s ease 1000ms infinite',
				fade: 'fade 1000ms ease-in-out'
			},
			keyframes: {
				'border-beam': {
					'100%': {
						'offset-distance': '100%'
					}
				},
				spotlight: {
					'0%': {
						transform: 'translate(-30%,-40%) scale(1.5)'
					},
					'20%': {
						transform: 'translate(-35%,-35%) scale(1.6)' // Increased translate and scale
					},
					'35%': {
						transform: 'translate(-38%,-45%) scale(1.65)' // Increased translate and scale
					},
					'50%': {
						transform: 'translate(-30%,-40%) scale(1.7)' // Increased scale significantly
					},
					'70%': {
						transform: 'translate(-35%,-38%) scale(1.65)' // Increased translate and scale
					},
					'80%': {
						transform: 'translate(-30%,-35%) scale(1.6)' // Increased translate and scale
					},
					'100%': {
						transform: 'translate(-30%,-40%) scale(1.5)'
					}
				},
				fade: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				}
			},
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
			// fontFamily: {
			// 	sans: [...fontFamily.sans]
			// }
		}
	},
	corePlugins: {
		aspectRatio: false
	},
	plugins: [
		require('tailwind-gradient-mask-image'),
		aspectRatio,
		addVariablesForColors,
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'bg-grid': (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`
					}),
					'bg-grid-dash': (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.25H15.75V16" stroke="${value}" stroke-width="0.5" stroke-dasharray="3 3"/></svg>`
						)}")`
					}),
					'bg-grid-small': (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`
					}),
					'bg-dot': (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`
					})
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
			);
		}
	]
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}

export default config;
