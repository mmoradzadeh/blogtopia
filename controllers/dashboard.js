const router = require('express').Router();
const withAuth = require('../utils/auth');
const {User, Post, Comment} = require('../models/');

router.get('/', async (req, res) => {
    try {
        res.render('dashboard', {loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/posts', withAuth, async (req, res) => {
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

router.get('/posts/:id', withAuth, async (req, res) => {
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
        if (post.userid === req.session.userId) {
            post.isOwner = true;
        } else {
            post.isOwner = false;
        }
        console.log(post.isOwner);
        const comments = post.comments;
        res.render('single-post', {post, comments, isAuthor: post.isOwner, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/posts/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['id', 'username', 'email'],
                }
            ],
        });
        const post = postData.get({ plain: true });
        res.render('edit-post', {post, loggedIn: req.session.loggedIn});
    } catch {
        res.status(500).json(err);
    }
});

router.get('/posts/delete/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['id', 'username', 'email'],
                }
            ],
        });
        const post = postData.get({ plain: true });
        res.render('delete-post', {post, loggedIn: req.session.loggedIn});
    } catch {
        res.status(500).json(err);
    }
});


router.get('/add-comment/:id', withAuth, async (req, res) => {
    try {
        res.render('add-comment', {loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;