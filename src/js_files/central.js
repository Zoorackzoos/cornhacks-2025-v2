/*
fun facts
 */
/*
const facts = {
    "Belize": "Belize is the only Central American country where English is the official language!",
    "Costa Rica": "Costa Rica has no standing army since 1949.",
    "El Salvador": "El Salvador is known as the 'Land of Volcanoes'.",
    "Guatemala": "Guatemala is home to ancient Maya ruins like Tikal.",
    "Honduras": "Honduras hosts the second-largest coral reef in the world.",
    "Nicaragua": "Nicaragua has both freshwater and saltwater sharks!",
    "Panama": "Panama’s canal connects the Atlantic and Pacific oceans."
};

document.getElementById("central-country").addEventListener("change", (e) => {
    const factBox = document.getElementById("fact-output");
    factBox.textContent = facts[e.target.value] || "";
});
 */

/*
gdp vr.s bananas
 */

import {calculateBananas} from "./calculateBananas.js";
import {belizeGDP, costaRicaGDP, guatemalaGDP, hondurasGDP, nicaraguaGDP, panamaGDP} from "./central_vars.js";

function CeAmfindGDPinQuestion(countryInQuestion, tabAmount = "\t")
{
    console.log(tabAmount+"CeAmfindGDPinQuestion")
    if (countryInQuestion === "Panama")
    {
        return panamaGDP;
    }
    else if (countryInQuestion === "Costa Rica")
    {
        return costaRicaGDP;
    }
    else if (countryInQuestion === "Guatemala")
    {
        return guatemalaGDP;
    }
    else if (countryInQuestion === "Honduras")
    {
        return hondurasGDP;
    }
    else if (countryInQuestion === "Belize")
    {
        return belizeGDP;
    }
    else if (countryInQuestion === "Nicaragua")
    {
        return nicaraguaGDP;
    }
    else
    {
        alert("ERROR: CeAmfindGDPinQuestion: countryInQuestion is not a string in the algo. please break your computer.")
    }
}

function centralAmCalculateBananas(tabAmount = "\t")
{
    console.log(tabAmount + "centralAmCalculateBananas");

    const countryInQuestion = document.getElementById("CeAm-banana-v-gdp-calculator-country-selection").value;
    const yearInQuestion = document.getElementById("CeAm-banana-v-gdp-calculator-year-input").value;

    console.log(tabAmount + "\tcountryInQuestion = " + countryInQuestion);
    console.log(tabAmount + "\tyearInQuestion = " + yearInQuestion);

    const GDPinQuestion = CeAmfindGDPinQuestion(countryInQuestion);

    document.getElementById("CeAm-banana-v-gdp-calculator-output-label").innerText = calculateBananas(countryInQuestion, yearInQuestion, GDPinQuestion, tabAmount + "\t");
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("CeAm-banana-v-gdp-calculator-calculate-button");
    if (btn) {
        btn.addEventListener("click", centralAmCalculateBananas);
    } else {
        console.error("❌ Could not find calculate button by ID.");
    }
});


