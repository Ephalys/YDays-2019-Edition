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
                        if($nav.hasClass('scrolled')){
                            $('.navbar img').attr('src', 'assets/img/logo-diagnostik.png');
                        } else {
                            $('.navbar img').attr('src', 'assets/img/logo-diagnostik-blanc.png');
                        }
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
