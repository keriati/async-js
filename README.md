# Asynchronous Javascript loading example

Simple asynchronous javascript loading. (like facebook does it).

## Example

Insert this into your html

    <script>
        // Create the method, that the async script calls
        window.myAsyncInit = function() {
            AsyncApp.init({
                option1: 'string',
                option2: 3.14,
                option3: true
            });
        };

        // Create and append the script object
        (function(d){
            var js,
                id = 'async-script',
                ref = d.getElementsByTagName('script')[0];

            // If the script was already loaded just return
            if (d.getElementById(id)) {return;}

            // Create the script object
            js = d.createElement('script');
            js.id = id;
            js.async = true;
            js.src = "async.js";       // url to your javascript file

            // Append the script object
            ref.parentNode.insertBefore(js, ref);
        }(document));
    </script>

Check async.js and index.html for more.