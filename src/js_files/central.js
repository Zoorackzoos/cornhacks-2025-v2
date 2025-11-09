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
export function centralAmCalculateBananas(tabAmount="\n")
{
    console.log(tabAmount+"centralAmCalculateBananas");

    const countryInQuestion = document.getElementById("SoAm-banana-v-gdp-calculator-country-selection").value;
    const yearInQuestion = document.getElementById("CeAm-banana-v-gdp-calculator-year-input").value;

    console.log(tabAmount+"countryInQuestion = "+countryInQuestion);
    console.log(tabAmount+"yearInQuestion = "+yearInQuestion);
}


