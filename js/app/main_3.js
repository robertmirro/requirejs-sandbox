define(["jquery"], function ($) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    //var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    //var print = require('print');

    //print(messages.getHello());

    console.log('inside main_3.js...\njQuery:\n%O', $);
    $('#message').html('<h4>Message returned via jQuery from main_3.js...</h4>');

    return {
		name: "main_3.js",
		type: "module data",
		message: "data returned from main_3.js...",
		getMessage: function() {
			return "getMessage returned: " + this.message;
		}
	};
});