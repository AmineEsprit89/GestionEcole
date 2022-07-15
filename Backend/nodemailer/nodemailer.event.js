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

module.exports.sendEventEmail = (email,Name,Type,Price,Date_event,Heure_debut,Date_fin_event,Lieu,Nbr_place,Nom_Club)=>{
    transport
    .sendMail({
        from : "pidevesprit.gestionecole@gmail.com",
        to : email,
        subject:"Evenement du mois ",
        html : `<h1> Organisation d'un nouveau évenement <h1/>
        <h2> Bonjour Mes chers élèves<h2/>
        <p> Nous voulons vous informer  l'organisation d'un nouveau évenement sous le nom de ${Name} <p/>
        <p> dans le cadre ${Type} le ${Date_event} à partir du ${Heure_debut} heure <p/>
        <p> et se termine le ${Date_fin_event} à ${Lieu}  réalisé par le club ${Nom_Club} avec un prix raisonnable  ${Price} dinars<p/>
        <p> Inscrivez vous le plus tot possible puisque il y a que  ${Nbr_place} places disponibles <p/>
        
         `    
    }).catch((err)=>{
        console.log(err)
    })
  
}