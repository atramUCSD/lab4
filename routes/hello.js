
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	'name': '',
  });
};

// Render hello.handlebars
// URL parameters: GEt the name from the URL
// Render template: Insert variables into the HTML Template 
exports.view = function(Req,res){
  var nameToShow = req.params.userName;
  res.render("hello", {"name" : nameToShow});
};