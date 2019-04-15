(function($) {
    $(document).ready(function () {
        var app = {
            init: function () {
                app.helloWorld();
            },

            helloWorld: function(){
                console.log('Hello world !')
            }
        };
        app.init();
    });
})(jQuery);
