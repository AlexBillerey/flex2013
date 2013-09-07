/**
 * Created with JetBrains WebStorm.
 * User: Billerey
 * Date: 19/03/13
 * Time: 13:17
 * To change this template use File | Settings | File Templates.
 */
function navslider() {

    "use strict";
    $('a[href^="#"],a[href="#top"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'linear', function () {
            window.location.hash = target;
        });
    });
}


function testViewportSize() {
    "use strict";
    //var headerH = $('header').height();

    if ($(window).scrollTop() > 230) {
        $('.toTop').fadeIn(500);
    }
        else {
            $('.toTop').fadeOut(50);
        }
}


$(document).ready(function () {
    "use strict";
    $('section h1').each(function () {
        $('<span class="toTop"><a href="#top"></a></span>').insertBefore(this);
    });
    $(window).scroll(function () {
    testViewportSize();
    });
    navslider();
});
