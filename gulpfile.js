/*eslint-env node */

var gulp = require('gulp');
var gutil = require('gulp-util');
var connect = require('gulp-connect');


gulp.task('connect', function() {
    connect.server({
        root: './',
        port: 3000,
        livereload: true
    });
});

/* *************
    CSS
************* */

var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var scss = require('postcss-scss');
var autoprefixer = require('autoprefixer');

var postcssProcessors = [
    autoprefixer({
        browsers: [
            'Explorer >= 11',
            'last 2 Explorer versions',
            'last 2 ExplorerMobile versions',
            'last 2 Edge versions',

            'last 2 Firefox versions',
            'last 2 FirefoxAndroid versions',

            'last 2 Chrome versions',
            'last 2 ChromeAndroid versions',

            'last 3 Safari versions',
            'last 3 iOS versions',

            'last 2 Opera versions',
            'last 2 OperaMini versions',
            'last 2 OperaMobile versions',

            'last 2 Android versions',
            'last 2 BlackBerry versions'
        ]
    })
];

var sassMainFile = 'sass/main.scss';
var sassFiles = 'sass/**/*.scss';

gulp.task('css', function() {
    gulp.src(sassMainFile)
        .pipe(
            postcss(postcssProcessors, { syntax: scss })
        )
        .pipe(
            sass({ outputStyle: 'compressed' })
            .on('error', gutil.log)
        )
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});





// /* *************
//     HTML
// ************* */

// var minifyHTML = require('gulp-minify-html');

var htmlFiles = ['*.html'];

// gulp.task('html', function() {
//     gulp.src('src/index.html')
//         .pipe(minifyHTML({ empty: true }))
//         .pipe(gulp.dest('public'));
//     gulp.src('src/views/*.html')
//         .pipe(minifyHTML({ empty: true }))
//         .pipe(gulp.dest('public/views'));
//     gulp.src('src/views/inc/*.html')
//         .pipe(minifyHTML({ empty: true }))
//         .pipe(gulp.dest('public/views/inc'));
//     gulp.src('src/views/directives/*.html')
//         .pipe(minifyHTML({ empty: true }))
//         .pipe(gulp.dest('public/views/directives'));
// });

gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src('js/*.js')
        .pipe(connect.reload());
});



/* *************
    WATCH
************* */


gulp.task('watch', function() {
    gulp.watch(sassFiles, ['css']);
    gulp.watch('*.js', ['js']);
    gulp.watch(htmlFiles, ['html']);
});


/* *************
    DEFAULT
************* */

gulp.task('default', ['connect', 'css', 'watch']);


/* *************
    SVG
************* */


var svgSprite = require('gulp-svg-sprite');
var svgConfig = {
    mode: {
        css: {
            render: {
                css: true
            }
        }
    }
};

gulp.task('svg', function() {
    gulp.src('**/*.svg', { cwd: 'images/icons/source' })
        .pipe(svgSprite(svgConfig))
        .pipe(gulp.dest('images/icons'));
});
