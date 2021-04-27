const router = require('express').Router();
const Post = require('../models/postModel');
const auth = require('../middleware/auth')


// GET ALL POST
router.get('/', async (req, res) => {
  const post = await Post.find().sort('-date');
  res.send(post);
});

// ADD NEW POST
router.post('/', auth, async (req, res) => {
  let post = new Post({
      title: req.body.title,
      desc: req.body.desc,
      body: req.body.body,
      category: req.body.category,
      tags: req.body.tags
    });
    post = await post.save();
  
  res.send(post);
});

// UPDATE POST
router.put('/:id', auth, async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    desc: req.body.desc,
    body: req.body.body,
    category: req.body.category,
    tags: req.body.tags
},
    { new: true }
    );

  if (!post) return res.status(404).send('The post with the given ID was not found.');
  
  res.send(post);
});


// DELETE POST
router.delete('/:id', async (req, res) => {
  const post = await Post.findByIdAndRemove(req.params.id);

  if (!post) return res.status(404).send('The customer with the given ID was not found.');

  res.send(post);
});

// GET SINGLE POST
router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) return res.status(404).send('The genre with the given ID was not found.');

  res.send(post);
});

module.exports = router;