$(function () {
    $(window).ready(function () {
        //adject main-slider
        let upperBar = $(".upper-bar").innerHeight(),
            navBar = $(".nav-bar").innerHeight(),
            screen = $(window).height();

        let result = screen - (upperBar + navBar);
        $(".main-slider").css("height",result)

        //shuffle script
        $(".featured-work .filter-list li").on("click", function () {
            $(this).addClass("active").siblings().removeClass("active")
            if ($(this).data("filter") === "all") {
               $(".group-imgs .row .col-md").css("opacity","1")
            } else {
                $(".group-imgs .row .col-md").css("opacity","0.08")
                $("." + $(this).data("filter")).parent().css("opacity","1")
            }
        })
    })
})