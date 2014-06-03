
console.log('inside app_0_1.js...');

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['js/app/main_0_1'], function(myModule) {
	console.log('plain object:\n%O', myModule);
	}
);

