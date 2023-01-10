const app = require('./app');

const port = 8000;
const server = app.listen(port, listening);

function listening() {
    console.log(`running on localhost:${port}`);
};