
/*
fun facts functions
 */
/*
const facts = {
    "Argentina": "Argentina is the birthplace of tango dancing.",
    "Brazil": "Brazil is home to the Amazon Rainforest, the largest in the world.",
    "Chile": "Chile has one of the driest deserts on Earth: the Atacama Desert.",
    "Colombia": "Colombia is the world's largest producer of emeralds.",
    "Ecuador": "Ecuador is named after the equator that runs through it.",
    "Peru": "Peru was home to the Inca Empire and Machu Picchu.",
    "Venezuela": "Venezuela has Angel Falls, the world’s tallest waterfall."
};

document.getElementById("south-country").addEventListener("change", (e) => {
    const factBox = document.getElementById("fact-output");
    factBox.textContent = facts[e.target.value] || "";
});
 */

/*
banana calculations
 */
import {calculateBananas} from "./calculateBananas.js";
import {argentinaGDP, brazilGDP, chileGDP, columbiaGDP, peruGDP} from "./south_vars.js";

function SoAmfindGDPinQuestion(countryInQuestion, tabAmount = "\t")
{
    console.log(tabAmount+"CeAmfindGDPinQuestion")
    if (countryInQuestion === "Brazil")
    {
        return brazilGDP;
    }
    else if (countryInQuestion === "Argentina")
    {
        return argentinaGDP;
    }
    else if (countryInQuestion === "Peru")
    {
        return peruGDP;
    }
    else if (countryInQuestion === "Chile")
    {
        return chileGDP;
    }
    else if (countryInQuestion === "Columbia")
    {
        return columbiaGDP;
    }
    else
    {
        alert("ERROR: SoAmfindGDPinQuestion: countryInQuestion is not a string in the algo. please break your computer.")
    }
}

function southAmCalculateBananas(tabAmount="\t")
{
    console.log(tabAmount+"centralAmCalculateBananas");

    const countryInQuestion = document.getElementById("SoAm-banana-v-gdp-calculator-country-selection").value;
    const yearInQuestion = document.getElementById("SoAm-banana-v-gdp-calculator-year-input").value;

    console.log(tabAmount+"countryInQuestion = "+countryInQuestion);
    console.log(tabAmount+"yearInQuestion = "+yearInQuestion);

    const GDPinQuestion = SoAmfindGDPinQuestion(countryInQuestion);

    document.getElementById("SoAm-banana-v-gdp-calculator-output-label").innerText = calculateBananas(countryInQuestion, yearInQuestion, GDPinQuestion, tabAmount + "\t");
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("SoAm-banana-v-gdp-calculator-calculate-button");
    if (btn) {
        btn.addEventListener("click", southAmCalculateBananas);
    } else {
        console.error("❌ Could not find calculate button by ID.");
    }
});