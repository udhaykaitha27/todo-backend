const mongoose = require ('mongoose')
const {Schema} = require('mongoose');


const todosSchema = new Schema({
    text :  {type:'string',required:[true,'todo is a required feild']}
},
{
    timestamps: true
})

module.exports = mongoose.model('todo',todosSchema);