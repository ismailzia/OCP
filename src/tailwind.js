/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.

|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

// let defaultConfig = require('tailwindcss/defaultConfig')()

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|------------------------------------------------------------------------------- */

const colors = {
	transparent: "transparent",
	white: "#ffffff",
	"white-light": "#F8F8F8",
	"white-lighter1": "rgba(255,255,255,0.86)",
	"white-lighter": "rgba(255,255,255,0.64)",
	"white-smoke": "#f3f3f3",
	black: "#000000",
	"black-light": "#354650",
	"black-lighter": "#5E6C74",
	"black-lighter1": "rgba(0,0,0,0.8)",
	orange: "#de8413",
	"orange-light": "#faebcc",
	"orange-lighter": "#fcf8e3",
	"brown-dark": "#8a6d3b",
	"red-dark": "#cc080f",
	red: "#ed1c24",
	"red-light": "#D8454B",
	"green-dark": "#4A6B58",
	green: "#84be4e",
	"grey-darkest": "#031824",
	"grey-darker": "#34454f",
	"grey-dark": "#5c6971",
	grey: "#bfc4c7",
	"grey-light": "#BFBFBF",
	"grey-lighter": "#A2A2A2",
	"grey-athens": "#f6f6f7",
	"grey-ebonics": "#f0f0f0",
	"grey-holder": "rgba(3,24,36,0.24)",
	"grey-gallery": "rgba(3,24,36,0.08)",
	"grey-iron": "rgba(3,24,36,0.8)",
	blue: "#0000FF",
	"blue-link-water": "#D9EDF7",
	"blue-hoki": "#5F869B",
	"blue-ziggurat": "#B6D3E1",
	yellow: "#FFFF00",
	"yellow-dark": "#e5e500"
};

