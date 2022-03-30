async function createComment(req ,res){
    try{
        const {comment} = req.body;

        await Comment.create({
            post:req.body.id,
            comment,
            poster:req.user._id,
        });

        res.redirect('/');

    }catch(err){
        console.log(err);
    }
}

module.exports = {
    createComment,
}