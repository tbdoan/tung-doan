const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

app.get('/', async (req, res) => {
    try {
        res.send( await readFile('./home.html', 'utf-8') );
    } catch (err) {
        res.status(500).send('sorry, out of order');
    }
})

app.listen(process.env.PORT || 3000, () => console.log('Ready at http://localhost:3000'));