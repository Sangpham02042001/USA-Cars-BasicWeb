const usedMakeJSON = {
    "Acura": ["All Models", "CL", "ILX", "MDX", "NSX", "RDC", "RL", "RLX", "TL", "TLX", "TSX", "TSX Sport Wagon", "ZDX"],
    "Alfa Romeo": ["All Models", "4C", "4C Coupe", "4C Spider", "Giulia", "Giulia Quarifoglio", "Stelvio", "Selvio Quadrifoglio"],
    "AM General": ["All Models", "Hummer"],
    "Aston Martin": ["All Models", "DB11", "DB7", "DB9", "DBS", "DBX", "Rapide", "Rapide S", "V12 Vantage", "Vanquish", "Vantage"],
    "Audi": ["All Models", "A3", "A4", "A4 Sedan", "A5", "A6", "A6 allroad", "A7", "A8", "allroad", "e-tron", "e-tron Sportback", "Q3", "Q5", "Q7", "R8", "RS 3", "RS 3 Sedan", "RS 4", "RS 5", "RS 7", "RS Q8", "S3", "S3 Sedan", "S4", "S5", "S6", "S7", "S8"],
    "Bentley": ["All Models", "Arnage", "Azure", "Bentayga", "Continental", "Flying Spur", "Mulsanne"],
    "BMW": ["All Models", "1 Series", "2 Series", "3 Series", "325e", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "i3", 'i8', 'M2', 'M3', 'M4', 'M5', 'M6', 'M8', 'X1', 'X2', "X3", "X4", "X5", "Z4"],
    "Buick": ["All Models", "Cascada", 'Century', "Enclave", "Encore", "Encore GX", "Envision", "LaCrosse", "LeSaber", "Lucerne", "Park Avenue", "Rainier", "Reatta", "Regal", "Rendezvous", "Terraza"],
    "Cadillac": ["All Models", "ATS", "Catera", "Concours", "CT4", "CT5", "CT6", "CTS-V", "Deville", "DTS", "Eldorado", "ELR"],
};

const usedPriceRating = [
    {
        "text": "Excellent Deal",
        "span": "(94529)"
    },
    {
        "text": "Great Deal",
        "span": "(147136)"
    },
    {
        "text": "Good Deal",
        "span": "(250363)"
    },
];

const usedFeature = [
    {
        "text": "Adaptive Cruise Control",
        "span": "(367935)"
    },
    {
        "text": "Alloy Wheels",
        "span": "(929832)"
    },
    {
        "text": "Apple CarPlay /Android Auto",
        "span": "(675150)"
    },
    {
        "text": "Automatic Parking",
        "span": "(126071)"
    },
    {
        "text": "Back-Up Camera",
        "span": "(880901)"
    },
    {
        "text": "Blind Spot Monitor",
        "span": "(547160)"
    },
    {
        "text": "Bluetooth/Hands-Free",
        "span": "(587831)"
    },
    {
        "text": "Climate Control",
        "span": "(728119)"
    },
    {
        "text": "Electronic Stability Control",
        "span": "(953587)"
    },
    {
        "text": "Entertainment System",
        "span": "(198684)"
    },
    {
        "text": "Heated Seats",
        "span": "(719352)"
    },
    {
        "text": "Heated Steering Wheel",
        "span": "(386783)"
    },
    {
        "text": "Keyless Start",
        "span": "(629905)"
    },
    {
        "text": "Lane Departure Warning",
        "span": "(434912)"
    },
    {
        "text": "Leather Seats",
        "span": "(908753)"
    },
    {
        "text": "Navigation System",
        "span": "(618617)"
    },
    {
        "text": "Passenger Air Bag Sensor",
        "span": "(910705)"
    },
    {
        "text": "Premium Sound System",
        "span": "(536675)"
    },
    {
        "text": "Rear Parking Aid",
        "span": "(601246)"
    },
    {
        "text": "Remote Engine Start",
        "span": "(650523)"
    },
    {
        "text": "Seat Memory",
        "span": "(378145)"
    },
    {
        "text": "Sun/ Moon Roof",
        "span": "(662377)"
    },
];

