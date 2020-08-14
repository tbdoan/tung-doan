const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(express.json());

//Import Routes
const postRoutes = require('./routes/posts');
app.use('/post', postRoutes);

//ROUTES
app.get('/', async (req, res) => {
    try {
        res.send("we're home");
    } catch (err) {
        res.status(500).send('sorry, out of order');
    }
})
//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true  },
    () => {
        console.log('connected to DB')
    })

//starts listening
app.listen(3000);