define(["jquery"], function ($) {

    console.log('inside main_3.js...\njQuery:\n%O', $);

    $(function () {
		$('#message').html('<h4>Message returned via jQuery from main_3.js on domready event...</h4>');
	});


    return {
		name: "main_3.js",
		type: "module data",
		message: "data returned from main_3.js...",
		getMessage: function() {
			return "getMessage returned: " + this.message;
		}
	};
});