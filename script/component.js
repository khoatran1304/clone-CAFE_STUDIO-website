$(document).ready(function () {
    // navbar
    $("#btn__navbar-close").on({
        click: closeNavBar
    })


    // ?
    $(window).on({
        //scroll: showNavBar,
        scroll: scrollPage
    })
});

var closeNavBar = () => {
    var display = $("#btn__navbar-close").css("display");
    if (display == "inline-block")
        $(".header").css("display", "none");
}

var showNavBar = () => {
    var lim = $('.home').height();
    // console.log(currentScrollPos);
    if(getScroll() > lim)
        $(".header").css("display", "initial");
}

var scrollPage = () => {
    // var cur = getScroll();
    // var limSection = $('.home').height();
    // var nextMove = parseInt(cur/limSection) + limSection;
    // //console.log(parseInt(cur/limSection) * limSection);
    // window.scrollBy(0, nextMove);
}

var getScroll = () => {
    return window.pageYOffset;
}