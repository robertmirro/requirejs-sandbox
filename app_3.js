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

console.log('inside app_3.js...');

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main_3'], function(main3) {
	console.log('inside app_3.js: main3.message: %s\nmain3.getMessage: %s\n%O', main3.message, main3.getMessage(), main3);
	}
);