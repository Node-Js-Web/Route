const router = require('express').Router();
const {  getposts,addposts, sortedposts, deleteposts, updateposts, searchposts } = require('./post.controller');
router.get('/getposts', getposts);
router.post('/addposts', addposts);
router.get('/sortedposts', sortedposts);
router.delete('/deleteposts', deleteposts);
router.put('/updateposts', updateposts);
router.get('/searchposts', searchposts);

module.exports = router;
