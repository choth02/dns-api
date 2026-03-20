const express = require('express');
const dns = require('dns');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/resolve', (req, res) => {
    const { domain } = req.query;
    if (!domain) {
        return res.status(400).json({ error: 'Domain query parameter is required.' });
    }
    dns.resolve(domain, (err, addresses) => {
        if (err) {
            return res.status(500).json({ error: 'Could not resolve domain.' });
        }
        res.json({ domain, addresses });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
