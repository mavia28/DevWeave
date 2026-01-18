/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{jsx,tsx}", "./*.html"],
    theme: {
        extend: {
            colors: {
                dark: "#0b0c15", // Deep dark charcoal/indigo tint
                darkHover: "#1a1d2d", // Lighter interaction state
                light: "#f5f5f5",
                primary: "#6d28d9", // Electric Violet (using as primary action color to stand out)
                secondary: "#22d3ee", // Soft Cyan
                indigo: "#312e81", // Deep Indigo
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            animation: {
                "up-down": "up-down 2s ease-in-out infinite alternate",
            },
        },
    },
    plugins: [],
}
