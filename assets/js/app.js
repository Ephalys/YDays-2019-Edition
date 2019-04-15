(function($) {
    $(document).ready(function () {
        var app = {
            init: function () {
                app.navbarOnScroll();
                app.homeSlick();
            },

            navbarOnScroll: function(){
                $(function () {
                    var $nav = $(".navbar");
                    if($(this).scrollTop() > $nav.height()) {
                        $nav.toggleClass('scrolled');
                        app.checkNavbarScroll($nav);
                    }
                    $(document).scroll(function () {
                        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
                        app.checkNavbarScroll($nav);
                    });
                });
            },
            checkNavbarScroll: function(item) {
                if(item.hasClass('scrolled')){
                    $('.navbar img').attr('src', 'assets/img/logo-diagnostik.png');
                } else {
                    $('.navbar img').attr('src', 'assets/img/logo-diagnostik-blanc.png');
                }
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
