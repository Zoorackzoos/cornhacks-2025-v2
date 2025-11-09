//calculateBananas.js
import {bananaPriceUSDperKg} from "./banana_var.js";

export function calculateBananas(country, year, countryGDDictionary, tabAmount="\t") {
    console.log(tabAmount+"calculateBananas");
    const gdpBillions = countryGDDictionary[year]; // GDP in billions USD
    const pricePerKg = bananaPriceUSDperKg[year]; // USD/kg
    const gdpDollars = gdpBillions * 1_000_000_000;
    console.log(tabAmount+"\tgdpDollars = "+gdpDollars);
    const bananasKg = gdpDollars / pricePerKg;
    console.log(tabAmount+"\tbananasKg = "+bananasKg);
    console.log(tabAmount+`\tIn ${year}, Panama could buy about ${bananasKg.toLocaleString()} kg of bananas.`);
    return bananasKg;
}
