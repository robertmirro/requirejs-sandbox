define(function (require) {

	console.log("require: \n%O", require);

	var $ = require('jquery');


    //print(messages.getHello());
    console.log('inside main_4.js...\njQuery:\n%O', $);

    $(function () {
		$('#message').html('<h4>Message returned via jQuery from main_4.js on domready event...</h4>');
	});


    return {
		name: "main_4.js",
		type: "module data",
		message: "data returned from main_4.js...",
		getMessage: function() {
			return "getMessage returned: " + this.message;
		}
	};
});