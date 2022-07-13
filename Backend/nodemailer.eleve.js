const nodemailer = require ("nodemailer")

const transport = nodemailer.createTransport({
    service: "Gmail",
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth : {
        user : "pidevesprit.gestionecole@gmail.com",
        pass : "yrqogydieoemaqsh"

    },
});

module.exports.sendEmailToEleve = (email,Neleve,Peleve,EMeleve,Anniveleve)=>{
    transport
    .sendMail({
        from : "pidevesprit.gestionecole@gmail.com",
        to : email,
        subject:"Confirmation d'inscription",
        html : `<h1> Félicitation! Votre candidature a été validée <h1/>
        <h2> Bonjour ${Peleve} ${Neleve} <h2/>
        <p> votre demande d'adhesion à notre école a été acceptée veuillez conserver l'email de votre enfant ${EMeleve}
        <br>
        votre mot de passe est votre date d'anniversaire ${Anniveleve}.
        <br\> 
        <p\>
         `    
    }).catch((err)=>{
        console.log(err)
    })

}