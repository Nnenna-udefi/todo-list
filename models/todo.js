const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
     todo: {
       // _id: new mongoose.Types.ObjectId,
        title: {type: String},
    description: {type: String},
    timestamp : {
        type: Date,
        default: Date.now
    },
    },
});

module.exports = new mongoose.model("Todo", TodoSchema);