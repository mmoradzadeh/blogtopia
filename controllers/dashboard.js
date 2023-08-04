const router = require('express').Router();
const {User, Post, Comment} = require('../models/');

router.get('/', async (req, res) => {
    try {
        res.render('dashboard', {loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/posts', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'username', 'email'],
                },
            ],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('all-posts', {posts, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/posts/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['id', 'username', 'email'],
                },
                {
                    model: Comment,
                    attributes: ['id', 'content', 'postid', 'userid', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['id', 'username', 'email'],
                    },
                },
            ],
        });
        const post = postData.get({ plain: true });
        const comments = post.comments;
        res.render('single-post', {post, comments, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;