exports.handler = async function(event, context) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    const AUTH_TOKEN = 'Eiw9Aingi9OhReeMuenge1ooNgaiyei0geicoh1tooZ4Eiwoo0ahhie5co4veoHi';
    const BASE_URL = 'https://preview-nightly.vericle-test.com';

    const params = new URLSearchParams(event.queryStringParameters);
    const endpoint = params.get('endpoint');
    const url = `${BASE_URL}${endpoint}?authToken=${AUTH_TOKEN}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: event.body,
        });

        const data = await response.json();
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(data),
        };
    } catch (err) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: err.message }),
        };
    }
};
