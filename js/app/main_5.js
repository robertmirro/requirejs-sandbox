define(['jquery', 'underscore'], function ( $ , _ ) {

	//console.log("require: \n%O", require);

	//var $ = require('jquery');


    //print(messages.getHello());
    console.log('inside main_5.js...\njQuery:\n%O', $);

    console.log('inside main_5.js...\nUnderscore:\n%O', _);

    $(function () {
		var libs = [{name : 'RequireJS', libNum : '1'}, {name : 'jQuery', libNum : '2'}, {name : 'Underscore', libNum : '3'}, {name : '&lt;&lt;next library goes here&gt;&gt;', libNum : '4'}];
		var names = _(libs).pluck('name').map(function (value){return ' ' + value + '.js'});
		console.log('Libraries in use: %s', names.toString());

		$('#message').html('<h4>Message returned via jQuery from main_5.js on domready event...</h4>').append('<b>Libraries in use:</b> ' + names.toString());
	});

    return {
		name: "main_5.js",
		type: "module data",
		message: "data returned from main_5.js...",
		getMessage: function() {
			return "getMessage returned: " + this.message;
		}
	};
});