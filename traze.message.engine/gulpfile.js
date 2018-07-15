
var gulp = require('gulp');
var tsc = require('gulp-typescript');
var del = require('del');

gulp.task('help',()=>{
	 console.log('');
  console.log('===== Help for Typescript-Knockout-boilerplate =====');
  console.log('');
  console.log('Usage: gulp [command]');
  console.log('The commands for the task runner are the following.');
  console.log('-------------------------------------------------------');
  console.log('       clean: Removes all the compiled files on ./build');
  console.log('          js: Compile the JavaScript files');
  console.log('        pug: Compile the Pug templates');
  console.log('        sass: Compile the Sass styles');
  console.log('      images: Copy the newer to the build folder');
  console.log('     favicon: Copy the favicon to the build folder');
  console.log('     vendors: Copy the vendors to the build folder');
  console.log('       build: Build the project');
  console.log('       watch: Watch for any changes on the each section');
  console.log('       start: Compile and watch for changes (for dev)');
  console.log('        help: Print this message');
  console.log(' browsersync: Start the browsersync server');
  console.log('');
});

gulp.task('clean', function () {
  log('-> Cleaning build folder')
  del([
    'dist/' + '*'
  ]);
});

gulp.task('build',['clean'],()=>
{
	gulp.src(['src/**/*.ts'])
		.pipe(tsc())
		.pipe(gulp.dest('dist/'))
});


gulp.task('default',['help']);

function log(message)
{
	console.log(message);
}