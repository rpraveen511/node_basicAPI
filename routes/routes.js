// exports.postRoutes = (req,res) => {
//     res.send("Hello world from node js routes")
// }
const express = require("express");

const postController = require("../controllers/post");
const validator = require("../validators/index")

const router = express.Router();
router.get("/",postController.postRoutes);
router.post("/post", validator.createPostValidator, postController.createPost )

module.exports = router;