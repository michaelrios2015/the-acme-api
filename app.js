const express = require('express');
const app = express();

module.exports = app;

app.get('/', (req, res)=> {
    res.send(`
        <html>
            <body>
                The Acme API test
            </body>
        </html>
    `)
});