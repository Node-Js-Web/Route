const router = require('express').Router();
const {  getusers,addusers, sortedusers, deleteusers, updateusers, searchusers } = require('./users.controller');
router.get('/getusers', getusers);
router.post('/addusers', addusers);
router.get('/sortedusers', sortedusers);
router.delete('/deleteusers', deleteusers);
router.put('/updateusers', updateusers);
router.get('/searchusers', searchusers);

// Post end points
router.post('/getusers', getusers);
router.post('/addusers', addusers);
router.post('/sortedusers', sortedusers);
router.post('/deleteusers', deleteusers);
router.post('/updateusers', updateusers);
router.post('/searchusers', searchusers);

module.exports = router;

