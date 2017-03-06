'use strict';

//comment
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    sourcemaps = require("gulp-sourcemaps"),
    cleanCss = require('gulp-clean-css'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('js', function() {
    gulp.src('assets/all-js/*/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

gulp.task('browserSync', function() {
    browserSync.init({
        proxy: "http://makar.loc",
        notify: false
    })
});

gulp.task('sass', function(){
    gulp.src('scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(rename('style.min.css',{ suffix: '.min' }))
        .pipe(cleanCss())
        .pipe(gulp.dest('css'))
});

gulp.task('clean', function() {
    del(['css', 'scripts']);
});

gulp.task('default',['sass', 'browserSync'], function(){
    gulp.watch('scss/**/*.scss',['sass']);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/main.js', browserSync.reload);
});