var http = require("http");
var fs = require("fs");
var url = require("url");
var pathOfPage = __dirname + "/";
var imgPath = __dirname + "/assets/media/image/";
var cssPath = __dirname + "/assets/stylesheets/";

var server = http.createServer(handleServer);

function handleServer(req, res) {
  console.log(req.url);
  var format = req.url.split(".").pop();
  var fileName = req.url.split("/").pop();
  var parsedUrl = url.parse(req.url, true);
  // console.log(parsedUrl);
  var store = "";
  if (parsedUrl.pathname == "/" && req.method === "GET") {
    console.log("index done");
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream(pathOfPage + "index.html").pipe(res);
    // fs.readFile(pathOfPage + "index.html", (err, data) => {
    //   if (err) return res.end(err);
    //   res.setHeader("Content-Type", "text/html");
    //   res.end(data);
    // });
  } else if (["jpg", "jpeg", "png"].includes(format)) {
    res.setHeader("Content-Type", `text/${req.url.split(".").pop()}`);
    fs.createReadStream(imgPath + fileName).pipe(res);
  } else if (format == "css") {
    res.setHeader("Content-Type", `text/${req.url.split(".").pop()}`);
    fs.createReadStream(cssPath + fileName).pipe(res);
  }
}

server.listen(3001, () => {
  console.log("listening on port 3001");
});
