var Sports = require("../models/SportsSchema");

// Handle a show one view with id specified by query
exports.Sports_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Sports.findById( req.query.id)
    res.render('Sportsdetail',
    { title: 'Sports Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for creating a Sports.
    // No body, no in path parameter, no query.
// Does not need to be async
exports.Sports_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Sportscreate', { title: 'Sports Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a Sports.
// query provides the id
exports.Sports_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Sports.findById(req.query.id)
    res.render('Sportsupdate', { title: 'Sports Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};