// Require mongoose
var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var HwScrapedDataSchema = new Schema({
   
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

var HwScrapedData = mongoose.model("HwScrapedData", HwScrapedDataSchema);

module.exports = HwScrapedData;