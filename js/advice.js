const adviceJSON = [
    {
        "linkHeader": "Which Used Ford F-150 Is the Best?",
        "text": "The Ford F-Series of pickups have delivered affordable, dependable trucks to the masses since 1948. Like the rest of...",
        "author": "Geagre Kenedy",
        "time": "Dec. 15, 2020",
        "iamge": "1_2019_ford_f-150.jpg",
    },
    {
        "linkHeader": "Honda vs. Acura: Worth the Extra Cash in 2021?",
        "text": "Honda created the Acura brand in the 1980s to compete with the likes of Lexus, from parent company Toyota, and Nissan’s..",
        "author": "Blair Travers",
        "time": "Dec. 15, 2020",
        "iamge": "1-2021_Acura_RLX_v._2021_Honda_Accord-iPiccy-collage.jpg",
    },
    {
        "linkHeader": "2020 Acura MDX vs. 2021 Audi Q7: Head to Head",
        "text": "If you’re shopping for a luxury midsize SUV, there are plenty of appealing models on the market. However, if you’re...",
        "author": "Cherise Threewitt",
        "time": "Dec. 15, 2020",
        "iamge": "1_title_2021_audi_q7_top_2020_acura_mdx_bottom.jpg",
    },
    {
        "linkHeader": "2021 Honda HR-V vs. 2021 Mazda CX-3: Head to Head",
        "text": "The vast selection of small SUVs on the market today can be overwhelming when searching for the one that best suits...",
        "author": "Jaclyn Trop",
        "time": "Dec. 15, 2020",
        "iamge": "2021_Honda_HR-V_vs_2021_Mazda_CX-3.jpg",
    },
    {
        "linkHeader": "Coronavirus and Cars: What You Need to Know",
        "text": "As the coronavirus pandemic spirals out of control, it continues to create epic disruptions across the world’s economy... ",
        "author": "John M. Vincent",
        "time": "Dec. 15, 2020",
        "iamge": "title-image-coronavirus-ktsdesign_science-photo-library-getty-images-cropped.jpg",
    },
    {
        "linkHeader": "2021 Chevrolet Equinox vs. 2021 Chevrolet Traverse: Worth the Upgrade?",
        "text": "When you're shopping for a Chevrolet crossover SUV, the brand can give you a long list of choices. The two most popular...",
        "author": "Geagre Kenedy",
        "time": "Dec. 15, 2020",
        "iamge": "2021_Chevrolet_Equinox_vs_2021_Chevrolet_Traverse.jpg",
    },
    {
        "linkHeader": "The Best Car Insurance Companies in 2021",
        "text": "If you have to make a car insurance claim, it's usually a miserable experience. Your vehicle is likely damaged, or..",
        "author": "Jamie Page Deaton and Nate Parsons",
        "time": "Dec. 15, 2020",
        "iamge": "gettyimages-westend61.jpg",
    },
    {
        "linkHeader": "Luxury SUVs With the Most Cargo Space",
        "text": "Luxury vehicles cost a lot thanks to their premium design and materials, performance options, and tech and safety...",
        "author": "Cherise Threewitt",
        "time": "Dec. 15, 2020",
        "iamge": "2020_Lincoln_Navigator.jpg",
    },
    {
        "linkHeader": "2022 Acura MDX: What You Need to Know",
        "text": "Acura recently unveiled the fourth-generation of the MDX crossover. The fully redesigned model rides on a new, larger... ",
        "author": "John M. Vincent",
        "time": "Dec. 15, 2020",
        "iamge": "1_2022_acura_mdx.jpg",
    },
    {
        "linkHeader": "The 10 Best Muscle Cars for 2021",
        "text": "The iconic Ford Mustang, Dodge Challenger, and Chevrolet Camaro retain their place in the pantheon of muscle cars. The... ",
        "author": "Jaclyn Trop and Adrian Taylor",
        "time": "Dec. 15, 2020",
        "iamge": "1_2021_dodge_charger.jpg",
    },
    {
        "linkHeader": "2020 Audi Q5 vs. 2021 Lexus RX: Head to Head",
        "text": "When some people look for a luxury SUV, they first choose the size of SUV they want and then look at the different..",
        "author": "Brady Holt",
        "time": "Dec. 15, 2020",
        "iamge": "1-q5-_rx-iPiccy-collage.jpg",
    },
    {
        "linkHeader": "The 12 Best Luxury SUV Leases in December 2020",
        "text": "Just in time for the holidays, car manufacturers are offering attractive deals on luxury SUVs . If affordability has...",
        "author": "Geagre Kenedy",
        "time": "Dec. 15, 2020",
        "iamge": "1-use-Stelvio-AR020_041STdlh25bd7ikaq79giq14t1mckc5_Cropped.jpg",
    },
    {
        "linkHeader": "Best AWD Cars to Buy Before Winter in 2021",
        "text": "In most driving scenarios, and for most drivers, all-wheel drive really isn’t necessary. The sure-footedness of an...",
        "author": "Cherise Threewitt",
        "time": "Dec. 5, 2020",
        "iamge": "1-16457_2021_Telluride_Cropped.jpg",
    },
    {
        "linkHeader": "12 Best End-of-Year Car Lease Deals for 2020",
        "text": "December is an especially advantageous time to lease a new car. You can find attractive deals on 2020 models from... ",
        "author": "Jaclyn Trop",
        "time": "Dec. 15, 2020",
        "iamge": "1_2021_nissan_rogue.jpg",
    },
    {
        "linkHeader": "2021 Jeep Wrangler Rubicon: What Sets It Apart?",
        "text": "The Jeep Wrangler has long been known for its exceptional off-road prowess. With its durable steel frame, removable...",
        "author": "Geagre Kenedy",
        "time": "Dec. 15, 2020",
        "iamge": "1_2021_jeep_wrangler_rubicon.jpg",
    },
    {
        "linkHeader": "12 Best Car Deals This December 2020",
        "text": "There’s no rule that says you can’t give yourself a gift during the holidays. Automakers are making it easy this..",
        "author": "Geagre Kenedy",
        "time": "Dec. 15, 2020",
        "iamge": "USN.19ChevroletEquinox.JMV.0453.jpg",
    }
];

