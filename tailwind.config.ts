/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import plugin from 'tailwindcss/plugin';
import { fontFamily } from 'tailwindcss/defaultTheme';
import { type Config } from 'tailwindcss';

module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				inset: '#0d0e11',
				accent: '#02070c',
			},
			fontFamily: {
				sans: ['var(--font-blender-pro)', ...fontFamily.sans],
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',		
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'dot': "radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
				'solid': 'linear-gradient(var(--tw-gradient-stops))',
			},
			animation: {
				border: 'background ease infinite',
				spin: 'spin 2.5s linear infinite',
			},
			keyframes: {
				background: {
				  	'0%, 100%': { backgroundPosition: '0% 50%' },
				  	'50%': { backgroundPosition: '100% 50%' },
				},
				spin: {
					'0%': { '--rotate': '0deg' },
					'100%': { '--rotate': '360deg' }
				}
			},
			gridTemplateColumns: {
				'16': 'repeat(16, minmax(0, 1fr))',
			},
			gridColumnStart: {
				'13': '13',
				'14': '14',
				'15': '15',
				'16': '16',
				'17': '17',
			},
			gridColumnEnd: {
				'13': '13',
				'14': '14',
				'15': '15',
				'16': '16',
				'17': '17',
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities (
			  	{
					'text-shadow': (value) => ({
				  		textShadow: value,
					}),
			  	},
			  	{ values: theme('textShadow') }
			)
		}),	  
	],
} as Config;