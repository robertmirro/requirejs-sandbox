define(['jquery', 'underscore'], function ( $ , _ ) {

	//console.log("require: \n%O", require);

	//var $ = require('jquery');


    //print(messages.getHello());
    console.log('inside main_5.js...\njQuery:\n%O', $);

    console.log('inside main_5.js...\nUnderscore:\n%O', _);


    $(function () {
		$('#message').html('<h4>Message returned via jQuery from main_5.js on domready event...</h4>');
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