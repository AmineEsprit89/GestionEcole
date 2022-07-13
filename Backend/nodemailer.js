const nodemailer = require ("nodemailer")

const transport = nodemailer.createTransport({
    service: "Gmail",
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth : {
        user : "pidevesprit.gestionecole@gmail.com",
        pass : "yrqogydieoemaqsh"

    },
});

module.exports.sendConfirmationEmail = (email,activationCode)=>{
    transport
    .sendMail({
        from : "pidevesprit.gestionecole@gmail.com",
        to : email,
        subject:"confirmer votre compte",
        html : `<h1> Email de confirmation <h1/>
        <h2> Bonjour <h2/>
        <p> Pour activer votre compte , veuillez cliquer sur ce lien <p/>
        <a href=http://localhost:3000/users/confirmation/${activationCode}>Cliquer Ici ! <a/> `    //port front ??
    }).catch((err)=>{
        console.log(err)
    })

}