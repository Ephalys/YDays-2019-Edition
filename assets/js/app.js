(function($) {
    $(document).ready(function () {
        var app = {
            init: function () {
                app.navbarOnScroll();
                app.homeSlick();
            },

            navbarOnScroll: function(){
                $(function () {
                    $(document).scroll(function () {
                        var $nav = $(".navbar");
                        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
                    });
                });
            },
            homeSlick: function () {
                $('.home-slider').slick({
                    dots: true,
                    arrows: false
                });
            }
        };
        app.init();
    });
})(jQuery);
