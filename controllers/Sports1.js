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