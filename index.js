const express = require('express');
const app = express();
const readExcelFile = require('./excel-reader').readExcelFile;
const getImages = require('./excel-reader').getImages;
const port = 8081;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    const excelData = readExcelFile();
    res.json(excelData).status(200);
});

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})