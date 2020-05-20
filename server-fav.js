/* 
a website with four routes:
  1 Home
  2 Favorite Foods
  3 Favorite Movies
  4 Favorite CSS Frameworks
- Each route is triggered by a different URL.
- Each route displays an HTML page listing your favorite three things of each.

*/

//import http module to create server
const http = require("http");
const fs = require("fs");

//set my port
const port = 8080;

//create seperate servers for each URL path
const server = http.createServer(handleRequest);



//function to handle the requests coming in
function handleRequest(req, res) {
  //Capture the url the request is made to
  var path = req.url;
  console.log("this is the path:")
  console.log(path)
  // var results =fs.readFileSync('./home.html', function(data){return data}); 
  // console.log("This should be the fs.readfile results")
  // console.log(results);
  //conditions and response (HTML file) for different reg
  switch (path) {
  //   case "/home":
  //     return fs.readFileSync(__dirname + "/home.html", function (data){
  //       res.writeHead(200, {'Content-Type': 'text/html'});
  //       res.end(data);
  //     } );

    case "/food":
      return fs.readFile(__dirname + "/food.html", function (err,data){
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      } );

      case "/frameworks":
      return fs.readFile(__dirname + "/frameworks.html", function (err,data){
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      } );

      case "/movies":
        fs.readFile(__dirname + "/movies.html", function (err,data){
          if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
          } );

       // default to rendering index.html, if none of above cases are hit
  default:
    return fs.readFile(__dirname + "/home.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
}

//start the server
server.listen(port, function () {
    console.log("listening to http://localhost:" + port);
  });