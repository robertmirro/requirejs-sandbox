// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-2.1.1.min',
        underscore: 'underscore-1.6.0-min'
    }
//    ,shim : {
//        underscore : {
//            exports : "_"
//        }
//    }
});




console.log('inside app_6.js...');

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main_6'], function(main6) {
	console.log('inside app_6.js: main6() FUNCTION: %s\n%O', main6(), main6);
	}
);