module.exports = {
	/*
  |-----------------------------------------------------------------------------
  | Colors                                  https://tailwindcss.com/docs/colors
  |-----------------------------------------------------------------------------
  | .error { color: config('colors.red') } */

	colors,

	/*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  | Class name: .{screen}:{utility}
  */

	screens: {
		xs: "320px",
		sm: "375px",
		md: "768px",
		lg: "1024px",
		xl: "1366px"
	},

	/*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  | Class name: .font-{name}
  | CSS property: font-family
  */

	fonts: {
		"fs-lola": ["FSLola", "system-ui", "-apple-system", "Segoe UI", "Roboto"],
		"fs-lola-medium": [
			"FSLolaMedium",
			"Constantia",
			"Lucida Bright",
			"Lucidabright",
			"Lucida"
		],
		"fs-lola-light": [
			"FSLolaLight",
			"Menlo",
			"Monaco",
			"Consolas",
			"Liberation Mono"
		],
		"fs-lola-bold": [
			"FSLolaBold",
			"Menlo",
			"Monaco",
			"Consolas",
			"Liberation Mono"
		],
		"fs-lola-black": [
			"FSLolaExtraBold",
			"Menlo",
			"Monaco",
			"Consolas",
			"Liberation Mono"
		],
		icon: "font-icon"
	},

	/*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  | Class name: .text-{size}
  | CSS property: font-size
  */

	textSizes: {
		"8": "0.5rem",
		"9": "0.5625rem",
		"10": "0.625rem",
		"11": "0.6875rem",
		"12": "0.75rem",
		"13": "0.8125rem",
		"14": "0.875rem",
		"15": "0.9375rem",
		"16": "1rem",
		"17": "1.0625rem",
		"18": "1.125rem",
		"19": "1.1875rem",
		"20": "1.25rem",
		"22": "1.375rem",
		"24": "1.5rem",
		"30": "1.875rem",
		"32": "2rem",
		"36": "2.25rem",
		"38": "2.375rem",
		"40": "2.5rem",
		"48": "3rem"
	},

	/*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  | Class name: .font-{weight}
  | CSS property: font-weight
  */

	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900
	},

	/*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  | Class name: .leading-{size}
  | CSS property: line-height
  */

	leading: {
		none: 1,
		tight: 1.25,
		normal: 1.5,
		loose: 2,
		"8": "8px",
		"9": "9px",
		"10": "10px",
		"11": "11px",
		"12": "12px",
		"13": "13px",
		"14": "14px",
		"15": "15px",
		"16": "16px",
		"17": "17px",
		"18": "18px",
		"19": "19px",
		"20": "20px",
		"23": "23px",
		"24": "24px",
		"30": "30px",
		"31": "31px",
		"32": "32px",
		"36": "36px",
		"48": "48px",
		"60": "60px"
	},

	/*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  | Class name: .tracking-{size}
  | CSS property: letter-spacing
  */

	tracking: {
		tight: "-0.05rem",
		normal: "0",
		wide: "0.1875rem",
		"05": "0.03125rem",
		"1": "0.0625rem",
		"2": "0.125rem",
		"3": "0.1875rem",
		"4-5": "0.28125rem",
		"6": "0.375rem",
		"7-5": "0.46875rem"
	},

	/*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  | Class name: .text-{color}
  | CSS property: color
  */

	textColors: colors,

	/*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  | Class name: .bg-{color}
  | CSS property: background-color
  */

	backgroundColors: colors,

	/*
  |-----------------------------------------------------------------------------
  | Background sizes               https://tailwindcss.com/docs/background-size
  |-----------------------------------------------------------------------------
  | Class name: .bg-{size}
  | CSS property: background-size
  */

	backgroundSize: {
		auto: "auto",
		cover: "cover",
		contain: "contain"
	},

	/*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  | Class name: .border{-side?}{-width?}
  | CSS property: border-width
  */

	borderWidths: {
		default: "1px",
		"0": "0",
		"2": "2px",
		"4": "4px",
		"8": "8px"
	},

	/*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  | Class name: .border-{color}
  | CSS property: border-color
  */

	borderColors: global.Object.assign({ default: colors["grey-light"] }, colors),

	/*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  | Class name: .rounded{-side?}{-size?}
  | CSS property: border-radius
  */

	borderRadius: {
		none: "0",
		sm: ".125rem",
		default: ".25rem",
		2: "0.125rem",
		3: "0.1875rem",
		8: "0.5rem",
		10: "10px",
		16: "16px",
		lg: ".5rem",
		full: "9999px"
	},

	/*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  | Class name: .w-{size}
  | CSS property: width
  */

	width: {
		auto: "auto",
		px: "1px",
		"5": "0.3125rem",
		"8": "0.5rem",
		"10": "0.625rem",
		"15": "0.9375rem",
		"20": "1.25rem",
		"24": "1.5rem",
		"28": "1.75rem",
		"32": "2rem",
		"36": "2.25rem",
		"40": "2.5rem",
		"48": "3rem",
		"58": "3.625rem",
		"64": "4rem",
		"67": "4.1875rem",
		"80": "5rem",
		"96": "6rem",
		"140": "8.75rem",
		"165": "10.31rem",
		"170": "10.625rem",
		"1/2": "50%",
		"1/3": "33.33333%",
		"2/3": "66.66667%",
		"1/4": "25%",
		"3/4": "75%",
		"1/5": "20%",
		"2/5": "40%",
		"3/5": "60%",
		"4/5": "80%",
		"1/12": "8.3333%",
		"2/12": "16.6666%",
		"3/12": "25%",
		"4/12": "33.3333%",
		"5/12": "41.6666%",
		"6/12": "50%",
		"7/12": "58.3333%",
		"8/12": "66.6666%",
		"9/12": "75%",
		"10/12": "83.3333%",
		"11/12": "91.6666%",
		"9/8": "87%",
		full: "100%",
		screen: "100vw"
	},

	/*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  | Class name: .h-{size}
  | CSS property: height
  */

	height: {
		auto: "auto",
		px: "1px",
		"1": "0.25rem",
		"2": "0.5rem",
		"3": "0.75rem",
		"4": "1rem",
		"5": "1.25rem",
		"6": "1.5rem",
		"8": "0.5rem",
		"10": "2.5rem",
		"11": "0.6875rem",
		"12": "3rem",
		"16": "1rem",
		"20": "1.25rem",
		"24": "1.5rem",
		"32": "8rem",
		"36": "2.25rem",
		"44": "2.75rem",
		"48": "3rem",
		"58": "3.625rem",
		"67": "4.1875rem",
		"72": "4.5rem",
		"220": "13.75rem",
		"300": "18.75rem",
		"363": "22.6875rem",
		"420": "26.25rem",
		"200": "14.75rem",
		"436": "27.25rem",
		"600": "37.5rem",
		full: "100%",
		screen: "100vh"
	},

	/*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  | Class name: .min-w-{size}
  | CSS property: min-width
  */

	minWidth: {
		"0": "0",
		"80": "5rem",
		full: "100%"
	},

	/*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  | Class name: .min-h-{size}
  | CSS property: min-height
  */

	minHeight: {
		"0": "0",
		"4": "0.25rem",
		full: "100%",
		screen: "100vh"
	},

	/*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  | Class name: .max-w-{size}
  | CSS property: max-width
  */

	maxWidth: {
		ss: "10rem",
		xs: "20rem",
		sm: "30rem",
		md: "40rem",
		lg: "64rem",
		xl: "80rem",
		"2xl": "70rem",
		"4xl": "90rem",
		"5xl": "100rem",
		full: "100%",
		"60": "3.75rem",
		"80": "5rem",
		"100": "6.25rem",
		"200": "12.5rem"
	},

	/*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  | Class name: .max-h-{size}
  | CSS property: max-height
  */

	maxHeight: {
		"0": "0",
		full: "100%",
		screen: "100vh",
		"10": "0.625rem",
		"20": "1.25rem",
		"24": "1.5rem",
		"56": "3.5rem",
		"72": "4.5rem",
		"400": "25rem"
	},

	/*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  | Class name: .p{side?}-{size}
  | CSS property: padding
  */

	padding: {
		px: "1px",
		"0": "0",
		"1": "0.0625rem",
		"2": "0.125rem",
		"3": "0.1875rem",
		"4": "0.25rem",
		"5": "0.3125rem",
		"6": "0.375rem",
		"7": "0.4375rem",
		"8": "0.5rem",
		"9": "0.5625rem",
		"10": "0.625rem",
		"11": "0.6875rem",
		"12": "0.75rem",
		"13": "0.8125rem",
		"14": "0.875rem",
		"15": "0.9375rem",
		"16": "1rem",
		"17": "1.0625rem",
		"18": "1.125rem",
		"19": "1.1875rem",
		"20": "1.25rem",
		"23": "1.4375rem",
		"24": "1.5rem",
		"27": "1.6875rem",
		"28": "1.75rem",
		"32": "2rem",
		"36": "2.25rem",
		"40": "2.5rem",
		"48": "3rem",
		"64": "4rem",
		"76": "4.75rem",
		"80": "5rem",
		"96": "6rem",
		"150": "9.375rem"
	},

	/*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  | Class name: .m{side?}-{size}
  | CSS property: margin
  */

	margin: {
		auto: "auto",
		px: "1px",
		"0": "0",
		"1": "0.0625rem",
		"2": "0.125rem",
		"3": "0.1875rem",
		"4": "0.25rem",
		"5": "0.3125rem",
		"6": "0.375rem",
		"7": "0.4375rem",
		"8": "0.5rem",
		"9": "0.5625rem",
		"10": "0.625rem",
		"11": "0.6875rem",
		"12": "0.75rem",
		"13": "0.8125rem",
		"14": "0.875rem",
		"15": "0.9375rem",
		"16": "1rem",
		"17": "1.0625rem",
		"18": "1.125rem",
		"19": "1.1875rem",
		"20": "1.25rem",
		"21": "1.3125rem",
		"22": "1.375rem",
		"24": "1.5rem",
		"26": "1.625rem",
		"27": "1.6875rem",
		"28": "1.75rem",
		"29": "1.8125rem",
		"32": "2rem",
		"36": "2.25rem",
		"38": "2.375rem",
		"40": "2.5rem",
		"46": "2.875rem",
		"48": "3rem",
		"50": "3.125rem",
		"60": "3.75rem",
		"64": "4rem",
		"70": "4.375rem",
		"80": "5rem",
		"96": "6rem"
	},

	/*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  | Class name: .-m{side?}-{size}
  | CSS property: margin
  */

	negativeMargin: {
		px: "1px",
		"0": "0",
		"1": "0.25rem",
		"2": "0.5rem",
		"3": "0.75rem",
		"4": "1rem",
		"5": "1.25rem",
		"6": "1.5rem",
		"8": "2rem",
		"10": "2.5rem",
		"12": "3rem",
		"16": "16px",
		"20": "5rem",
		"24": "6rem",
		"32": "8rem",
		"57": "3.5625rem"
	},

	/*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  | Class name: .shadow-{size?}
  | CSS property: box-shadow */

	shadows: {
		default: "0 4px 12px 0 rgba(0,0,0,0.2)",
		inset: "inset 0 0 0 1px rgba(52,69,79, 1)",
		outline: "inset 0 0 0 1px rgba(255,255,255,1)",
		inner: "0 1px 4px 0 rgba(0, 0, 0, .15)",
		md: "4px 4px 8px 0 rgba(0,0,0,0.2)",
		lg: "inset 0 0 0 0 rgba(3,24,36,0.64), 0 1px 0 0 rgba(3,24,36,0.24)",
		none: "none"
	},
	/*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  | Class name: .z-{index}
  | CSS property: z-index */

	zIndex: {
		auto: "auto",
		"0": 0,
		"10": 10,
		"20": 20,
		"30": 30,
		"40": 40,
		"50": 50,
		"60": 60
	},

	/*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  | Class name: .opacity-{name}
  | CSS property: opacity */

	opacity: {
		"0": "0",
		"25": ".25",
		"50": ".5",
		"64": ".64",
		"75": ".75",
		"100": "1"
	},

	/*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG fill colors. By default we just provide
  | `fill-current` which sets the fill to the current text color. This lets you
  | specify a fill color using existing text color utilities and helps keep the
  | generated CSS file size down.
  |
  | Class name: .fill-{name}
  | CSS property: fill
  |
  */

	svgFill: {
		current: "currentColor"
	},

	/*
  |-----------------------------------------------------------------------------
  | SVG stroke                                 https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG stroke colors. By default we just provide
  | `stroke-current` which sets the stroke to the current text color. This lets
  | you specify a stroke color using existing text color utilities and helps
  | keep the generated CSS file size down.
  |
  | Class name: .stroke-{name}
  | CSS property: stroke
  |
  */

	svgStroke: {
		current: "currentColor"
	},

	/*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - focus-within
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

	modules: {
		appearance: ["responsive"],
		backgroundAttachment: ["responsive"],
		backgroundColors: ["responsive", "hover", "focus"],
		backgroundPosition: ["responsive"],
		backgroundRepeat: ["responsive"],
		backgroundSize: ["responsive"],
		borderCollapse: [],
		borderColors: ["responsive", "hover", "focus"],
		borderRadius: ["responsive"],
		borderStyle: ["responsive"],
		borderWidths: ["responsive"],
		cursor: ["responsive"],
		display: ["responsive"],
		flexbox: ["responsive"],
		float: ["responsive"],
		fonts: ["responsive"],
		fontWeights: ["responsive", "hover", "focus"],
		height: ["responsive"],
		leading: ["responsive"],
		lists: ["responsive"],
		margin: ["responsive"],
		maxHeight: ["responsive"],
		maxWidth: ["responsive"],
		minHeight: ["responsive"],
		minWidth: ["responsive"],
		negativeMargin: ["responsive"],
		objectFit: false,
		objectPosition: false,
		opacity: ["responsive"],
		outline: ["focus"],
		overflow: ["responsive"],
		padding: ["responsive"],
		pointerEvents: ["responsive"],
		position: ["responsive"],
		resize: ["responsive"],
		shadows: ["responsive", "hover", "focus"],
		svgFill: [],
		svgStroke: [],
		tableLayout: ["responsive"],
		textAlign: ["responsive"],
		textColors: ["responsive", "hover", "focus"],
		textSizes: ["responsive"],
		textStyle: ["responsive", "hover", "focus"],
		tracking: ["responsive"],
		userSelect: ["responsive"],
		verticalAlign: ["responsive"],
		visibility: ["responsive"],
		whitespace: ["responsive"],
		width: ["responsive"],
		zIndex: ["responsive"]
	},

	/*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

	plugins: [
		// eslint-disable-next-line import/no-extraneous-dependencies
		require("tailwindcss/plugins/container")({
			center: true,
			padding: "1rem"
		})
	],

	/*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

	options: {
		prefix: "",
		important: false,
		separator: ":"
	}
};
