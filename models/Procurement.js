const mongoose = require('mongoose')
const procurementSchema = new mongoose.Schema({
    nameofproduce : {
        type : String,
        trim : true
    },
    typeofproduce : {
        type : String, 
        trim : true
    },
    tonnage : {
        type : Number,
        trim :  true
    },
    costofprocurement : {
        type : Number,
        trim : true
    },
    nameofdealer : {
        type : String,
        trim : true
    },
    dateandtimeofprocurement : {
        type : Date
    },
    branch : {
        type : String, 
        trim : true
    },
    contact : {
        type : Number, 
        trim : true
    },
    pricetobesold : {
        type : Number, 
        trim : true
    },
    dateandtimeofdispatch : {
        type : Date
    }


})



module.exports = mongoose.model('Procurement', procurementSchema)