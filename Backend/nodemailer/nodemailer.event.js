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

module.exports.sendEventEmail = (email,Name,Type,Price,Date_event,Heure_debut,Date_fin_event,Lieu,Nbr_place)=>{
    transport
    .sendMail({
        from : "pidevesprit.gestionecole@gmail.com",
        to : email,
        subject:"Evenement du mois ",
        html : `<h1> Email de confirmation <h1/>
        <h2> Bonjour <h2/>
        <p> Nous avons un event ${Name} <p/>
        <p> Nous avons un event ${Type} <p/>
        <p> Nous avons un event ${Price} <p/>
        <p> Nous avons un event ${Date_event} <p/>
        <p> Nous avons un event ${Heure_debut} <p/>
        <p> Nous avons un event ${Date_fin_event} <p/>
        <p> Nous avons un event ${Lieu} <p/>
        <p> Nous avons un event ${Nbr_place} <p/>
         `    
    }).catch((err)=>{
        console.log(err)
    })
  
}