// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

//  Schema class
var NoteSchema = new Schema({
  
  title: {
    type: String
  },
  
  body: {
    type: String
  }
});


var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;