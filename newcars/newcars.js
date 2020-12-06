var mainList = document.querySelector(".main__content-list");
const imgLink = "../resources/img/new-cars-img/";

var mainJSON = {
    "Acura_ILX": {
        "header": "2021 Acura ILX",
        "img": imgLink + "2021_acura_ilx_angularfront.jpg",
        "order": "#14",
        "brand": "Luxury Small Cars",
        "textContent": "A disappointing interior quality, troublesome technology, and unimpressive rear-seat space help ensure the 2021 Acura ILX’s spot near the bo...",
        "price": [
            {
                "strong": "$25.950 - $31.850",
                "span": "MSRP",
            },
            {
                "strong": "24 city | 34 hwy",
                "span": "MPG",
            }
        ],
        "numberOfTrims": 4,
    },
    "Acura_RDX": {
        "header": "2021 Acura RDX",
        "img": imgLink + "2021_Acura_RDX_1.jpg",
        "order": "#6",
        "brand": "Luxury Compact SUVs",
        "textContent": "The 2021 Acura RDX features lively and athletic handling, a long list of standard features, and a high-quality, stylish cabin. However, its ...",
        "price": [
            {
                "strong": "$38.200 - $48.000",
                "span": "MSRP",
            }
        ],
        "numberOfTrims": 8,
    },
    "Acura_TLX": {
        "header": "2021 Acura TLX",
        "img": imgLink + "2021_Acura_TLX_1.jpg",
        "order": "#7",
        "brand": "Luxury Midsize Cars",
        "textContent": "The redesigned 2021 Acura TLX ranks in the bottom half of the luxury midsize car class. The TLX has a quality interior, poised ride and hand...",
        "price": [
            {
                "strong": "$37.500 - $48.300",
                "span": "MSRP",
            },
            {
                "strong": "21-22 city | 29-31 hwy ",
                "span": "MPG",
            }
        ],
        "numberOfTrims": 8,
    },
    "Audi_a4": {
        "header": "2021 Audi A4",
        "img": imgLink + "2021_Audi_A4_1.jpg",
        "order": "#4",
        "brand": "Luxury Small Cars",
        "textContent": "The 2021 Audi A4 places high in our luxury small car rankings thanks in part to its balanced ride, potent yet efficient engines, and elegant...",
        "price": [
            {
                "strong": "$39.100 - $49.900",
                "span": "MSRP",
            }
        ],
        "numberOfTrims": 9,
    },
    "Audi_a5": {
        "header": "2021 Audi A5",
        "img": imgLink + "2021_Audi_A5_-_RS_5_Sportback_1.jpg",
        "order": "#3",
        "brand": "Luxury Small Cars",
        "textContent": "The 2021 Audi A5 finishes near the top of our luxury small car rankings. It has one of the best interiors in the class, along with punchy po..",
        "price": [
            {
                "strong": "$41.800 - $60.600",
                "span": "MSRP",
            }
        ],
        "numberOfTrims": 18,
    },
    "Audi_a6": {
        "header": "2021 Audi A6",
        "img": imgLink + "2021_Audi_A6_-_RS6_Avant_1.jpg",
        "order": "#3",
        "brand": "Luxury Midsize Cars",
        "textContent": "The 2021 Audi A6 ranks near the top of the luxury midsize car class thanks to its opulent \
                         interior, refined ride, and powerful engines....",
        "price": [
            {
                "strong": "$54.900 - $74.400",
                "span": "MSRP",
            }
        ],
        "numberOfTrims": 8,
    },
    "Audi_a6_allroad": {
        "header": "2021 Audi A6 Allroad",
        "img": imgLink + "2021_Audi_A6_Allroad_1.jpg",
        "order": "#3",
        "brand": "Luxury Midsize Cars",
        "textContent": "The full review of the 2021 Audi A6 Allroad is coming soon. In the meantime, you can see pictures, \
                         research prices or view and compare specs for...",
        "price": [
            {
                "strong": "$65.900 - $65.900",
                "span": "MSRP",
            }
        ],
        "numberOfTrims": 2,
    },
    "Audi_a7": {
        "header": "2021 Audi A7",
        "img": imgLink + "2021_Audi_RS_7_12.jpg",
        "order": "#1",
        "brand": "Luxury Large Cars",
        "textContent": "The 2021 Audi A7 ranks at the top of the luxury large car class because of its high-end cabin, \
                         ample cargo space, poised ride and handling, ..",
        "price": [
            {
                "strong": "$69.200 - $84.400",
                "span": "MSRP",
            },
            {
                "strong": "18 city | 28 hwy",
                "span": "MPG",
            }
        ],
        "numberOfTrims": 5,
    },
    "Audi_a8": {
        "header": "2021 Audi A8",
        "img": imgLink + "2021_audi_a8_l_angularfront.jpg",
        "order": "#3",
        "brand": "Super Luxury Cars",
        "textContent": "The 2021 Audi A8 ranks in the middle of the super luxury car class. It features one of the most \
                         exquisite cabins in the class, as well as a ...",
        "price": [
            {
                "strong": "$86.500 - $130.900",
                "span": "MSRP",
            }
        ],
        "numberOfTrims": 3,
    },
    "Audi_q3": {
        "header": "2021 Audi Q3",
        "img": imgLink + "2021_audi_q3_angularfront.jpg",
        "order": "#2",
        "brand": "Luxury Subcompact SUVs",
        "textContent": "The 2021 Audi Q3 ranks near the top of the luxury subcompact SUV class. The Q3 expertly blends \
                         dynamic handling and a coddling ride with a p...",
        "price": [
            {
                "strong": "$36.000 - $36.000",
                "span": "MSRP",
            }
        ],
        "numberOfTrims": 2,
    },
    "Audi_q7": {
        "header": "2021 Audi Q7",
        "img": imgLink + "2021_Audi_Q7_1.jpg",
        "order": "#5",
        "brand": "Luxury Midsize SUVs",
        "textContent": "The 2021 Audi Q7 ranks in the top third of the luxury midsize SUV class. It fuses high-class cabin \
                     materials and abundant tech features with...",
        "price": [
            {
                "strong": "$54.950 - $85.000",
                "span": "MSRP",
            }
        ],
        "numberOfTrims": 7,
    },
    "Audi_q8": {
        "header": "2021 Audi Q8",
        "img": imgLink + "2021_Audi_Q8_1.jpg",
        "order": "#7",
        "brand": "Luxury Midsize SUVs",
        "textContent": "The 2021 Audi Q8 finishes in the top half of our luxury midsize SUV rankings. This German SUV is posh \
                     and enjoyable to drive, but its small ...",
        "price": [
            {
                "strong": "$68.200 - $89.100",
                "span": "MSRP",
            }
        ],
        "numberOfTrims": 5,
    },
    "BMW_2": {
        "header": "2021 BMW 2-Series",
        "img": imgLink + "2021_BMW_2-Series_1.jpg",
        "order": "#2",
        "brand": "Luxury Small Cars",
        "textContent": "Thrilling driving dynamics, a refined cabin, and a great predicted reliability rating all combine to help \
                     launch the 2021 BMW 2 Series towar...",
        "price": [
            {
                "strong": "$35.900 - $52.950",
                "span": "MSRP",
            },
            {
                "strong": "21 city | 31 hwy",
                "span": "MPG",
            }
        ],
        "numberOfTrims": 10,
    },
    "BMW_3": {
        "header": "2021 BMW 3-Series",
        "img": imgLink + "2021_BMW_3_Series_1.jpg",
        "order": "#7",
        "brand": "Luxury Small Cars",
        "textContent": "The 2021 BMW 3 Series sits in the middle of the competitive luxury small car segment. It delivers lively \
                         handling and good engine power, but...",
        "price": [
            {
                "strong": "$41.250 - $56.700 ",
                "span": "MSRP",
            },
            {
                "strong": "25-26 city | 34-36 hwy",
                "span": "MPG",
            }
        ],
        "numberOfTrims": 8,
    },
    "BMW_5": {
        "header": "2021 BMW 5-Series",
        "img": imgLink + "2021_BMW_5_Series_1.jpg",
        "order": "#7",
        "brand": "Luxury Small Cars",
        "textContent": "The full review of the 2021 BMW 5-Series is coming soon. In the meantime, you can see pictures, research \
                     prices or view and compare specs for...",
        "price": [
            {
                "strong": "$54.200 - $103.500",
                "span": "MSRP",
            }
        ],
        "numberOfTrims": 8,
    },
    "BMW_7": {
        "header": "2021 BMW 7-Series",
        "img": imgLink + "2021_BMW_7_Series_1.jpg",
        "order": "#5",
        "brand": "Super Luxury Cars",
        "textContent": "The 2021 BMW 7 Series ranks near the back of the super luxury car class. The 7 Series offers strong \
                         engine performance, a comfortable ride, ...",
        "price": [
            {
                "strong": "$86.800 - $157.800",
                "span": "MSRP",
            },
            {
                "strong": "13-22 city | 20-29 hwy",
                "span": "MPG",
            }
        ],
        "numberOfTrims": 6,
    },
    "BMW_8": {
        "header": "2021 BMW 8-Series",
        "img": imgLink + "2021_BMW_8-Series_1.jpg",
        "order": "#8",
        "brand": "Luxury Sports Cars",
        "textContent": "The 2021 BMW 8 Series has powerful engine choices, an upscale interior, and lots of cargo space, but it's \
                         relegated to the middle of the lux...",
        "price": [
            {
                "strong": "$85.000 - $130.000",
                "span": "MSRP",
            }
        ],
        "numberOfTrims": 10,
    },
    "BMW_X1": {
        "header": "2021 BMW X1",
        "img": imgLink + "2021_BMW_X1_1.jpg",
        "order": "#1",
        "brand": "Luxury Subcompact SUVs",
        "textContent": "An enthusiastic engine, straightforward infotainment controls, and a roomy cabin and cargo hold all help \
                     the 2021 BMW X1 climb to the top of...",
        "price": [
            {
                "strong": "$35.400 - $37.400",
                "span": "MSRP",
            }
        ],
        "numberOfTrims": 2,
    },
    "BMW_X2": {
        "header": "2021 BMW X2",
        "img": imgLink + "2021_bmw_x2_angularfront.jpg",
        "order": "#4",
        "brand": "Luxury Subcompact SUVs",
        "textContent": "The 2021 BMW X2 secures a middle-of-the-road spot in our luxury subcompact SUV rankings. It's incredibly \
                         fun to drive, but several rivals co... ",
        "price": [
            {
                "strong": "$36.600 - $46.450",
                "span": "MSRP",
            }
        ],
        "numberOfTrims": 3,
    },
    "BMW_X3": {
        "header": "2021 BMW X3",
        "img": imgLink + "2021_bmw_x3_angularfront.jpg",
        "order": "#1",
        "brand": "Luxury Subcompact SUVs",
        "textContent": "The 2021 BMW X3 ranks at the top of the luxury compact SUV class because of its spacious interior, \
                         easy-to-use features, strong engine perfo...",
        "price": [
            {
                "strong": "$43.000 - $69.900",
                "span": "MSRP",
            }
        ],
        "numberOfTrims": 2,
    },
}

