module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{html,js}"],
    darkMode: false,
    theme: {
        container: {
            center: true,
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1127px',
        },
        maxWidth: {
            DEFAULT: '100%',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1127px',
        },
        extend: {}
    },
    plugins: [],
}

