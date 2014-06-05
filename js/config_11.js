// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.


console.log('inside config_11.js... loading...');

console.log('inside config_11.js... DEFAULT requirejs.s.contexts._.config.baseUrl: ', requirejs.s.contexts._.config.baseUrl );

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




