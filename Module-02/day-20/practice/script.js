async function getUsdToEtbRate() {
    const res = await fetch('https://open.er-api.com/v6/latest/USD');

    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data.rates.ETB;
}

// Example usage:
getUsdToEtbRate()
    .then(rate => console.log(`1 USD = ${rate} ETB`))
    .catch(err => console.error(err));



async function fetchDataAndRender(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        const data = await res.json();
        render(data);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}

function render(data) {
    console.log('Rendered data:', data);
}


async function testErrorHandling() {
    // 1. Invalid domain: causes a Network Failure (Promise rejects -> goes directly to catch block)
    try {
        await fetch('https://this-domain-does-not-exist-12345.com');
    } catch (err) {
        console.log('1. Network failure caught:', err.message);
    }

    // 2. Real domain with invalid endpoint (Returns 404):
    // Fetch DOES NOT reject on 404. It resolves normally, so catch block won't run unless checked via res.ok.
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/non-existent-endpoint');
        console.log('2. Fetch completed. Status:', res.status); // 404
        console.log('   Is res.ok?', res.ok);                 // false

        if (!res.ok) {
            throw new Error(`HTTP Error ${res.status}: Endpoint not found`);
        }
    } catch (err) {
        console.log('   Manually thrown error caught:', err.message);
    }
}

testErrorHandling();


async function fetchFirstTwoDetails() {
    try {
        // 1. Fetch main list
        const listRes = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!listRes.ok) throw new Error('Failed to fetch posts list');
        const posts = await listRes.json();

        // 2. Fetch details for first 2 items in parallel
        const [res1, res2] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${posts[0].id}`),
            fetch(`https://jsonplaceholder.typicode.com/posts/${posts[1].id}`)
        ]);

        if (!res1.ok || !res2.ok) throw new Error('One of the detail requests failed');

        const [item1, item2] = await Promise.all([res1.json(), res2.json()]);

        console.log('Item 1:', item1);
        console.log('Item 2:', item2);
    } catch (err) {
        console.error('Error fetching details:', err.message);
    }
}

fetchFirstTwoDetails();