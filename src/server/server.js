import fetch from 'node-fetch';

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

const weatherApiKey = process.env.WEATHER_API_KEY;
const baseURL = " http://api.weatherbit.io/v2.0/current"

export const weatherAPI = async () => {
    try{
        const res = await fetch(`${baseURL}?lat=35.7796&lon=-78.6382&key=${weatherApiKey}&include=minutely`);
        const data = await res.json();
        console.log(data);
        return (data);
    }catch (err) {
        return `Failed ${err}`
    }
}

