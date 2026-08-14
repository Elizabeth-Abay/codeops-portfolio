const out = document.querySelector("#facts");
let countrySelectorForm = document.getElementById('country-needed');

countrySelectorForm.addEventListener('submit', async () => {
    let formData = new formdata(countrySelectorForm)

    let name = formData.get('country')

    await showCountry(name)

})


async function showCountry(name) {
    out.textContent = "Loading...";
    try {
        const res = await fetch(`https://api.restcountries.com/countries/v5/names.common/Canada?pretty=1` , 
            {
                headers : {
                    'Authorization': 'Bearer rc_live_532319da0e30456397639634667d30dd'
                }
            }
        );
        if (!res.ok) throw new Error("Country not found");
        const [c] = await res.json();
        out.innerHTML = "";
        render(out, "Capital", c.capital[0]); // "Addis Ababa"
        render(out, "Population", c.population.toLocaleString());
        render(out, "Region", c.region);
    } catch (err) {
        out.textContent = err.message; // friendly error
    }
}
showCountry("ethiopia"); // default on load