var http = require("http");
var fs = require("fs");
var queryString = require("queryString");
var url = require("url");

// 1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
// listen for request on port 5555.

var server = http.createServer((req, res) => {
  res.end("Welcome to NodeJS");
});

server.listen(5555, () => console.log("port is listening on 5555"));

// 2. Write script to create a server, send in response the request headers
// and add listener on port 6666.
http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.end("sending the req");
  })
  .listen(6666, () => console.log("port is listening on 6666"));

// 3. create a server and console request methods and url by doing request
// from postman or web browsers.

http
  .createServer((req, res) => {
    console.log(req.method, req.url);
  })
  .listen(6666, () => console.log("port is listening on 6666"));

// 4. create a server
// - set response headers as 'text/html' using res.setHeader property.
// - write some HTML content in response
// - listen on port 6000
http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1> hello World</h1>`);
  })
  .listen(6000, () => console.log("port is listening on 6666"));

// 5. create a server
// - create a seperate file index.html and write some html content
// - read the html file content and send it in response in createServer method
// - don't forget to set header before writing to response

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./index.html").pipe(res);
  })
  .listen(6666, () => console.log("port is listening on 6666"));

// 6. create a server
// - create 3 diffenrent file ie. indx.html, about.html, contact.html
// - inside createServer, handle different urls for serving different html file
// - '/' route for index.html file
// - "/about" for about.html file
// - "/contact" for contact.html file
http
  .createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream("./index.html").pipe(res);
    } else if (req.url == "/about" && req.method == "GET") {
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream("./about.html").pipe(res);
    } else if (req.url == "/contact" && req.method == "GET") {
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream("./contact.html").pipe(res);
    }
  })
  .listen(6666, () => console.log("port is listening on 6666"));

// 7. create an Server(echoServer)
// handle post request for incoming data from postman using req as eventEmitter
// send incoming data back in response
http
  .createServer((req, res) => {
    var data = "";
    req
      .on(data, chunk => {
        data += chunk;
      })
      .on("end", () => {
        res.setHeader("Content-Type", "text/plain");
        fs.createReadStream(data).pipe(res);
      });
  })
  .listen(6666, () => console.log("port is listening on 6666"));

// 8. create a server
// handle json data from postman
// parse the json data
// send json data back in response
http
  .createServer((req, res) => {
    var data = "";
    req
      .on(data, chunk => {
        data += chunk;
      })
      .on("end", () => {
        res.setHeader("Content-Type", "text/plain");
        fs.createReadStream(data).pipe(res);
      });
  })
  .listen(6666, () => console.log("port is listening on 6666"));

// 9. create a server
// handle x-www-urlencoded(form data) coming form postman
// parse form-data using querystring module
// send data back in response
http
  .createServer((req, res) => {
    var data = "";
    req
      .on(data, chunk => {
        data += chunk;
      })
      .on("end", () => {
        res.setHeader("Content-Type", "text/plain");
        fs.createReadStream(JSON.stringify(queryString.parse(data))).pipe(res);
      });
  })
  .listen(6666, () => console.log("port is listening on 6666"));

// 10. create a server and add listener on port 7000
// send get request on 'http://localhost:7000/new?username=altcampus' from postman or browser
// parse the request url using 'url' core node module
// extract protocol, path and pathname, query from the request
// send path in response
http
  .createServer((req, res) => {
    var parsedUrl = url.parse(req.url);
    res.end(parsedUrl.path);
  })
  .listen(6666, () => console.log("port is listening on 6666"));

// 11. Write script to create an absolute and relative path of 'theory.md' from the current file.
// use path module from core node

var absolutePath = __dirname + "/";
var relativePath = "./";


