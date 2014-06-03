define(['jquery', 'underscore'], function ( $ , _ ) {

	//console.log("require: \n%O", require);

	//var $ = require('jquery');


    //print(messages.getHello());
    console.log('inside main_7.js... jQuery loaded: %O', $);

    console.log('inside main_7.js... Underscore loaded: %O', _);

    $(function () {
		var libs = [{name : 'RequireJS', libNum : '1'}, {name : 'jQuery', libNum : '2'}, {name : 'Underscore', libNum : '3'}, {name : '&lt;&lt;next library goes here&gt;&gt;', libNum : '4'}];
		var names = _(libs).pluck('name').map(function (value){return ' ' + value + '.js'});
        console.log('on document ready of main_7.js... Libraries in use: %s', names.toString());

		$('#message').html('<h4>Message returned via jQuery from main_7.js on domready event...</h4>').append('<b>Libraries in use:</b> ' + names.toString());
	});

    return function() {
		return new Date();
	};
});
