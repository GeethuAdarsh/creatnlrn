const mongoose = require('mongoose');
const Joi = require('joi');

const genreSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 4,
        maxlength : 50
    }
})
const Genre = mongoose.model('Genre',genreSchema)

function validateGenre(genre){
    const schema = Joi.object({
        name : Joi.string().min(4).required()
    })
    return schema.validate(genre);
}

module.exports = {
    Genre : Genre,
    validate : validateGenre,
    genreSchema : genreSchema
}
