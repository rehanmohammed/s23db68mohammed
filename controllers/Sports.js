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
exports.Sports_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Sports.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle Sports create on POST.
exports.Sports_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Sports();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Sports_type":"goat", "cost":12, "size":"large"}
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
//exports.Sports_delete = function(req, res) {
//res.send('NOT IMPLEMENTED: Sports delete DELETE ' + req.params.id);
//};

// Handle Costume delete on DELETE.
exports.Sports_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Sports.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle Sports update form on PUT.


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

    //Handle Sports update form on PUT.
    exports.Sports_update_put = async function(req, res) {
     console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
     try {
     let toUpdate = await Sports.findById( req.params.id)
     // Do updates of properties
     if(req.body.SportsCar) toUpdate.SportsCar = req.body.SportsCar;
     if(req.body.Sportsperson) toUpdate.Sportsperson = req.body.Sportsperson;
     if(req.body.sportsbike) toUpdate.sportsbike = req.body.sportsbike;
     let result = await toUpdate.save();
     console.log("Sucess " + result)
     res.send(result)
     } catch (err) {
     res.status(500)
     res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
     }

    };