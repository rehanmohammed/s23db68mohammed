var express = require('express');
var router = express.Router();

/* GET home page.
router.get('/', function(req, res, next) { 
  res.render('Sports1', { title: 'Search results Sports1' });
});  */

// redirect to login.
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");
  }

    /* GET detail Sports page */
    const Sports_controlers= require('../controllers/Sports1');
    router.get('/detail', Sports_controlers.Sports_view_one_Page);

    /* GET create Sports page */
router.get('/create', secured, Sports_controlers.Sports_create_Page);

/* GET create update page */
router.get('/update', secured,Sports_controlers.Sports_update_Page);


/* GET delete Sports page */
router.get('/delete', secured, Sports_controlers.Sports_delete_Page);
module.exports = router;