const mongoose = require('mongoose')
const creditSchema = new mongoose.Schema({
    nameofproduce : {
        type : String
    },
    typeofproduce : {
        type : String, 
        trim : true
    },
    amountdue : {
        type : Number,
        trim :  true
    },
    buyersname : {
        type : String,
        trim : true
    },
    saleagent : {
        type : String,
        trim : true
    },
    dateofdispatch: {
        type : String, 
        trim : true
    },
    nationalid : {
        type : String, 
        trim : true
    },
    dateofpayback : {
        type : String, 
        trim : true
    },
    contact : {
        type : Number, 
        trim : true
    },
    location : {
        type : String, 
        trim : true
    },
})



module.exports = mongoose.model('Credit', creditSchema)