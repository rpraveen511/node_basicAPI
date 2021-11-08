
const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
    title : {
        type : "string",
        required : true
        // required : "Title is required",
        // minlength : 4,
        // maxlength : 150
    },
    body : {
        type : "string",
        required : true
        // required : "Body is required",
        // minlength : 4,
        // maxlength : 250
    }
});

module.exports = mongoose.model("Post", PostSchema)