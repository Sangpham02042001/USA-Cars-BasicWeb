customElements.define("custom-menu", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="../css/base.css">
            <header class="header">
            <a href="../html/index.html" class="header__img_link">
                <img src="../resources/img/usn-logo-large.png" alt="" class="header__img">
            </a>
            <a href="../html/index.html" class="header__title">
                CARS
                <span class="header__title_span"> » </span>
            </a>
            <ul class="header__list">
                <li class="header__list-item">
                    <a href="../html/newcars.html" class="header__list-item-link">New Cars</a>
                    <div class="header__item-dropdown">
                        <a href="" class="header__dropdown-item">New Cars For Sale</a>
                        <a href="" class="header__dropdown-item">Research Cars</a>
                        <a href="" class="header__dropdown-item">Best Price Program</a>
                        <a href="" class="header__dropdown-item">New Car Rankings</a>
                        <a href="" class="header__dropdown-item">Car Deals This Month</a>
                        <a href="" class="header__dropdown-item">Compare Cars</a>
                        <a href="" class="header__dropdown-item">Calculate Car Payment</a>
                    </div>
                </li>
                <li class="header__list-item">
                    <a href="../html/usedcars.html" class="header__list-item-link">Used Cars</a>
                    <div class="header__item-dropdown">
                        <a href="" class="header__dropdown-item">Used Cars For Sale</a>
                        <a href="" class="header__dropdown-item">Certified Pre-Owned Cars for Sale</a>
                        <a href="" class="header__dropdown-item">Used Car Rankings</a>
                        <a href="" class="header__dropdown-item">Used Car Deals This Month</a>
                        <a href="" class="header__dropdown-item">Compare Used Cars</a>
                        <a href="" class="header__dropdown-item">Calculate Used Car Payment</a>
                    </div>
                </li>
                <li class="header__list-item">
                    <a href="../html/carrankings.html" class="header__list-item-link">Car Rankings</a>
                    <div class="header__item-dropdown">
                        <a href="" class="header__dropdown-item">New Car Rankings</a>
                        <a href="" class="header__dropdown-item">Used Car Rankings</a>
                        <a href="" class="header__dropdown-item">Best Cars for The Money</a>
                        <a href="" class="header__dropdown-item">Best Cars for the Families</a>
                        <a href="" class="header__dropdown-item">Best Vehicle Brands</a>
                    </div>
                </li>
                <li class="header__list-item">
                    <a href="../html/carrankings.html" class="header__list-item-link">Cars for Sale</a>
                    <div class="header__item-dropdown">
                        <a href="" class="header__dropdown-item">New Car for Sale</a>
                        <a href="" class="header__dropdown-item">Used Car for Sale</a>
                        <a href="" class="header__dropdown-item">Certified Pre-Owned Cars for Sale</a>
                    </div>
                </li>
                <li class="header__list-item">
                    <a href="../html/advice.html" class="header__list-item-link">Advice</a>
                    <div class="header__item-dropdown">
                        <a href="" class="header__dropdown-item">Car Buying Advice</a>
                        <a href="" class="header__dropdown-item">Car Insurance</a>
                        <a href="" class="header__dropdown-item">Car Loand & Leasing</a>
                        <a href="" class="header__dropdown-item">Motorcycles</a>
                        <a href="" class="header__dropdown-item">ATVS</a>
                        <a href="" class="header__dropdown-item">UTVS</a>
                    </div>
                </li>
                <li class="header__list-item">
                    <a href="../html/bestcardeals.html" class="header__list-item-link">Best Car Deals</a>
                    <div class="header__item-dropdown">
                        <a href="" class="header__dropdown-item">New Car Deals</a>
                        <a href="" class="header__dropdown-item">Used Car Deals</a>
                        <a href="" class="header__dropdown-item">Lease Car Deals</a>
                    </div>
                </li>
                <li class="header__list-item"><a href="" class="header__list-item-link">Sell Your Car</a></li>
            </ul>
            <div class="header__menu">
                <div class="header__menu_bar"></div>
                <div class="header__menu_bar"></div>
                <div class="header__menu_bar"></div>
            </div>
            <div class="menu">
                <div class="menu__navbar d-none d-md-inline-block">
                    <select name="make" class="make">
                        <option value="make">Make</option>
                    </select>
                    <select name="model" class="model">
                        <option value="">Model</option>
                    </select>
                    <select name="year" class="year">
                        <option value="">Year</option>
                    </select>
                    <button class="search"><i class="fas fa-search"></i></button>
                </div>
            </div>
        </header>
            <div class="modal2">
        <div class="modal-content">
            <div class="modal__header">
                <a href="../html/index.html" class="modal__header-link">CARS</a>
                <span>&times;</span>
            </div>
            <select name="make" class="make2">
                <option value="make">Make</option>
            </select>
            <select name="model" class="model2">
                <option value="">Model</option>
            </select>
            <select name="year" class="year2">
                <option value="">Year</option>
            </select>
            <button class="search">Search Cars</button>
            <ul class="modal__car-list">
                <li class="modal__car-item">
                    New Cars
                    <span> » </span>
                </li>
                <li class="modal__car-item">
                    Used Cars
                    <span> » </span>
                </li>
                <li class="modal__car-item">
                    Car Rankings
                    <span> » </span>
                </li>
                <li class="modal__car-item">
                    Cars for Sale
                    <span> » </span>
                </li>
                <li class="modal__car-item">
                    Advice
                    <span> » </span>
                </li>
                <li class="modal__car-item">
                    Best Car Deals
                    <span> » </span>
                </li>
                <li class="modal__car-item">
                    Sell Your Car
                    <span> » </span>
                </li>
            </ul>
            <h2 class="modal__header-sm">
                MORE FROM U.S. NEWS
            </h2>
            <ul class="modal__link-list">
                <li class="modal__link-item">
                    <a href="" class="modal__link">News</a>
                </li>
                <li class="modal__link-item">
                    <a href="" class="modal__link">Education</a>
                </li>
                <li class="modal__link-item">
                    <a href="" class="modal__link">Health</a>
                </li>
                <li class="modal__link-item">
                    <a href="" class="modal__link">Money</a>
                </li>
                <li class="modal__link-item">
                    <a href="" class="modal__link">Travel</a>
                </li>
                <li class="modal__link-item">
                    <a href="" class="modal__link">Cars</a>
                </li>
                <li class="modal__link-item">
                    <a href="" class="modal__link">Law Firms</a>
                </li>
                <li class="modal__link-item">
                    <a href="" class="modal__link">Real Estate</a>
                </li>
                <li class="modal__link-item">
                    <a href="" class="modal__link">360 Reviews</a>
                </li>
                <li class="modal__link-item">
                    <a href="" class="modal__link">Ranking</a>
                </li>
                <li class="modal__link-item">
                    <a href="" class="modal__link">Events</a>
                </li>
            </ul>
            <ul class="modal__list-more">
                <li class="modal__more-item">
                    <a href="" class="modal__more-link">Contact</a>
                </li>
                <li class="modal__more-item">
                    <a href="" class="modal__more-link">Employment</a>
                </li>
                <li class="modal__more-item">
                    <a href="" class="modal__more-link">Advertising</a>
                </li>
                <li class="modal__more-item">
                    <a href="" class="modal__more-link">Terms & Conditions</a>
                </li>
                <li class="modal__more-item">
                    <a href="" class="modal__more-link">Privacy Policy</a>
                </li>
            </ul>
            <div class="modal__logo">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
            </div>
        </div>
    </div>

    <div class="modal__details">
        <div class="modal__details-menu">
            <div class="modal__details_return">
                « Back
            </div>
            <div class="modal__details-close">&times;</div>
        </div>
        <div class="modal__details-content">
            <a href="" class="modal__details-header">
            </a>
            <ul class="modal__details-list"></ul>
        </div>
    </div>`;
    }
});


const header__menu = document.querySelector(".header__menu");
header__menu.addEventListener("click", function () {
    document.getElementsByClassName("modal2")[0].style.width = "100%";
    $("body").addClass("stop-scrolling");
    $("body").removeClass("enable-scrolling");
    if (document.body.offsetWidth <= "640") {
        document.getElementsByClassName("modal-content")[0].style.width = "100%";
    } else {
        document.getElementsByClassName("modal-content")[0].style.width = "290px";
    }
    document.getElementsByClassName("modal-content")[0].style.right = "0";
});


function toggleWidth() {
    document.getElementsByClassName("modal2")[0].style.width = "0";
    document.getElementsByClassName("modal-content")[0].style.width = "0";
    $("body").removeClass("stop-scrolling");
    $("body").addClass("enable-scrolling");
    if (document.body.offsetWidth <= 640) {
        document.getElementsByClassName("modal-content")[0].style.right = "-100%"
    } else {
        document.getElementsByClassName("modal-content")[0].style.right = "-290px";
    }
}

function toggleWidthDetail() {
    document.querySelector(".modal__details").style.width = "0";
    document.querySelector(".modal__details").style.minWidth = "0";
}

document.querySelector(".modal__details-close").addEventListener("click", function () {
    toggleWidth();
    toggleWidthDetail();
    $("body").removeClass("stop-scrolling");
})


document.querySelector(".modal__header span").addEventListener("click", toggleWidth);

document.querySelector(".modal__details_return").addEventListener("click", toggleWidthDetail);

var make = document.querySelector(".make");
var model = document.querySelector(".model");
var year = document.querySelector(".year");
var make2 = document.querySelector(".make2");
var model2 = document.querySelector(".model2");
var year2 = document.querySelector(".year2");

window.onload = function () {
    for (var x in menuJSON) {
        make.options[make.options.length] = new Option(x, x);
        make2.options[make2.options.length] = new Option(x, x);
    }
    make.onchange = function () {
        $(".model").find('option').remove();
        for (var y in menuJSON[this.value]) {
            model.options[model.options.length] = new Option(y, y);
        }
    }
    make2.onchange = function () {
        $(".model2").find('option').remove();
        for (var y in menuJSON[this.value]) {
            model2.options[model2.options.length] = new Option(y, y);
        }
    }
    model.onchange = function () {
        $(".year").find('option').remove();
        var z = menuJSON[make.value][this.value];
        for (var i = 0; i < z.length; i++) {
            year.options[year.options.length] = new Option(z[i], z[i]);
        }
    }
    model2.onchange = function () {
        $(".year2").find('option').remove();
        var z = menuJSON[make2.value][this.value];
        for (var i = 0; i < z.length; i++) {
            year2.options[year2.options.length] = new Option(z[i], z[i]);
        }
    }
}


function ModalLink(abc) {
    if (document.body.offsetWidth <= "640") {
        document.getElementsByClassName("modal__details")[0].style.width = "100%";
    } else {
        document.getElementsByClassName("modal__details")[0].style.width = "290px";
    }
    var t = document.createTextNode(abc);
    // document.querySelector(".modal__details-header").textContent = abc;
    document.querySelector(".modal__details-header").textContent = "";
    document.querySelector(".modal__details-header").appendChild(t);
    var href = abc.split(" ").join("").toLowerCase();
    if (href === "carsforsale") {
        href = "carrankings";
    }
    document.querySelector(".modal__details-header").setAttribute("href", "../html/" + href + ".html");
    $(".modal__details-list").find('li').remove();
    for (let i = 0; i < modalJSON[abc].length; i++) {
        var li = document.createElement("LI");
        var textNode = document.createTextNode(modalJSON[abc][i]);
        li.appendChild(textNode);
        document.querySelector(".modal__details-list").appendChild(li);
    }
}

var text = document.querySelectorAll(".modal__car-item");
for (var i = 0; i < text.length; i++) {
    text[i].addEventListener("click", function (e) {
        e.preventDefault();
        ModalLink(e.target.textContent.replace("»", "").trim());
    });
}



// var modalImg = document.querySelector("#modalImg");
var selectLists = document.getElementsByClassName("select__list");

$(document).ready(function () {
    $(".menu__btn .reviews__button").on("click", function () {
        $(this).addClass("menu__btn_style1");
        $(this).removeClass("menu__btn_style2");
        $(".menu__btn .sales__button").addClass("menu__btn_style2");
        $(".menu__btn .sales__button").removeClass("menu__btn_style1");
        $("#zipcode").css("display", "none");
        $(".year").css("display", "block");
    });
    $(".menu__btn .sales__button").on("click", function () {
        $(this).addClass("menu__btn_style1");
        $(this).removeClass("menu__btn_style2");
        $(".menu__btn .reviews__button").addClass("menu__btn_style2");
        $(".menu__btn .reviews__button").removeClass("menu__btn_style1");
        $("#zipcode").css("display", "block");
        $(".year").css("display", "none");
    })

    $("#modal .close").on("click", function () {
        $("#modal").css("display", "none");
    });
    for (let i = 0; i < selectLists.length; i++) {
        $(selectLists[i].querySelector(".select__dropdown")).hide();
        $(selectLists[i].querySelector(".select__button")).on("click", function () {
            $(this.querySelector("span i")).toggleClass("rotate");
            $(selectLists[i].querySelector(".select__dropdown")).toggle(500);
        })
    }
})
