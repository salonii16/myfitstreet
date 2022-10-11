$(window).scroll(function () {
    if ($(window).scrollTop() >= 10) {
        $('header').addClass('fixed-header');
    } else {
        $('header').removeClass('fixed-header');
    }
});

// -------- add class in body js ---------- //
$(document).ready(function () {
    $(".togglebtn").click(function () {
        $("body").toggleClass("smallSidebar");
    });
});

// -------- tooltip js ---------- //
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(document).ready(function () {
    $(".dashBoardToggle").click(function () {
        $("body").toggleClass("leftPartShow");
    });
    $(".rightBodyPart ").click(function () {
        $("body").removeClass("leftPartShow");
    });
});