console.log(adviceJSON.length)

const linkImg = "../resources/img/advice-img/";


for (let i = 0; i < adviceJSON.length; i++) {
    let pageItem = document.createElement("div");
    pageItem.setAttribute("class", "advice-page-item");
    let itemContent = document.createElement("div");
    itemContent.setAttribute("class", "page-item-content");
    let itemHeader = document.createElement("a");
    itemHeader.setAttribute("class", "page-item-header");
    itemHeader.textContent = adviceJSON[i]["linkHeader"];
    itemContent.appendChild(itemHeader);
    let p = document.createElement("p");
    p.setAttribute("class", "d-none d-lg-block");
    p.textContent = adviceJSON[i]["text"];
    const readMore = document.createElement("a");
    readMore.setAttribute("class", "read-more-link");
    readMore.setAttribute("href", "#");
    readMore.textContent = "Read More »";
    p.appendChild(readMore);
    itemContent.appendChild(p);
    let auTi = document.createElement("div");
    auTi.setAttribute("class", "author-time");
    let a1 = document.createElement("a");
    a1.setAttribute("class", "page-item-author");
    a1.setAttribute("href", "#");
    a1.textContent = adviceJSON[i]["author"];
    auTi.appendChild(a1);
    let p1 = document.createElement("p");
    p1.textContent = adviceJSON[i]["time"];
    p1.setAttribute("class", "page-item-time");
    auTi.appendChild(p1);
    itemContent.appendChild(auTi);
    let img = document.createElement("img");
    img.setAttribute("src", linkImg + adviceJSON[i]["iamge"]);
    img.setAttribute("class", "page-item-img");
    pageItem.appendChild(itemContent);
    pageItem.appendChild(img);
    document.querySelector(".advice-page-list").appendChild(pageItem);
}

document.querySelector(".movePage").style.display = "flex";