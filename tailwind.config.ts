import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	safelist: ["duration-[15000ms]"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for Pulse Robot - Updated to teal theme
				pulse: {
					"50": "#f0fdfa",
					"100": "#ccfbf1",
					"200": "#99f6e4",
					"300": "#5eead4",
					"400": "#2dd4bf",
					"500": "#14b8a6", // Primary teal
					"600": "#0d9488",
					"700": "#0f766e",
					"800": "#115e59",
					"900": "#134e4a",
					"950": "#042f2e",
				},
				// Custom teal shades from the image
				teal: {
					"50": "#f0fdfa",
					"100": "#c4fff9", // Very light teal
					"200": "#9ceaef", // Light teal
					"300": "#68d8d6", // Medium teal
					"400": "#3dccc7", // Light-medium teal
					"500": "#07beb8", // Primary teal from image
					"600": "#05a19e", // Darker teal
					"700": "#047e7b", // Even darker
					"800": "#035c59", // Very dark teal
					"900": "#023937", // Almost black teal
				},
				// Additional purple shades (keeping for compatibility)
				purple: {
					"50": "#f3e5f5",
					"100": "#e1bee7",
					"200": "#ce93d8",
					"300": "#ba68c8",
					"400": "#ab47bc",
					"500": "#9c27b0",
					"600": "#8e24aa",
					"700": "#7b1fa2",
					"800": "#6a1b9a",
					"900": "#4a148c",
				},
				dark: {
					"900": "#121212", // Almost black
					"800": "#1e1e1e",
					"700": "#2d2d2d",
					"600": "#3d3d3d",
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'dropdown-enter': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(-5px) scale(0.98)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0) scale(1)' 
					}
				},
				'slide-down': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(-10px)',
						maxHeight: '0'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)',
						maxHeight: '200px'
					}
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(7, 190, 184, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(7, 190, 184, 0.6), 0 0 30px rgba(7, 190, 184, 0.4)' 
					}
				},
				'teal-gradient-shift': {
					'0%, 100%': {
						background: 'linear-gradient(135deg, #c4fff9 0%, #9ceaef 20%, #68d8d6 40%, #3dccc7 60%, #07beb8 80%, #05a19e 100%)'
					},
					'50%': {
						background: 'linear-gradient(135deg, #9ceaef 0%, #68d8d6 20%, #3dccc7 40%, #07beb8 60%, #05a19e 80%, #047e7b 100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
				'pulse-slow': 'pulse-slow 3s infinite',
				'float': 'float 6s ease-in-out infinite',
				'dropdown-enter': 'dropdown-enter 200ms ease-out',
				'slide-down': 'slide-down 300ms ease-in-out',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'teal-gradient-shift': 'teal-gradient-shift 10s ease-in-out infinite'
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(90deg, #3dccc7 0%, #07beb8 50%, #05a19e 100%)',
				'hero-gradient-2': 'linear-gradient(90deg, #68d8d6 0%, #3dccc7 50%, #07beb8 100%)',
				'teal-gradient': 'linear-gradient(135deg, #c4fff9 0%, #9ceaef 30%, #68d8d6 60%, #3dccc7 80%, #07beb8 100%)',
				'pulse-gradient': 'linear-gradient(180deg, rgba(61,204,199,0.8) 0%, rgba(7,190,184,0) 100%)',
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'display': ['Brockmann', 'SF Pro Display', 'Inter', 'sans-serif'],
				'brockmann': ['Brockmann', 'serif'],
				'playfair': ['"Playfair Display"', 'serif'],
			},
			boxShadow: {
				'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'elegant-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
				'glow': '0 0 20px rgba(7, 190, 184, 0.3)',
				'glow-lg': '0 0 30px rgba(7, 190, 184, 0.4), 0 0 60px rgba(7, 190, 184, 0.2)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
