var mainJS = {
    smoothAnchorScroll: function () {
        'use strict';
        $('a[href^="#"]').smoothScroll({offset: -128});
    },
    stickyNav: function () {
        'use strict';
        window.onscroll = function() {myFunction()};
            
        var navbar = document.getElementById("headerbar");
        var sticky = navbar.offsetTop;
        
        function myFunction() {
        if ($(window).scrollTop() >= 0) {
            navbar.classList.add("sticky")
            } else {
            navbar.classList.remove("sticky");
            }
        }
    },
    contentSidebarAnchors: function () {
        'use strict';
        // Loop through each heading
        $('.page__content__row h2').each(function () {
            var heading = $(this).html(); // heading name
            var anchor = heading.replace(/\s+/g, '-').replace('?', '').replace(',', '').toLowerCase(); // generate anchor name
            $(this).attr('id', anchor); // set id of heading to anchor
            $('.content-sidebar__fixed ul').append('<li><a href="#' + anchor + '">' + heading + '</a></li>'); // add anchor to content sidebar
            $('.content-sidebar__fixed ul li a').click(function() {
                $('ul li.current').removeClass('current');
                $(this).parent('li').addClass('current');
            });
        });
    }
};

$(function () {
    'use strict';
    mainJS.contentSidebarAnchors();
    mainJS.smoothAnchorScroll();
    mainJS.stickyNav();
});

