const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    // Route: /gethello
    if (req.method === "GET" && req.url === "/gethello") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello NodeJS!!");
    }

    // Display HTML page
    else if (req.method === "GET" && req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading HTML file");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    }

    // Invalid route
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});