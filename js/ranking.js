function openCar(evt, name) {
    var i, carContent, carLinks;

    carContent = document.querySelectorAll(".ranking-content-left");
    for (i = 0; i < carContent.length; i++) {
        carContent[i].style.display = "none";
    }

    carLinks = document.querySelectorAll(".car-link-img");

    for (i = 0; i < carLinks.length; i++) {
        $(carLinks[i]).removeClass("active");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

var navbar = document.querySelector(".ranking-navbar");

var sticky = navbar.offsetTop;

window.onscroll = function () {
    if (window.pageYOffset >= sticky) {
        $(navbar).addClass("sticky");
    } else {
        $(navbar).removeClass("sticky");
    }
}