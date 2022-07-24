const {  Absence } = require("../models/absence.model");
const AXLSX = require("xlsx");
const students = [
    { name: "Raj", email: "raj@gmail.com", age: 23, gender: "M" },
    { name: "Rahul", email: "rahul@gmail.com", age: 15, gender: "M" }
]


module.exports = {
    AbsToxlsx: async (req, res) =>  {
        try{
            const rdv = await Absence.find().then((value) => {
                data = JSON.stringify(value);
                const convertJsonToExcel = () => {
                const workSheet = AXLSX.utils.json_to_sheet(JSON.parse(data));
                const workBook = AXLSX.utils.book_new();
            
                AXLSX.utils.book_append_sheet(workBook, workSheet, "absence")
                // Generate buffer
                AXLSX.write(workBook, { bookType: 'xlsx', type: "buffer" })
            
                // Binary string
                AXLSX.write(workBook, { bookType: "xlsx", type: "binary" })
            
                AXLSX.writeFile(workBook, "absenceData.xlsx")
            
            }
            convertJsonToExcel()
                });
                res.status(200).json("File created")
        }catch (error){
            res.status(500).json("Something went wrong")
        }
        

    },
}