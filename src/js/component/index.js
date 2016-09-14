/*
 * @Author: kevinli
 * @Date:   2016-09-14 22:47:20
 * @Last Modified by:   kevinli
 * @Last Modified time: 2016-09-14 23:26:05
 */

(function($) {
    // LOADER
    jQuery(window).load(function() {
        jQuery("#loader").delay(100).fadeOut("slow");
    });

    $(window).on('mousemove', function(e) {
        var w = $(window).width();
        var h = $(window).height();
        var offsetX = 0.5 - e.pageX / w;
        var offsetY = 0.5 - e.pageY / h;

        $(".cover").each(function(i, el) {
            var offset = parseInt($(el).data('offset'));
            var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

            $(el).css({
                '-webkit-transform': translate,
                'transform': translate,
                'moz-transform': translate
            });
        });
    });

    // DEMO
    $('#demo').click(function(event) {
        $('#tpl_demo').slideDown("slow");
    });
    $('#tpl_demo').click(function(event) {
        $(this).slideUp("slow");
    });

    // BAIDU TONGJI
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?46ca146906f6455b416d8fb26d168d0a";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
})(jQuery);
