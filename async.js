/*!
 * Asynchronous Javascript loading example
 */
(function(window, undefined) {

    var AsyncApp = {
        init: function (options) {

            // Awesome code here
            console.log('Async!');

            this.awesomeFunction();
        },

        awesomeFunction: function () {
            // More awesomeness
            console.log('Pi: ' + this.options.option2);
        },

        options: {
            option1: 'string',
            option2: 3.14,
            option3: false
        }
    };

    window.AsyncApp = AsyncApp;

    //
    window.setTimeout(function() { if (window.myAsyncInit) { myAsyncInit(); } }, 0);
})(window)