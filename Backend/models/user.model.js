const mongoose = require("mongoose");

const userSchema= mongoose.Schema(
    {
        userName : String,  
        email : String,     
        password : String,  
        verifyPassword : String,       
        accountType : String,       
        questionSecurite : String,      
        reponseQuestionSecurite : String,   
        nom : String,       
        prenom : String,       
        dateDeNaissance : String,     
        adresse : String,      
        classe : String,        
        club : String,         
        specialite : String,   
        validationAdmin : String,
        isActive :{         //sexe
            type : String
        },
        ActivationCode: String      

    },{timestamps : true}
);

const User = mongoose.model('User', userSchema);

module.exports = { User }