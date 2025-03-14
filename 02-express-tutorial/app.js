import http from "http";

const server = http.createServer((req, res) => {
  const url = req.url;

  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<p>Welcome to our home page</p>");
    res.end();
  } 
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<p>This is our history</p>");
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<p>Page not found</p>");
    res.end();
  }
});

server.listen(3000, () => console.log("Server is running on port 3000..."));
