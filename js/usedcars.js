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
];

const usedBody = [
    {
        "text": "Converible",
        "span": "(10676)"
    },
    {
        "text": "Coupe",
        "span": "(32364)"
    },
    {
        "text": "Hathcback",
        "span": "(423432)"
    },
    {
        "text": "Minivan",
        "span": "(3942)"
    },
    {
        "text": "Pickup",
        "span": "(31234)"
    },
    {
        "text": "Sedan",
        "span": "(28232)"
    },
    {
        "text": "SUV",
        "span": "(3234)"
    },
    {
        "text": "Van",
        "span": "(6315)"
    },
    {
        "text": "Wagon",
        "span": "(116047)"
    },
    {
        "text": "Other",
        "span": "(668)"
    },
];

const driveTrain = [
    {
        "text": "AWD/4WD",
        "span": "(402590)"
    },
    {
        "text": "FWD",
        "span": "(42342)"
    },
    {
        "text": "RWD",
        "span": "(3423)"
    },
    {
        "text": "Other",
        "span": "(6113)"
    }
];

const usedEngine = [
    {
        "text": "Electric",
        "span": "(45523)"
    },
    {
        "text": "Hybrid",
        "span": "(12975)"
    },
    {
        "text": "Rotary",
        "span": "(423423)"
    },
    {
        "text": "12 Cyl",
        "span": "(3242)"
    },
    {
        "text": "8 Cyl",
        "span": "(423421)"
    },
    {
        "text": "6 Cyl",
        "span": "(429043)"
    },
    {
        "text": "5 Cyl",
        "span": "(5544)"
    },
    {
        "text": "4 Cyl",
        "span": "(4332)"
    },
    {
        "text": "3 Cyl",
        "span": "(668)"
    },
    {
        "text": "Other",
        "span": "(423432)"
    },
]

const transMission = [
    {
        "text": "Automatic",
        "span": "(31238)"
    },
    {
        "text": "Manual",
        "span": "(27943)"
    },
    {
        "text": "Other",
        "span": "(21)"
    },
];

const usedVehicle = [
    {
        "text": "Single Owner Cars",
        "span": "(446453)"
    },
];

const preOwnder = [
    {
        "text": "CPO",
        "span": "(312231)"
    },
]

const fuelType = [
    {
        "text": "Gasoline",
        "span": "(3118)"
    },
    {
        "text": "Hybrid",
        "span": "(661312)"
    },
    {
        "text": "Diesel",
        "span": "(66311)"
    },
    {
        "text": "Electric",
        "span": "(4588)"
    },
    {
        "text": "Alternative",
        "span": "(13)"
    },
    {
        "text": "Other",
        "span": "(4234)"
    }
];

const buyHome = [
    {
        "text": "Buy From Home",
        "span": "(311784)"
    },
]

const linkImg = "url(../resources/img/used-cars-img/";

const usedFontArr = ["fas fa-tachometer-alt", "fas fa-poll-h", "fas fa-home"];

