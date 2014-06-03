// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: [
            'http://code.jquery.com/jquery-2.1.1.min',
            'jquery-2.1.1.min'
        ],
        underscore: [
            'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
            'underscore-1.6.0-min'
        ]
    }
//    ,shim : {
//        underscore : {
//            exports : "_"
//        }
//    }
});




console.log('inside app_8.js... loading...');

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main_8'], function(main8) {
	console.log('inside app_8.js: main8() FUNCTION: %s => %O', main8(), main8);
	}
);
