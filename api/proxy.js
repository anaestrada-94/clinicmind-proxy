export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { endpoint } = req.query;
    const AUTH_TOKEN = 'Eiw9Aingi9OhReeMuenge1ooNgaiyei0geicoh1tooZ4Eiwoo0ahhie5co4veoHi';
    const BASE_URL = 'https://api.vericle.com';

    const url = `${BASE_URL}${endpoint}?authToken=${AUTH_TOKEN}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
