var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat');
    
 gulp.task('default', ['html', 'uglify', 'comboSass', 'style']);
 
 gulp.task('html', function(){
    return gulp.src('client/views/index.html')
    .pipe(gulp.dest('public/views')); 
 });
 
 gulp.task('comboSass', function(){
     return gulp.src('client/styles/scss/*.scss')
     .pipe(concat('style.scss'))
     .pipe(gulp.dest('client/styles'));
 });
 
 
 gulp.task('style', function(){
    return sass('client/styles/style.scss')
    .pipe(gulp.dest('public/styles')); 
 });
 
 gulp.task('uglify', function(){
    return gulp.src('client/scripts/app.js') 
    .pipe(uglify())
    .pipe(gulp.dest('public/scripts/'));
 });
