var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Sports_controller = require('../controllers/Sports');
var Sports_controller1 = require('../controllers/Sports1');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Sports ROUTES ///
// POST request for creating a Sports.
router.post('/Sports', Sports_controller.Sports_create_post);
// DELETE request to delete Sports.
router.delete('/Sports/:id', Sports_controller.Sports_delete);
// PUT request to update Sports.
router.put('/Sports/:id', Sports_controller.Sports_update_put);
// GET request for one Sports.
router.get('/Sports/:id', Sports_controller.Sports_detail);
// GET request for list of all Sports items.
router.get('/Sports', Sports_controller.Sports_list);
/* GET detail costume page */
router.get('/detail', Sports_controller1.Sports_view_one_Page);
module.exports = router;