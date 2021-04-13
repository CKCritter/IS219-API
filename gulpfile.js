const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

function noDemonServe() {
    nodemon({
        script: 'src/server.js',
        env: {
            PORT: 9080
        },
    });
}

function html() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('docs'));
}

function js() {
    return gulp.src('src/js/*.js')
        .pipe(gulp.dest('docs/js'));
}

exports.html = html;
exports.js = js;
exports.serve = gulp.parallel(html, js, noDemonServe);