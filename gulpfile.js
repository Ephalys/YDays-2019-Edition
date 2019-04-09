var gulp        = require('gulp');
var plugins     = require('gulp-load-plugins')({ camelize: true });
var cleanCSS    = require('gulp-clean-css');
var bs          = require('browser-sync');
var reload      = bs.reload;
//var pngquant    = require('imagemin-pngquant');
//var gutil       = require('gulp-util');

var paths = {
    root_path: './',
    bower: './bower_components',
    assets: './assets/',
    tpl: {
        watch: [
            './*.php',
            './**/*.html',
        ]
    },
    sass: {
        watch: [
            './assets/css/scss/**/*.scss'
        ],
        src: [
            './assets/css/scss/style.scss'
        ],
        dist: './assets/css/'
    },
    css: {
        watch: [
            './assets/css/*.css'
        ],
        src: [
            './assets/css/vendor/*.css',
            './bower_components/bootstrap/dist/css/bootstrap.min.css',
            './bower_components/plyr/dist/plyr.css',
            './assets/css/*.css',
        ],
        dist: './assets/css/dist/'
    },
    js: {
        check: [
            './assets/js/*.js'
        ],
        src: [
            './assets/js/vendor/*.js',
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            './bower_components/plyr/dist/plyr.polyfilled.min.js',
            "./bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js",
            "./bower_components/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js",
            "./bower_components/Snap.svg/dist/snap.svg-min.js",
            './assets/js/app.js'
        ],
        dist: './assets/js/dist/'
    }

};

gulp.task('default', ['watch']);

gulp.task('sass', function () {
    return gulp.src(paths.sass.src)
        .pipe(plugins.concat('style.scss'))
        .pipe(plugins.sass())
        .on('error', plugins.sass.logError)
        .pipe(gulp.dest(paths.sass.dist));
});

gulp.task('css', ['sass'], function(){
    return gulp.src(paths.css.src)
        .pipe(plugins.concat('style.min.css'))
        .pipe(plugins.autoprefixer({ browsers: [ 'last 2 versions', 'ff > 20', '> 1%', 'ie 9', 'ie 10']}))
        .pipe(cleanCSS({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest(paths.css.dist))
        .on('end', function () {
            gulp.src(paths.sass.dist + '*.css', {read: false})
                .pipe(plugins.clean());
        });
});

gulp.task('checkJS', function(){
    return gulp.src(paths.js.check)
        .pipe(plugins.plumber());
});

gulp.task('js', ['checkJS'], function () {
    return gulp.src(paths.js.src)
        .pipe(plugins.plumber())
        .pipe(plugins.concat('app.min.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(paths.js.dist))
});

gulp.task('tpl', function(){
    return gulp.src(paths.tpl.watch)
});


gulp.task('watch', ['js', 'css'], function () {
    gulp.watch(paths.sass.watch, ['css']).on('change', reload);
    gulp.watch(paths.js.src, ['js']).on('change', reload);
});