import http from "http";
import { readFileSync } from "fs";

//get files 
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
  const url = req.url;

  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
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
