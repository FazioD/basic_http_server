'use strict';
//
// const http = require('http');
// const fs = require('fs');

/*refactoring code from yesterday*/
var server = http.createServer( function (req, res) {

  if (req.url === '/time') {
          var now = new Date().toString();
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('now');
    return res.end();
  }

var url = req.url.toString();
var name = url.substring;

if(req.url === url && req.method === "GET") {
    res.writeHead(200, {'Content-type': 'application/json'});
    res.write('hello,' + name);
    return res.end();
}


if(req.url) ===  '/greet' && method === 'POST') {
      var parsed = '';
      req.on('data', function(data);
      return res.end();
}


  // if (req.url === '/') {
  //   res.writeHead(200, {'content-type': 'text/html'});
  //   var index = fs.createReadStream(__dirname + '/public/index.html');
  //   return index.pipe(res);
  // }

  res.writeHead(404, {'content-type': 'text/plain'});
  res.write('404 Not Found');
  res.end();

})

server.listen(3000, () => console.log('server up on 3000'));
});
