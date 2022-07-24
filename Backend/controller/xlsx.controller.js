const {  Rdv } = require("../models/rdv.model");
const XLSX = require("xlsx");
const students = [
    { name: "Raj", email: "raj@gmail.com", age: 23, gender: "M" },
    { name: "Rahul", email: "rahul@gmail.com", age: 15, gender: "M" }
]


module.exports = {
    RdvToxlsx: async (req, res) =>  {
        try{
            const rdv = await Rdv.find().then((value) => {
                data = JSON.stringify(value);
                const convertJsonToExcel = () => {
                const workSheet = XLSX.utils.json_to_sheet(JSON.parse(data));
                const workBook = XLSX.utils.book_new();
            
                XLSX.utils.book_append_sheet(workBook, workSheet, "rdv")
                // Generate buffer
                XLSX.write(workBook, { bookType: 'xlsx', type: "buffer" })
            
                // Binary string
                XLSX.write(workBook, { bookType: "xlsx", type: "binary" })
            
                XLSX.writeFile(workBook, "rdvData.xlsx")
            
            }
            convertJsonToExcel()
                });
                res.status(200).json("File created")
        }catch (error){
            res.status(500).json("Something went wrong")
        }
        

    },
}