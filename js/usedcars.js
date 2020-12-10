var makeJSON = {
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

var make = document.querySelector("#make1");
var model = document.querySelector("#model1");

window.onload = function () {
    for (let i in makeJSON) {
        make.options[make.options.length] = new Option(i, i);
    }
    make.onchange = function () {
        $("#model1").find('option').remove();
        for (let j in makeJSON[this.value]) {
            model.options[model.options.length] = new Option(makeJSON[this.value][j], makeJSON[this.value][j]);
        }
    }
}