const usedColor = [
    {
        "color": "#D2B480",
        "text": "Beige/ Tan",
        "span": "(3413)"
    },
    {
        "color": "#111111",
        "text": "Black",
        "span": "(202518)"
    },
    {
        "color": "#164d99",
        "text": "Blue",
        "span": "(83723)"
    },
    {
        "color": "#B08D57",
        "text": "Bronze",
        "span": "(3169)"
    },
    {
        "color": "#654321",
        "text": "Brown",
        "span": "(7647)"
    },
    {
        "color": "#800000",
        "text": "Burgundy/Maroon",
        "span": "(24234)"
    },
    {
        "color": "#D4AF37",
        "text": "Gold",
        "span": "(344313)"
    },
    {
        "color": "#cccccc",
        "text": "Gray",
        "span": "(42342)"
    },
    {
        "color": "#00875a",
        "text": "Green",
        "span": "(12334)"
    },
    {
        "color": "#df8b1e",
        "text": "Orange",
        "span": "(32413)"
    },
    {
        "color": "#ffc0d6",
        "text": "Pink",
        "span": "(343213)"
    },
    {
        "color": " #800080",
        "text": "Purple",
        "span": "(343113)"
    },
    {
        "color": "#c4121a",
        "text": "Red",
        "span": "(67802)"
    },
    {
        "color": "#eeefff",
        "text": "Silver",
        "span": "(312413)"
    },
    {
        "color": "#40e0d0",
        "text": "Turquoise",
        "span": "(15)"
    },
    {
        "color": "#ffffff",
        "text": "White",
        "span": "(3413422)"
    },
    {
        "color": "#efbc22",
        "text": "Yellow",
        "span": "(341223)"
    },
    {
        "text": "Unspecified",
        "span": "(116047)"
    },
]

var usedMake = document.querySelector("#used_make");
var usedModel = document.querySelector("#used_model");


for (let i in usedMakeJSON) {
    usedMake.options[usedMake.options.length] = new Option(i, i);
}
usedMake.onchange = function () {
    $("#used_model").find('option').remove();
    for (let j in usedMakeJSON[this.value]) {
        usedModel.options[usedModel.options.length] = new Option(usedMakeJSON[this.value][j], usedMakeJSON[this.value][j]);
    }
}

var inputLeft = document.querySelectorAll("#input-left");
var inputRight = document.querySelectorAll("#input-right");

var thumbLeft = document.querySelectorAll(".slider > .thumb.left");
var thumbRight = document.querySelectorAll(".slider > .thumb.right");
var range = document.querySelectorAll(".slider > .range");
var lowPrice = document.querySelectorAll(".price-text > .low-price");
var highPrice = document.querySelectorAll(".price-text > .high-price");

function setLeftValue() {
    for (let i = 0; i < inputLeft.length; i++) {
        var _this = inputLeft[i],
            min = parseInt(_this.min),
            max = parseInt(_this.max);

        _this.value = Math.min(parseInt(_this.value), parseInt(inputRight[i].value) - 1);

        var percent = ((_this.value - min) / (max - min)) * 100;
        if (i == 1) {
            lowPrice[i].textContent = "$" + Math.floor(percent * 1.5);
        } else {
            lowPrice[i].textContent = '$' + Math.floor(percent);
        }
        thumbLeft[i].style.left = percent + "%";
        range[i].style.left = percent + "%";
    }
}
setLeftValue();

function setRightValue() {
    for (let i = 0; i < inputRight.length; i++) {
        var _this = inputRight[i],
            min = parseInt(_this.min),
            max = parseInt(_this.max);

        _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft[i].value) + 1);

        var percent = ((_this.value - min) / (max - min)) * 100;

        if (i == 1) {
            highPrice[i].textContent = "$" + Math.floor(percent * 1.5);
        } else {
            highPrice[i].textContent = '$' + Math.floor(percent);
        }

        thumbRight[i].style.right = (100 - percent) + "%";
        range[i].style.right = (100 - percent) + "%";
    }
}
setRightValue();

for (let i = 0; i < inputLeft.length; i++) {
    inputLeft[i].addEventListener("input", setLeftValue);
    inputRight[i].addEventListener("input", setRightValue);
}

function pushLabel(dest, source) {
    for (let i = 0; i < source.length; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "used__side-item");
        let label = document.createElement("label");
        label.setAttribute("for", source[i]["text"]);
        label.setAttribute("class", "used__side-item-label");
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", source[i]["text"]);
        label.appendChild(input);

        if (source[i]["color"] != null) {
            let div2 = document.createElement("div");
            div2.style.backgroundColor = source[i]["color"];
            div2.setAttribute("class", "label-color");
            $(label).addClass("used__side-color-item");
            label.appendChild(div2);
        }

        let p = document.createElement("p");
        p.textContent = source[i]["text"];
        p.setAttribute("title", source[i]["text"]);
        label.append(p);

        let span = document.createElement("span");
        span.textContent = source[i]["span"];
        label.appendChild(span);
        div.appendChild(label);

        dest.appendChild(div);
    }
}

pushLabel(document.querySelector(".feature-list"), usedFeature);
pushLabel(document.querySelector(".price-rating-list"), usedPriceRating);
pushLabel(document.querySelector(".color-list"), usedColor);
