const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.status(200).json({
        error: false,
        data: {
            message: 'Hey ebay, it works!'
        }
    });
});

app.listen(port);

console.log('server works!', port);