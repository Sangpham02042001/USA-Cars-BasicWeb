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

$(window).on("load", function () {
    $("body").addClass("stop-scrolling");
    $("#preLoader").delay(800).fadeOut(500);
});

function enableScroll() {
    // document.querySelector("body").style.overflowY = "auto";
    $("body").removeClass("stop-scrolling");
    $("body").addClass("enable-scrolling");
}

setTimeout(enableScroll, 1000);