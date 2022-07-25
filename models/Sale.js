const mongoose = require('mongoose')
const salesSchema = new mongoose.Schema({
    nameofproduct : {
        type : String,
        trim : true
    },
    tonnage : {
        type : Number,
        trim : true
    },
    amountpaid : {
        type : Number,
        trim : true
    },
    buyersname : {
        type : String,
    },
    saleagent : {
        type : String,
        trim : true
    },
    dateandtime : {
        type : Date
    },
    unitprice : {
        type : Number,
        trim : true
    }
})

module.exports = mongoose.model('Sale', salesSchema)