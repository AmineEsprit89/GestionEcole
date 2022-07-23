const nodemailer = require ("nodemailer")

const transport = nodemailer.createTransport({
    service: "Gmail",
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth : {
        user : "ecole.edtech@gmail.com",
        pass : "jrbvacwopqblwyok"

    },
});

module.exports.sendConfirmationEmail = (email,nom,prenom,password,tilte)=>{
    transport
    .sendMail({
        from : "ecole.edtech@gmail.com",
        to : email,
        subject:"Confirmation d'inscription",
        html : `<h1> Félicitation! Vous faite partie de notre ecole <h1/>
        <h2> Bonjour ${nom} ${prenom} <h2/>
        <p> Vous etes officiellement inscrit à EdTech en tant que ${tilte} 
        <br>
        votre mot de passe est : ${password},veuillez bien le conserver. 
        <br\> 
        <p\>
         `      
    }).catch((err)=>{
        console.log(err)
    })

}