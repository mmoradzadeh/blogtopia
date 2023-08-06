const router = require('express').Router();
const {User, Post, Comment} = require('../models/');

router.get('/contact', async (req, res) => {
    try {
        res.render('contact');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/sign-up', async (req, res) => {
    try {
        res.render('sign-up');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
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
        res.render('homepage', {posts, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;