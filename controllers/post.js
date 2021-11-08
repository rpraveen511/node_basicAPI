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
    .then((posts) => {
        return res.status(200).json({
            posts : posts
        })
    })
    .catch(err => console.log(err))

}

exports.createPost = (req,res) => {
    const post = new Post(req.body);
    // console.log("creating Post :", Post)
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
    post.save()
    .then(result => {
        res.status(200).json({
            post: result
        })
    })

   

}