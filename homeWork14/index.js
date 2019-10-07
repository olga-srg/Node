const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/'){
        res.write('Hello Word');
        res.end();
    }
    else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        res.end(fs.readFileSync('./index.html'));
    }
    else if (req.url === '/about'){
        console.log(req.headers);
        console.log(req.url);
        res.end();
    }  
}).listen(3000, function () {
    console.log('Server at http://localhost:3000');

});