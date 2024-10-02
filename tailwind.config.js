/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                rochester: ['Rochester', 'cursive'],
            },
            boxShadow: {
                'centered': '0 0 15px rgba(0, 0, 0, 0.3)', 
            },
        },
    },
    plugins: ["prettier-plugin-tailwindcss"],
}
