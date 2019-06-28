const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

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
    .sass("resources/sass/app.scss", "public/css/")
    .version()
    .disableNotifications();
