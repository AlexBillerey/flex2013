/**
 * Created with JetBrains WebStorm.
 * User: Billerey
 * Date: 19/03/13
 * Time: 13:17
 * To change this template use File | Settings | File Templates.
 */
function navslider() {
    //alert('navslider');
    "use strict";
    $('a[href^="#"],a[href="#top"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 250, 'linear', function () {
            window.location.hash = target;
        });
    });
}


function testViewportSize(){
    "use strict";
    if (document.documentElement.clientWidth < 599) {
        $('section h1').each(function () {
            $(this).append('<span class="floatRight"><a href="#top">top</a></span>');
        });
        navslider();
    }
}


$(document).ready(function () {
    "use strict";
    testViewportSize();

});
