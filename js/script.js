$('.menu-toggle').click(function() {
    $('.site-nav').toggleClass('site-nav-open', 500);
    $(this).toggleClass('open');
})

$('body').click(function() {
    if ($('#navbar').hasClass('site-nav-open')) {
        $('.site-nav').toggleClass('site-nav-open', 500);
        $('.menu-toggle').toggleClass('open');
    }
})