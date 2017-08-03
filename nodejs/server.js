let http = require("http"),
    url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;





// let http = require("http"),
//     url = require("url"),
//     fs = require('fs'),
//     path = require('path');

// function start(route, handle) {
//     function onRequest(request, response) {
//         var filePath = url.parse(request.url).pathname,
//             contentType = 'text/html',
//             extname = '';

//         if (filePath === '/'){
//             filePath = '../client/index.html';
//         }

//         extname = path.extname(filePath);

//         var mimeTypes = {
//             '.html': 'text/html',
//             '.js': 'text/javascript',
//             '.css': 'text/css',
//             '.json': 'application/json',
//             '.png': 'image/png',
//             '.jpg': 'image/jpg',
//             '.ico': 'text/plain'
//         };

//         contentType = mimeTypes[extname];
//         console.log(extname + ' ' + filePath);

//         if (extname === '.json'){
//             fs.readFile('./' + filePath, function (error, content) {
//                 if (error) {
//                     response.end(error);
//                 } else {
//                     response.writeHead(200, {'Content-Type': contentType});
//                     response.end(content);
//                 }
//             });
//         } else {
//             fs.readFile('../client/' + filePath, function (error, content) {
//                 if (error) {
//                     fs.readFile('index.html', function (error, content) {
//                         if (error) {
//                             response.end(error);
//                         } else {
//                             response.writeHead(200, {'Content-Type': contentType});
//                             response.end(content);
//                         }
//                     });
//                 } else {
//                     response.writeHead(200, {'Content-Type': contentType});
//                     response.end(content);
//                 }
//             });
//         }

//         console.log("Request for " + filePath + " received.");
//         route(handle, filePath, response);
//     }

//     http.createServer(onRequest).listen(8888);
//     console.log("Server has started.");
// }

// exports.start = start;