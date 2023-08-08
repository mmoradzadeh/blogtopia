const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Post, Comment } = require('../../models');

router.post('/', withAuth , async (req, res) => {
    try {
        console.log(req.session);
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            userid: req.session.userId,
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth , async (req, res) => {
    try {
        const postData = await Post.update({
            title: req.body.title,
            content: req.body.content,
        },
        {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(postData);
    } catch (err) { 
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth , async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(postData);
    } catch (err) { 
        res.status(400).json(err);
    }
});


router.post('/comments', withAuth , async (req, res) => {
    try {
        const commentData = await Comment.create({
            content: req.body.comment,
            postid: req.body.post_id,
            userid: req.session.userId,
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;