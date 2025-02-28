const xlsx = require('xlsx');
const excelJS = require("exceljs");
const fileName = 'MEANTest_SourceExcel.xlsx';


// Read the excel file and return the data in the form of an array.
function readExcelFile() {
    const excelData = xlsx.readFile(fileName);
    const dataArray = [];
    excelData.SheetNames.forEach(sheet => {
        dataArray.push(...xlsx.utils.sheet_to_json(excelData.Sheets[sheet]));
    });
    return dataArray;
}

module.exports = {
    readExcelFile
};
