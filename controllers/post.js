const Post = require("../models/post");

exports.postRoutes = (req,res) => {
    // res.send("Hello world from node js controllers")
    // res.json({
    //     posts : [
    //         {"title": "First Post"},
    //         {"title": "Second Post"},
    //     ]
    // });
    const post = Post.find()
    .select("_id title body")
    .then((posts) => {
        return res.status(200).json({
            posts : posts
        })
    })
    .catch(err => console.log(err))
}

exports.createPost = (req,res) => {    
    const post = new Post(req.body);
    console.log("creating Post :", req.body)
    // post.save((err,result) => {
    //     if(err){
    //         return res.status(400).json({
    //             error : err
    //         })
    //     }
    //     res.status(200).json({
    //         post : result
    //     })
    // })
    console.log(req.body)
    post.save()
    .then(result => {
        res.status(200).json({
            post: result
        })
    });  

}