const usedMainContent = [
    {
        img: "5CBDFBTDIVE3XJSX3XXONI6X6E-cr-540.jpg",
        classify: "New Listing",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$11.889",
        position: "Orlando, FL",
        morePrice: "241/month est.*",
        rating: "Excellent Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 3.554", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "FR32DVD3AQAOHCLMVAIRZ6UIWM-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$13.995",
        position: "El Pasco, TX",
        morePrice: "284/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 455",],
    },
    {
        img: "GO4U2FUUKGRNBZMCIQBBNA6QCA-cr-1400.jpg",
        classify: "Price Reduced",
        photos: "24 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$14.000",
        position: "Grapevine, TX",
        morePrice: "284/month est.*",
        rating: "High Price",
        list: ["Mileage: 550", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "4ZWY2QXQA6QC66XUYCVRG2PEWQ-600.jpg",
        classify: "Price Reduced",
        photos: "27 photos",
        nameCar: "2021 Huyndai Accent SE",
        priceCar: "$15.325",
        position: "Temple Hills, MD",
        morePrice: "311/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 1.298",],
    },
    {
        img: "ZIABN42BQNSAKV4C35JPWUGXUQ-cr-1400.jpg",
        classify: "Price Reduced",
        photos: "27 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$15.996",
        position: "Matteson, IL",
        morePrice: "325/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 1.895", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "RIZCWMKMLURLLV2NVTTEBAYDNM-cr-540.jpg",
        classify: "New Listing",
        photos: "6 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$15.998",
        position: "Springfield, GA",
        morePrice: "325/month est.*",
        rating: "High Price",
        list: ["Mileage: 4.623",],
    },
    {
        img: "5M2OEUW5ATYLHJVOI7X37BC27A-600.jpg",
        classify: "Price Reduced",
        photos: "17 photos",
        nameCar: "2021 Kia Forte LXS",
        priceCar: "$16.300",
        position: "Kenner, LA",
        morePrice: "331/month est.*",
        rating: "Excellent Deal",
        list: ["Mileage: 430", "Free CARFAX Report: 1-Owner"],
    },
    {
        img: "J3RDNO4XHCWG3PHO2CWLMXBLLY-600.jpg",
        classify: "Price Reduced",
        photos: "40 photos",
        nameCar: "2021 Kia Soul LX",
        priceCar: "$16.300",
        position: "Rainbow City, AL",
        morePrice: "331/month est.*",
        rating: "Excellent Deal",
        list: ["Mileage: 6.278"],
    },
    {
        img: "FI36PNT4N7ITJQK22VHTK3CJU4-600.jpg",
        classify: "Price Reduced",
        photos: "3 photos",
        nameCar: "2021 Kia Soul S",
        priceCar: "$16.498",
        position: "Kennesaw, GA",
        morePrice: "335/month est.*",
        rating: "Excellent Deal",
        list: ["Mileage: 5.239", "Free CARFAX Report: 1-Owner"],
    },
    {
        img: "JUMBRGN55UHXNCEJS622WTX7KM-600.jpg",
        classify: "Price Reduced",
        photos: "5 photos",
        nameCar: "2021 Toyota Corolla LE",
        priceCar: "$16.499",
        position: "Orlando, FL",
        morePrice: "335/month est.*",
        rating: "Great Deal",
        list: ["Mileage: 4.397", "Free CARFAX Report: 1-Owner"],
    },
    {
        img: "GWQUYTD46S6V4R7V3F4DYXNIXE-cr-860.jpg",
        classify: "Price Reduced",
        photos: "1 photos",
        nameCar: "2021 Toyota Corolla LE",
        priceCar: "$16.500",
        position: "Boerne, TX",
        morePrice: "335/month est.*",
        rating: "Excellent Deal",
        list: ["Mileage: 17.713", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "TUCTNRVBZRFERRNCTXN7U7FJ4I-600.jpg",
        classify: "Price Reduced",
        photos: "16 photos",
        nameCar: "2021 Kia Soul LX",
        priceCar: "$16.941",
        position: "New Port Richey, Fl",
        morePrice: "344/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 475", "Free CARFAX Report: 1-Owner"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "WD3BN72MQWTS6LALPBISDZS2YI-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "New Listing",
        photos: "42 photos",
        nameCar: "2021 Kia Forte LXS",
        priceCar: "$16.998",
        position: "Selma, NC",
        morePrice: "345/month est.*",
        rating: "Great Deal",
        list: ["Mileage: 3.914", "Free CARFAX Report: 1-Owner",],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
    },
    {
        img: "CWX44C642JJNBSOSQRIPKCLM2Q-cr-540.jpg",
        classify: "Price Reduced",
        photos: "20 photos",
        nameCar: "2021 Chevrolet Spark LS",
        priceCar: "$12.596",
        position: "Wendell, NC",
        morePrice: "256/month est.*",
        rating: "Good Deal",
        list: ["Mileage: 760", "Free CARFAX Report: 1-Owner", "Buy From Home"],
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
pushLabel(document.querySelector(".body-style-list"), usedBody);
pushLabel(document.querySelector(".drive-train-list"), driveTrain);
pushLabel(document.querySelector(".engine-list"), usedEngine);
pushLabel(document.querySelector(".transmission-list"), transMission);
pushLabel(document.querySelector(".vehicle-history-list"), usedVehicle);
pushLabel(document.querySelector(".certified-list"), preOwnder);
pushLabel(document.querySelector(".fuel-type-list"), fuelType);
pushLabel(document.querySelector(".buy-home-list"), buyHome);

for (let i = 0; i < usedMainContent.length; i++) {
    let a = document.createElement("a");
    a.setAttribute("href", "#");
    a.setAttribute("class", "used-main-content-item");

    let headerDiv = document.createElement("div");
    headerDiv.setAttribute("class", "used-item-header");
    headerDiv.style.backgroundImage = linkImg + usedMainContent[i]["img"] + ")";
    let headerClassify = document.createElement("div");
    headerClassify.setAttribute("class", 'header-classify');
    let text1 = document.createTextNode(usedMainContent[i]["classify"]);
    headerClassify.appendChild(text1);
    headerDiv.appendChild(headerClassify);
    let headerPhoto = document.createElement("div");
    headerPhoto.setAttribute('class', "header-photos");
    let fontImg = document.createElement("i");
    fontImg.setAttribute("class", "far fa-image");
    headerPhoto.appendChild(fontImg);
    let text2 = document.createTextNode(usedMainContent[i]["photos"]);
    headerPhoto.appendChild(text2);
    headerDiv.appendChild(headerPhoto);
    a.appendChild(headerDiv);

    let itemContent = document.createElement("div");
    itemContent.setAttribute("class", "used-item-content");
    let itemHeader = document.createElement("div");
    itemHeader.setAttribute("class", "used-item-content-header");
    let namecar = document.createElement("h1");
    namecar.setAttribute("class", "header-name-car");
    namecar.textContent = usedMainContent[i]["nameCar"];
    let pricecar = document.createElement("h1");
    pricecar.setAttribute("class", "header-price-car");
    pricecar.textContent = usedMainContent[i]["priceCar"];
    itemHeader.appendChild(namecar);
    itemHeader.appendChild(pricecar);
    itemContent.appendChild(itemHeader);

    let itemMore = document.createElement("div");
    itemMore.setAttribute("class", "used-item-content-more");
    let p1 = document.createElement("p");
    p1.textContent = usedMainContent[i]["position"];
    p1.setAttribute("class", "used-more-pos");
    itemMore.appendChild(p1);
    let p2 = document.createElement("p");
    p2.textContent = usedMainContent[i]["morePrice"];
    p2.setAttribute("class", "used-more-price");
    itemMore.appendChild(p2);
    itemContent.appendChild(itemMore);

    let itemList = document.createElement("div");
    itemList.setAttribute("class", "used-item-content-list");
    for (let j = 0; j < usedMainContent[i]["list"].length; j++) {
        let item = document.createElement("div");
        item.setAttribute("class", "used-content-list-item");
        let text2 = document.createTextNode(usedMainContent[i]["list"][j]);
        let icon = document.createElement("i");
        icon.setAttribute("class", usedFontArr[j]);
        item.appendChild(icon);
        item.appendChild(text2);

        itemList.appendChild(item);
    }
    itemContent.appendChild(itemList);

    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-danger text-white");
    button.textContent = "Check Availability";
    itemContent.appendChild(button);

    a.appendChild(itemContent);
    document.querySelector(".used-main-content").appendChild(a);
}

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 600) {
        // $("#backToTop").css("display", "block");
        $("#backToTop").fadeIn(1000);
    } else {
        // $("#backToTop").hide(1000);
        // $("#backToTop").css("display", "none");
        $("#backToTop").fadeOut(1000);
    }
})

