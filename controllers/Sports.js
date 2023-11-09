Sports = require('../models/Sports');
// List of all Sportss
exports.Sports_list = function(req, res) {
res.send('NOT IMPLEMENTED: Sports list');
};
// for a specific Sports.
exports.Sports_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Sports detail: ' + req.params.id);
};
// Handle Sports create on POST.
exports.Sports_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Sports create POST');
};
// Handle Sports delete form on DELETE.
exports.Sports_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Sports delete DELETE ' + req.params.id);
};
// Handle Sports update form on PUT.
exports.Sports_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Sports update PUT' + req.params.id);
};