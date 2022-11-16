//Making Server
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

//Data that gets fetched from weather app
let projectData = {temp:'',date:'', userResponse:''};

//GET request comes in, this gets it
app.get('/weather', (req, res) => {
    console.log('get request for data came in!Send the tracked object');
    res.send(projectData);
})
//POST request comes in, this handles it
app.post('/weather', (req, res) => {
    projectData = req.body;
    console.log(projectData);
})
