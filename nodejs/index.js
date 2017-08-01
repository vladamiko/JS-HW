let server = require("./server"),
    router = require("./router"),
    requestHandlers = require("./requestHandlers");

let handle = {
    '/': requestHandlers.helloWorld,
    '/time': requestHandlers.time,
    '/date': requestHandlers.date,
    '/index.html': requestHandlers.index,
    '/img/test.png': requestHandlers.index
}

server.start(router.route, handle);