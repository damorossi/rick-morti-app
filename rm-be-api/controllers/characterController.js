const Character = require("../models/Character");
const fetch = require('cross-fetch');

exports.createChar = async (req, res) => {  
    try {
        let character;
        character = new Character(req.body);
        await character.save();
        const chars = await Character.find({"user_id": req.body.user_id});
        res.status(200).send(chars);
    } catch ( error ) {
        res.status(500).send( error );
    }
}

exports.getFavoriteCharacters = async(req, res) => {
    try {
        const chars = await getFromUser(req.params.userId);
        res.status(200).send(chars);
    } catch ( error ) {
        res.status(500).send( error );
    }
};


exports.fetchMainApi = async(req, res) => {
    try {
       let page = req.params.page;
       const data = await  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
           .then((response) => response.json());
       res.json(data);
   } catch ( error ) {
       res.status(500).send( error );
   }
}

exports.removeCharacter = async(req, res) => {
    try {
        const char = await Character.findById({"_id": req.params.id});
        if(!char) {
            res.status(404).json({msg: 'Character not found as favorite'})
        }
        const userId = char.user_id;
        await Character.findOneAndRemove({"_id": req.params.id});
        constcharsUpdated = await getFromUser(userId);
        res.status(200).send(constcharsUpdated);
    } catch ( error ) {
        res.status(500).send( error );
    }
};

async function getFromUser(userId) {
     return await Character.find({"user_id": userId});
}