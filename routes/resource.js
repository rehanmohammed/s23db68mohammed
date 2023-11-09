var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Sports_controller = require('../controllers/Sports');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Sports ROUTES ///
// POST request for creating a Sports.
router.post('/Sportss', Sports_controller.Sports_create_post);
// DELETE request to delete Sports.
router.delete('/Sportss/:id', Sports_controller.Sports_delete);
// PUT request to update Sports.
router.put('/Sportss/:id', Sports_controller.Sports_update_put);
// GET request for one Sports.
router.get('/Sportss/:id', Sports_controller.Sports_detail);
// GET request for list of all Sports items.
router.get('/Sportss', Sports_controller.Sports_list);
module.exports = router;