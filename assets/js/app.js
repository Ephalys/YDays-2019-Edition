(function($) {
    $(document).ready(function () {
        var app = {
            init: function () {
                app.navbarOnScroll();
            },

            navbarOnScroll: function(){
                $(function () {
                    $(document).scroll(function () {
                        var $nav = $(".navbar");
                        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
                    });
                });
            }
        };
        app.init();
    });
})(jQuery);
