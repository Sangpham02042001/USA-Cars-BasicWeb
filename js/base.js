$(window).on("load", function () {
    $("body").addClass("stop-scrolling");
    $("#preLoader").delay(800).fadeOut(500);
});

function enableScroll() {
    // document.querySelector("body").style.overflowY = "auto";
    $("body").addClass("enable-scrolling");
}

setTimeout(enableScroll, 1000);