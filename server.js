const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaControllers = require('./controllers/mahasiswaControllers');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint untuk mahasiswa
app.use('/mahasiswa', mahasiswaControllers);

// menjalankan server
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});