const mongoose = require('mongoose')

const payloadSchema = new mongoose.Schema({
    name: {type: String, unique:true, default:""},
    email: {type: String, default:""},
    country: {type: String, default:""}
})

const payloadModel = mongoose.model('Payload', payloadSchema)
module.exports = payloadModel
