// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-2.1.1.min'
    }
});

console.log('inside app_4.js...');

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main_4'], function(main4) {
	console.log('inside app_4.js: main4.message: %s\nmain4.getMessage: %s\n%O', main4.message, main4.getMessage(), main4);
	}
);