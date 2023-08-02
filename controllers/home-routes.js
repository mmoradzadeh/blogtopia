const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        // const dbPostData = await Post.findAll({
        //     include: [
        //         {
        //             model: Post,
        //             attributes: ['id', 'title', 'content', 'created_at'],
        //         },
        //     ],
        // });
        // const posts = dbPostData.map((post) =>
        //     post.get({ plain: true })
        // );
        // console.log(posts);
        posts = [
            {
                title: 'Test Title',
                contentSummary: 'content number one',
                date: '01/01/2021',
                author: 'Test User'
            },
            {
                title: 'Test Title',
                contentSummary: 'Test Content number two',
                date: '02/01/2021',
                author: 'Test User'
            },
            {
                title: 'Test Title',
                contentSummary: 'Test Content number three',
                date: '03/01/2021',
                author: 'Test User'
            }
        ];
        res.render('homepage', {posts},);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;