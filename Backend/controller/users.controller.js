const { User } = require("../models/user.model");

module.exports = {

    createNewUser: async (req, res) => {        //works!!
        const user = new User({
            userName : req.body.userName,
            email : req.body.email,
            password : req.body.password,
            verifyPassword : req.body.verifyPassword,
            accountType : req.body.accountType,
            questionSecurite : req.body.questionSecurite,
            reponseQuestionSecurite : req.body.reponseQuestionSecurite,
            nom : req.body.nom,
            prenom : req.body.prenom,
            dateDeNaissance : req.body.questionSecurite,
            adresse : req.body.adresse,
            classe : req.body.classe,
            club : req.body.club,
            specialite : req.body.specialite,
            validationAdmin : req.body.validationAdmin
        })
        await user.save();
        res.json(user);
    },  
    
    getAllusers: async (req, res) => {   //works!!
        console.log("hello");
        const users = await User.find();
        res.json(users)
       // res.render('list', { users })
    },

    getUserById: async (req, res) => {          //works!!
        const { id } = req.params;
        const user = await User.findById(id);
        res.json(user);
    
    },
    
    updateUser : async (req, res) => {          //works!!
        const user = await User.findById(req.params.id);
        console.log(req.body)
        user.userName = req.body.userName;
        user.email = req.body.email;
        user.password = req.body.password;
        user.verifyPassword = req.body.verifyPassword;
        user.accountType = req.body.accountType;
        user.questionSecurite = req.body.questionSecurite;
        user.reponseQuestionSecurite  = req.body.reponseQuestionSecurite ;
        user.nom = req.body.nom;
        user.prenom = req.body.prenom;
        user.dateDeNaissance = req.body.dateDeNaissance;
        user.adresse = req.body.adresse;
        user.classe = req.body.classe;
        user.club = req.body.club;
        user.specialite = req.body.specialite;
        user.validationAdmin = req.body.validationAdmin;
        await user.save();
        res.json(user);
    },

    deleteUser: async (req,res)=>{          //works!!
        const user = await User.findById(req.params.id);
        //const { id } = req.params;
        await user.remove(/*{ _id: id }*/);
        //res.json(user);
    }
}