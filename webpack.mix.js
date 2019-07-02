const mix = require("laravel-mix");

mix.browserSync({
    proxy: "localhost:8000",
    port: 3000,
    watchOptions: {
        usePolling: true,
        interval: 100
    },
    files: [
        "./resources/js/app.js",
        "./resources/js/components/*.vue",
        "./resources/sass/*.scss",
        "./resources/views/*.blade.php",
        "./routes/**/*"
    ],
    open: false,
    reloadOnRestart: true
})
    .js("resources/js/app.js", "public/js")
    .version()
    .disableNotifications();
