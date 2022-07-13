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

module.exports.sendAbsenceMail = (email,NameE,Date_abs,heuresc,matiere)=>{
    transport
    .sendMail({
        from : "pidevesprit.gestionecole@gmail.com",
        to : email,
        subject:" Avis d'abscence",
        html : `<h1> Email de absences <h1/>
        <h2> Bonjour <h2/>
        <p> Nous voulons vous informer que l'eleve ${NameE} a été abscent le ${Date_abs} a l'heure ${heuresc} dans la matiere ${matiere} <p/>
       `    
    }).catch((err)=>{
        console.log(err)
    })

}