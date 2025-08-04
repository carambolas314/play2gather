/** @type {import('tailwindcss').Config} */
module.exports = {
	// Use module.exports
	content: [
		"./index.html", // Adicione o seu arquivo HTML principal
		"./src/**/*.{js,ts,jsx,tsx}", // Adicione todos os seus arquivos de componentes React
	],
	theme: {
		extend: {
			fontFamily: {
				jost: ["Jost", "sans-serif"],
			},
		},
	},
	plugins: [],
};
