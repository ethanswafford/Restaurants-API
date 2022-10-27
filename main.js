const options = {
    method: 'GET',
    headers: {
        'X-Cassandra-Token': 'AstraCS:UuMlsfCjmXxEghjYZcYrfoKb:6f8993367de1b7583f47f2596bdfb974ed3d37b58396fdf8f0349032c354e901'
    }
};

fetch('https://0a29af8e-d15d-489b-bb20-db9c5cdfa281-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/Reviews/collections/michelin', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


try {
    const response = await fetch("https://0a29af8e-d15d-489b-bb20-db9c5cdfa281-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/Reviews/collections/michelin/daacc673-9579-4386-8398-a63e7d4ad11a", {
        method: 'GET',
        headers: {
            'X-Cassandra-Token': 'AstraCS:UuMlsfCjmXxEghjYZcYrfoKb:6f8993367de1b7583f47f2596bdfb974ed3d37b58396fdf8f0349032c354e901',
            Accept: ''
        }
    });

    if (response.ok) {
        const result = await response.json();
        console.log(result);
    }
} catch (err) {
    console.error(err);
}







console.log('https://restcountries.com/v3.1/all');