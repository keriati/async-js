/*!
 * Asynchronous Javascript loading example
 */
(function(window, undefined) {

    // Async App
    var AsyncApp = function() {

        // Private member
        var options = {
            option1: 'string',
            option2: 3.1,
            option3: false
        };

        // Private method
        function awesomeFunction() {
            // More awesomeness
            console.log('Pi: ' + options.option2);
        }

        // Privileged method
        this.init = function (data) {

            // Awesome code here
            console.log('Async!');

            options = data;

            awesomeFunction();
        };
    };

    window.AsyncApp = new AsyncApp();

    // Call the async init method
    window.setTimeout(function() { if (window.myAsyncInit) { myAsyncInit(); } }, 0);
})(window)