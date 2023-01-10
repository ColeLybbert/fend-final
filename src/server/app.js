const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(express.static('demo'));

app.post('/apiData', (req, res) => {
    apiData = req.body;
    console.log(apiData);
});

module.exports = app;