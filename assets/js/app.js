(function($) {
    $(document).ready(function () {
        var app = {
            state : {
                pageOffset: ''
            },
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
