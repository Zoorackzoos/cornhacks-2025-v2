
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
export function southAmCalculateBananas(tabAmount="\t")
{
    console.log(tabAmount+"centralAmCalculateBananas");

    const countryInQuestion = document.getElementById("SoAm-banana-v-gdp-calculator-country-selection").value;
    const yearInQuestion = document.getElementById("SoAm-banana-v-gdp-calculator-year-input").value;

    console.log(tabAmount+"countryInQuestion = "+countryInQuestion);
    console.log(tabAmount+"yearInQuestion = "+yearInQuestion);
}