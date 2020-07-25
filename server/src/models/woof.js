const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WoofSchema = new Schema({
    name : {
        type : String,
        required : [true,'Name is required.']
    },
    content : {
        type : String,
        required : [true, 'Content is required.']
    }
},
    {
        timestamps : true
    }
);

const Woof = mongoose.model('Woof', WoofSchema);

module.exports = Woof;
