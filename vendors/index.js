const menuJSON = {
    // "Make": {
    //     "Model": "Year",
    // },
    "Acura": {
        // "Model": "Year",
        "ILX": ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013"],
        "ILX Hybrid": ["2013", "2014"],
        "MDX": ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007"],
        "MDX Hybrid": ["2020", "2019", "2018", "2017"],
        "NSX": ["2020", "2019", "2019", "2018", "2017"],
        "RDX": ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007"],
        "RL": ["2012", "2011", "2010", "2009", "2008", "2007"],
        "RLX": ["2020", "2019", "2018", "2017", "2016", "2015", "2014"],
        "TL": ["2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007"],
        "TLX": ["2021", "2020", "2019", "2018", "2017", "2016", "2015"],
        "TSX": ["2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007"],
        "TSX Sport Wagon": ["2014", "2013", "2012", "2011"],
        "ZDX": ["2013", "2012", "2011", "2010"]
    },
    "Alfa Romeo": {
        // "Model": "Year",
        "4C": ["2020", "2019", "2018", "2017", "2016", "2015", "2014"],
        "Giulia": ["2020", "2019", "2018", "2017"],
        "Stelvio": ["2020", "2019", "2018"]
    },
    "Aston Martin": {
        // "Model": "Year",
        "DB9": ["2011", "2010", "2009", "2008"],
        "DBS": ["2010", "2009"],
        "Vantage": ["2010", "2009"]
    },
    "Audi": {
        // "Model": "Year",
        "A3": ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007"],
        "A4": ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007"],
        "A4 Allroad": ["2020"],
        "A4 Wagon": ["2012", "2011", "2010", "2009", "2008"],
        "A5": ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008"],
        "A6": ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008"],
        "A6 Allroad": ["2020", "2021"],
        "A6 Wagon": ["2011", "2010", "2009", "2008"],
        "A7": ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012"],
        "A8": ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008"],
        "Allroad": ["2019", "2018", "2017", "2016", "2015", "2014", "2013"],
        "e-tron": ["2021", "2020", "2019"],
        "Q3": ["2021", "2020", "2019", "2018", "2017", "2016", "2015"],
        "Q5": ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008"],
        "Q7": ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007"],
        "Q8": ["2021", "2020", "2019"],
        "R8": ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008"],
        "TT": ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008"]
    }
}

const modalJSON = {
    "New Cars": ["New Cars for Sale", "Research Cars", "Best Price Program", "New Car Rankings", "Car Deals This Month", "Compare Cars", "Caculate Car Payment"],
    "Used Cars": ["Used Cars for Sale", "Certified Pre-Owned Cars for Sale", "Used Car Rankings", "Used Car Deals This Month", "Compare Used Cars", "Calculate Used Car Payment"],
    "Car Rankings": ["New Car Rankings", "Used Car Rankings", "Best Car for the Money", "Best Cars for Families", "Best Vehicle Brands"],
    "Cars for Sale": ["New Cars for Sale", "Used Cars for Sale", "Certified Pre-Owned Cars for Sale"],
    "Advice": ["Car Buying Advice", "Car Insurance", "Car Loans & Leasing", "Motorcycles", "ATVS", "UTVS"],
    "Best Car Deals": ["New Car Deals", "Used Car Deals", "Lease Car Deals"]
}

const header__menu = document.querySelector(".header__menu");
header__menu.addEventListener("click", function () {
    document.getElementsByClassName("modal2")[0].style.width = "100%";
    $("body").addClass("stop-scrolling");
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
    document.querySelector(".modal__details-header").setAttribute("href", "../" + href + "/" + href + ".html");
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



function addOption(selectbox, text) {
    var optn = document.createElement("option");
    optn.textContent = text;
    selectbox.options.add(optn);
}

var modalImg = document.querySelector("#modalImg");
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
    $(".browse__style-item-img").on("click", function () {
        if (document.body.offsetWidth < 980) {
            return;
        }
        $("#modal").css("display", "block");
        modalImg.src = this.src;
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