const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
const port = 8000;
const server = app.listen(port, listening);
app.use(express.static('demo'));

function listening() {
    console.log(`running on localhost:${port}`);
}