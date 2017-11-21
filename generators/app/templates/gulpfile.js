const gulp = require('gulp');
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const typescript = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

var project = typescript.createProject('tsconfig.json');

gulp.task('scripts', () => {
    var tsResult = project
        .src()
        .pipe(sourcemaps.init())
        .pipe(project());
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
    gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('env-dev', function () {
    return gulp.src('./config/dev.env')
        .pipe(rename({
            basename: "",
            extname: ".env"
        }))
        .pipe(gulp.dest('./'))
});

gulp.task('env-prod', function () {
    return gulp.src('./config/dev.env')
        .pipe(rename({
            basename: "",
            extname: ".env"
        }))
        .pipe(gulp.dest('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts', 'env-dev', 'watch']);

gulp.task('build-prod', ['scripts', 'env-prod']);