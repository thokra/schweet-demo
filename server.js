const { createServer } = require("http");
const { readFile } = require("fs");

createServer((_, res) => {
	readFile("index.html", (err, data) => {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(data);
	});
}).listen(process.env.PORT || 8080);
