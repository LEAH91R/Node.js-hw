// const http = require('http');

// http.createServer((request, response) => {
//     response.write('Hello World!');
//     response.end();
// }).listen(3000);

// console.log("Server started on port 3000");
const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    if (request.url === '/'){
        response.write('Hello World!');
    }
    else if (request.url === '/about'){
        response.write("אתר מיוחד");
    }
        else if (request.url === '/services') {
            response.write()

        }
        else {
       
        response.write('הדף המבוקש לא נמצא (404)'); 
    }
    response.end();

}).listen(3000);

console.log("Server started on port 3000");
        
    
