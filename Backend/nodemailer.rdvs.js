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

module.exports.sendrdvMail = (email,Namep,Date_r,heure_r,cause)=>{
    transport
    .sendMail({
        from : "pidevesprit.gestionecole@gmail.com",
        to : email,
        subject:" Avis de rdvs",
        html : `<h1> Email de rdvs <h1/>
        <h2> Bonjour <h2/>
        <p> Nous voulons vous informer que le parant ${Namep} a été invite le ${Date_r} a l'heure ${heure_r} a cause de  ${cause} <p/>
       `    
    }).catch((err)=>{
        console.log(err)
    })

}