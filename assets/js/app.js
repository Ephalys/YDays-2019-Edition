(function($) {
    $(document).ready(function () {
        var app = {
            init: function () {
                app.navbarOnScroll();
                app.homeSlick();
                app.partnersSlick();
                app.smoothScroll();
            },

            navbarOnScroll: function(){
                $(function () {
                    var $nav = $(".navbar");
                    //Check scroll position on reload
                    if($(this).scrollTop() > $nav.height()) {
                        $nav.toggleClass('scrolled');
                        app.checkNavbarScroll($nav);
                    }
                    //Toggle Class on Scroll
                    $(document).scroll(function () {
                        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
                        app.checkNavbarScroll($nav);
                    });
                });
            },
            checkNavbarScroll: function(item) {
                if(item.hasClass('scrolled')){
                    $('.navbar img').attr('src', 'assets/img/logo-diagnostik-long.png');
                } else {
                    $('.navbar img').attr('src', 'assets/img/logo-diagnostik-long-blanc.png');
                }
            },
            homeSlick: function () {
                $('.home-slider').slick({
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    infinite: true,
                    autoplaySpeed: 4000,
                });
            },
            partnersSlick: function() {
                $('.partners-slider').slick({
                    dots: true,
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                });
            },
            smoothScroll: function() {
                $('a[href*="#"]').on('click', function(e) {
                    e.preventDefault();
                    $('html, body').animate(
                        {
                            scrollTop: $($(this).attr('href')).offset().top,
                        },
                        500,
                        'linear'
                    )
                })
            }
        };
        app.init();
    });
})(jQuery);
