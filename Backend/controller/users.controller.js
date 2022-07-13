const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Joi = require("joi");
const { use } = require("bcrypt/promises");
const {sendConfirmationEmail} = require("../nodemailer");

module.exports = {
  //add
  createNewUser: async (req, res) => {
    //email unique
    User.find({ email: req.body.email })
      .exec()
      .then((users) => {
        if (users.length >= 1) {
          return res.status(409).json({
            message: "email already taken ",
          });
        } else {
          //hash the password
          bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (err) {
              return res.json({
                error: err,
              });
            } else {
              //validation with joi
              const schema = Joi.object({
                userName: Joi.string(),
                email: Joi.string().min(6).required().email(),
                password: Joi.string().min(6).required(),
                verifyPassword: Joi.string()
                  .min(6)
                  .required()
                  .equal(Joi.ref("password"))
                  .options({
                    messages: {
                      "any.only": " VerifyPassword and password does not match",
                    },
                  }),
                accountType: Joi.string(),
                questionSecurite: Joi.string(),
                reponseQuestionSecurite: Joi.string(),
                nom: Joi.string(),
                prenom: Joi.string(),
                dateDeNaissance: Joi.string(),
                adresse: Joi.string(),
                classe: Joi.string(),
                club: Joi.string(),
                specialite: Joi.string(),
              });
              const { error } = schema.validate(req.body);
              if (error) {
                return res.send(error.details[0].message);
              }
              //create a validation string
              const characters =
                "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
              let ActivationCode = "";
              for (let i = 0; i < 25; i++) {
                ActivationCode +=
                  characters[Math.floor(Math.random() * characters.length)];
              }

              //add user to DB
              const user = new User({
                userName: req.body.userName,
                email: req.body.email,
                password: hash,
                verifyPassword: hash,
                accountType: req.body.accountType,
                questionSecurite: req.body.questionSecurite,
                reponseQuestionSecurite: req.body.reponseQuestionSecurite,
                nom: req.body.nom,
                prenom: req.body.prenom,
                dateDeNaissance: req.body.questionSecurite,
                adresse: req.body.adresse,
                classe: req.body.classe,
                club: req.body.club,
                specialite: req.body.specialite,
                ActivationCode: ActivationCode,
              });
              user.save();
              res.json({ msg: "user created" });
              sendConfirmationEmail(user.email,user.ActivationCode);
            }
          });
        }
      });
     
  },

  

  //get all
  getAllusers: async (req, res) => {
    const users = await User.find();
    res.json(users);
  },

  //get by id
  getUserById: async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
  },

  //update
  updateUser: async (req, res) => {
    const user = await User.findById(req.params.id);
    console.log(req.body);
    user.userName = req.body.userName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.verifyPassword = req.body.verifyPassword;
    user.accountType = req.body.accountType;
    user.questionSecurite = req.body.questionSecurite;
    user.reponseQuestionSecurite = req.body.reponseQuestionSecurite;
    user.nom = req.body.nom;
    user.prenom = req.body.prenom;
    user.dateDeNaissance = req.body.dateDeNaissance;
    user.adresse = req.body.adresse;
    user.classe = req.body.classe;
    user.club = req.body.club;
    user.specialite = req.body.specialite;
    await user.save();
    res.json({ msg: "user updated" });
  },

  //delete user
  deleteUser: async (req, res) => {
    if (req.userData.accountType == "admin") {
      const user = await User.findById(req.params.id);
      await user.remove();
      res.json({ msg: "user deleted" });
      console.log(req.userData);
    } else {
      res.json({ msg: "Must be an Admin" });
    }
  },

  //log in :
  loginUser: async (req, res) => {
    User.find({ email: req.body.email })
      .exec()
      .then((users) => {
        //check if email exists
        if (users.length < 1) {
          return res.json({ msg: "email not found" });
        }
        //check hashed pwd
        bcrypt.compare(req.body.password, users[0].password, (err, isEqual) => {
          if (err) {
            return res.sendStatus(401);
          }
          //check if pwd is correct
          if (!isEqual) {
            res.json({ msg: "mot de passe incorrecte" });
          }

          //check isActive status
          if (isEqual && !users[0].isActive) {
            res.json({ msg: "verifier votre mail" });
          } else {
            //if email + pwd + isActive ok then login and give token
            if (isEqual) {
              const token = jwt.sign(
                {
                  email: users[0].email,
                  userId: users[0].id,
                  accountType: users[0].accountType,
                  nom: users[0].nom,
                  prenom: users[0].prenom,
                },
                process.env.ACCESS_TOKEN_SECRET,
                //token options
                {
                  expiresIn: "1h",
                }
              );
              return res.status(200).header("auth-token", token).json({
                message: "authorization successful",
                token: token,
              });
            }
          }
        });
      });
  },

  confirmationLink: async (req, res) => {
    const { link } = req.params;
    console.log(link);

    const user = User.find({userName : "third"})
    console.log(user.email)

   // const user = User.find({ActivationCode : {$all:[link]}},(error,data=>{
     // console.log(data)

    //}))
   // console.log(user.email);

  //  const user = User.findOne({ActivationCode : link})
  //  res.json(user)
   //const user = await User.findOne(link) 
   // res.json(user)
  //  const user = await User.findById(id);
  //  res.json(user);

  },



};
