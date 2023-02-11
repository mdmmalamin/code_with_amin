/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'night': '#191e29',
                'midnight': '#132D46',
                'metal': '#696E79',
                'silver': '#ecebff',
                'bermuda': '#01C38D',
            },
        },
    },
    plugins: [],
}