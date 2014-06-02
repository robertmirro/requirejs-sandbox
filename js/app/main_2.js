define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    //var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    //var print = require('print');

    //print(messages.getHello());

    console.log('inside main_2.js...');

    return {name: "main_2.js", type: "module data", message: "data returned from main_2.js..."};
});