exports.createPostValidator = (req,res,next) => {
    // console.log(req.res)
    req.check("title","Write the title").notEmpty()
    req.check("title","Title must be 4 to 150 characters").isLength({
        min : 4,
        max : 150
    });
    req.check("body","Write the body").notEmpty()
    req.check("body","body must be 4 to 250 characters").isLength({
        min : 4,
        max : 150
    });

    const errors = req.validationErrors();
    if (errors){
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({
            error : firstError
        });
    }
    next();
}
