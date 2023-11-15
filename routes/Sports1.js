var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('Sports1', { title: 'Search results Sports1' });
});
module.exports = router;

    /* GET detail costume page */
    const Sports_controlers= require('../controllers/Sports1');
    router.get('/detail', Sports_controlers.Sports_view_one_Page);