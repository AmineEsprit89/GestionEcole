const SocialPost = require("social-post-api");
const social = new SocialPost("JSFQQAZ-CWK4ZF0-GYW32CE-0C3A1VW");
const {Event} = require ("../models/event.model");



module.exports = {
    ShareTosocialMedia : async (req, res) => {

        

   const event = await Event.findOne({_id: req.params.id});
    const getPostData = () => {
        return {
            post:"Nom de l'evenement : " + event.Name + "\nDate_event : " + event.Date_event +
              "\nDate_fin_event : " + event.Date_fin_event +
            "\nHeure_debut : " + event.Heure_debut + "\nLieu : " + event.Lieu +  "\nNom_Club : " + event.Nom_Club +
            "\nPrix : " + event.Price + "\nNombre de places : " + event.Nbr_place ,
            platforms:["facebook"]
        };
    };
    const run = async () => {
        const content = getPostData();
        const json = await social.post(content).catch(console.error);
        console.log(json);
    }
    run();
    }
}