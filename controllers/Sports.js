var Sports = require("../models/SportsSchema");
// List of all Sports
exports.Sports_list = async function(req, res) {
    try{
    theSports = await Sports.find();
    res.send(theSports);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// for a specific Sports.
exports.Sports_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Sports detail: ' + req.params.id);
};
// Handle Sports create on POST.
exports.Sports_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Sports();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.SportsCar = req.body.SportsCar;
    document.Sportsperson = req.body.Sportsperson;
    document.sportsbike = req.body.sportsbike;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } ;
};

// Handle Sports delete form on DELETE.
exports.Sports_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Sports delete DELETE ' + req.params.id);
};
// Handle Sports update form on PUT.
exports.Sports_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Sports update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.Sports_view_all_Page = async function(req, res) {
    try{
    theSports = await Sports.find();
    res.render('Sports', { title: 'Sports Search Results', results: theSports });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };