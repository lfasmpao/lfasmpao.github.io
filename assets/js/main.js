$('body').css('padding-top', $('.navbar').outerHeight() + 'px')
// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if (scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        } else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}
$(document).ready(function() {
    // Page title
    "use strict";
    var pageTitle = $("title").text();
    // Unfocus on tab
    $(window).blur(function() {
        // Random titles
        var myTitles = ["Made with love ❤️", "I miss you so much ❤️", "You're too shy! 🙈", "I eat veggies! 🥦"];
        document.title = myTitles[Math.floor(Math.random() * myTitles.length)];
    });
    // Focus on tab
    $(window).focus(function() {
        document.title = pageTitle;
    });
    // Initialize SmoothScroll
    var scroll = new SmoothScroll('a[href*="#"]');
    var typed = new Typed('#typed', {
        strings: ['I build network systems', 'I build things for the web', 'I build things for ^500 internet anti-censorship', 'I build things for automation', 'I ❤️ Raspberry Pi', 'I ❤️ Arduino', 'I ❤️ Git', 'I ❤️ Java', 'I ❤️ GoLang', 'I ❤️ Docker', 'I ❤️ Open Source', 'I ❤️ Python'],
        typeSpeed: 40
    });
});