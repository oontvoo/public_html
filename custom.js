/**
 * @author: Vy Thuy Nguyen
 * Last Modified: 5/2/2012
 */
$(document).ready(function () {
    $(".postHeader a").bind("click", function (event) {
        event.preventDefault();
    });

    $("#hideBg #show").hide(0);
    $("#hideBg #msg").hide(0);
    
    $("#hideBg #hide").bind("click", function (event) {
	event.preventDefault();

        $(this).hide(0);
        $("#hideBg #show").show(0);
        $("#hideBg #msg").show(0);
        $("body").css("background-image", "url('images/bg')");
    });
   
    $("#hideBg #show").bind("click", function (event) {
	event.preventDefault();
        $(this).hide(0);
        $("#hideBg #hide").show(0);
        $("#hideBg #msg").hide(0);
        $("body").css("background-image", "url('images/blue3.jpg')");
    });
});

function showPost(post) {
    if ($("div#post" + post).is(":visible"))
        $("div#post" + post).hide("fast");
    else
        $("div#post" + post).show("fast");
}


$(function () {
    var $sidebar = $("#sidebar"),
                $window = $(window),
                offset = $sidebar.offset(),
                topPadding = 15;

    $window.scroll(function () {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });
});
