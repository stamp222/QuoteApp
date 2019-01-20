var express  = require('express');
var app      = express();                                        
var bodyParser = require('body-parser');    
var cors = require('cors');
 
app.use(morgan('dev'));                                        
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(cors());
 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
 
app.use(express.static('www'));
var server = app.listen(5000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Przykładowa aplikacja nasłuchuje na http://%s:%s", host, port)
  })