var contentItem; //main__content-item
var contentItemDes; //main__content-item-des
var media; //media main__content-item-media
var itemImgLink; //media main__content-item-media a
var itemDesImg; // item-des-img
var mediaBody; //media-body
var itemHeaderLink; //item-header-link
var orderInList; //order-in-list
var itemTextDes; //item-text-description
var contentItemLast; //main__content-item-last row
var itemLastFind; //item-last-find
var inputLast; //item-last-find input
var buttonLast;
var itemLastPrice; //item-last-price
var itemLastPriceText; //item-last-price-text
var contentItemFooter; //main-content-item-footer
var footerInput; //form-check-input
var footerLabel; //form-check-label
var footerSeeAll; //item-footer-seeAll


window.onload = function () {
    const itemReadMore = "READ MORE » ";
    // const itemReadMoreLink = document.createElement("a");
    // itemReadMoreLink.appendChild(document.createTextNode(itemReadMore));
    for (var i in mainJSON) {
        contentItem = document.createElement("div");
        contentItem.setAttribute("class", "main__content-item");
        contentItemDes = document.createElement("div");
        contentItemDes.setAttribute("class", "main__content-item-des");
        media = document.createElement("div");
        media.setAttribute("class", "media main__content-item-media");
        itemImgLink = document.createElement("a");
        itemImgLink.setAttribute("href", "#");
        itemDesImg = document.createElement("img");
        itemDesImg.setAttribute("class", "item-des-img");
        itemDesImg.setAttribute("src", mainJSON[i]["img"]);
        itemImgLink.appendChild(itemDesImg);

        mediaBody = document.createElement("div");
        mediaBody.setAttribute("class", "media-body");
        let link = document.createElement("a");
        link.setAttribute("class", "item-header-link");
        link.setAttribute("href", "#");
        link.appendChild(document.createTextNode(mainJSON[i]["header"]));


        orderInList = document.createElement("p");
        let strong = document.createElement("strong");
        strong.textContent = mainJSON[i]["order"];
        orderInList.appendChild(strong);
        orderInList.appendChild(document.createTextNode("  in  "));
        let link2 = document.createElement("a");
        link2.setAttribute("href", "#");
        link2.appendChild(document.createTextNode(mainJSON[i]["brand"]));
        orderInList.appendChild(link2);
        orderInList.setAttribute("class", "order-in-list");


        itemTextDes = document.createElement("p");
        itemTextDes.appendChild(document.createTextNode(mainJSON[i]["textContent"]));
        const itemReadMoreLink = document.createElement("a");
        itemReadMoreLink.appendChild(document.createTextNode(itemReadMore));
        itemReadMoreLink.setAttribute("class", "item-readmore");
        itemReadMoreLink.setAttribute("href", "#");
        itemTextDes.setAttribute("class", "item-text-description");
        itemTextDes.appendChild(itemReadMoreLink);


        mediaBody.appendChild(link);
        mediaBody.appendChild(orderInList);
        mediaBody.appendChild(itemTextDes);
        // console.log(mediaBody);
        media.appendChild(itemImgLink);
        media.appendChild(mediaBody);
        // console.log(media);

        contentItemLast = document.createElement("div");
        contentItemLast.setAttribute("class", "main__content-item-last row");
        itemLastFind = document.createElement("div");
        itemLastFind.setAttribute("class", "item-last-find input-group col-5");
        inputLast = document.createElement("input");
        inputLast.setAttribute("class", "form-control");
        inputLast.setAttribute("type", "text");
        inputLast.setAttribute("placeholder", "Zip Code");
        // console.log(inputLast);

        let div = document.createElement("div");
        div.setAttribute("class", "input-group-append");
        buttonLast = document.createElement("button");
        buttonLast.setAttribute("class", "btn btn-danger text-white");
        buttonLast.setAttribute("type", "button");
        buttonLast.textContent = "Find Best Price";
        // console.log(buttonLast);
        div.appendChild(buttonLast);

        itemLastFind.appendChild(inputLast);
        itemLastFind.appendChild(div);
        // console.log(itemLastFind);

        let div2 = document.createElement("div");
        div2.setAttribute("class", "col-7 item-last-price");
        for (let j = 0; j < mainJSON[i]["price"].length; j++) {
            let div3 = document.createElement("div");
            div3.setAttribute("class", "item-last-price-text");
            let strong = document.createElement("strong");
            strong.textContent = mainJSON[i]["price"][j]["strong"];
            div3.appendChild(strong);
            let span = document.createElement("span");
            span.textContent = mainJSON[i]["price"][j]["span"];
            div3.appendChild(span);
            div2.appendChild(div3);
            // console.log(div3);
        }
        contentItemLast.appendChild(itemLastFind);
        contentItemLast.appendChild(div2);
        // console.log(contentItemLast);

        contentItemFooter = document.createElement("div");
        contentItemFooter.setAttribute("class", "main-content-item-footer");
        footerInput = document.createElement("input");
        footerInput.setAttribute("class", "form-check-input");
        footerInput.setAttribute("type", "checkbox");
        contentItemFooter.appendChild(footerInput);
        footerLabel = document.createElement("label");
        footerLabel.setAttribute("class", "form-check-label");
        footerLabel.appendChild(document.createTextNode("Add to Compare"));
        contentItemFooter.append(footerLabel);
        footerSeeAll = document.createElement("strong");
        footerSeeAll.setAttribute("class", "item-footer-seeAll");
        let footerTextNode = document.createTextNode("SEE ALL " + mainJSON[i]["numberOfTrims"] + " TRIMS");
        let i1 = document.createElement("i");
        i1.setAttribute("class", "fas fa-angle-down");
        footerSeeAll.appendChild(footerTextNode);
        footerSeeAll.appendChild(i1);
        contentItemFooter.appendChild(footerSeeAll);
        // console.log(footerSeeAll);

        contentItemDes.appendChild(media);
        contentItemDes.appendChild(contentItemLast);
        // console.log(contentItemDes);
        contentItem.appendChild(contentItemDes);
        contentItem.appendChild(contentItemFooter);
        document.querySelector(".main__content-list").appendChild(contentItem);

    }
} 