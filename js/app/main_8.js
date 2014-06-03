define(['jquery', 'underscore', 'text!http://wordpress.org/plugins/about/readme.txt!strip'], function ( $ , _, template ) {

	//console.log("require: \n%O", require);

	//var $ = require('jquery');


    //print(messages.getHello());
    console.log('inside main_7.js... jQuery loaded: %O', $);

    console.log('inside main_7.js... Underscore loaded: %O', _);

    // this isn't working thanks to XHR/cross domain issues, need to run a local webserver and server my own template
    console.log('inside main_7.js... Template loaded: %O', template);

    $(function () {
		var libs = [{name : 'RequireJS', libNum : '1'}, {name : 'jQuery', libNum : '2'}, {name : 'Underscore', libNum : '3'}, {name : '&lt;&lt;next library goes here&gt;&gt;', libNum : '4'}];
		var names = _(libs).pluck('name').map(function (value){return ' ' + value + '.js'});
        console.log('on document ready of main_7.js... Libraries in use: %s', names.toString());

		$('#message').html('<h4>Message returned via jQuery from main_8.js on domready event...</h4>').append('<b>Libraries in use:</b> ' + names.toString());

        // http://tech.pro/blog/1561/five-helpful-tips-when-using-requirejs
        $('#template').html(template);
	});

    return function() {
		return new Date();
	};
});
