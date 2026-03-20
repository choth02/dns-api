'use strict';

const express = require('express');
const dns = require('dns');
const app = express();

app.use(express.json());

// Endpoint to resolve DNS
app.post('/resolve', (req, res) => {
    const { domain } = req.body;
    dns.lookup(domain, (err, address) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to resolve domain' });
        }
        res.json({ domain, address });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`DNS API listening on port ${PORT}`);
});
