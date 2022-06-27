const mongoose = require("mongoose");

const userSchema= mongoose.Schema(
    {
        userName : String,  //all users
        email : String,     //all users
        password : String,  //all users
        verifyPassword : String,       //all users
        accountType : String,       //all users
        questionSecurite : String,      //all users
        reponseQuestionSecurite : String,      //all users
        nom : String,       //all users
        prenom : String,        //all users
        dateDeNaissance : String,     //all users
        adresse : String,      //all users
        classe : String,        //eleve+professeur
        club : String,          //all users
        specialite : String,    //professeur
        validationAdmin : String,       //all users

    }
);

const User = mongoose.model('User', userSchema);

module.exports = { User }