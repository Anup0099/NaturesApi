const fs = require('fs');
// fs.readFile('./docs/blog.txt',(err, data) => {
//     if(err) throw err;
//     console.log(data.toString());
// });

// fs.writeFile('./docs/blog.txt','anupp',(err, data) => {
//     console.log('firstName');
// })

console.log('Hello World');

const http = require('http');
const server = http.createServer((req, res) => {
  // console.log(req.url,req.method)
  //setHeaders
  res.setHeader('Content-Type', 'text/html');
//   res.write('<p><h1>Hello World</h1></p>');
  //return html pages
  // fs.readFile('./public/tour.html',(err, data) => {
  //     if(err) throw err;
  //     res.write(data.toString());
  //     res.end();
  // })

  let path = './public/';
  switch (req.url) {
    case '/':
      path += 'tour.html';

      break;
    case '/about':
      path += 'overview.html';
      break;
    default:
      path += 'tour.html';
      break;
  }
});
server.listen(3000, () => {
  console.log('server is running on port 3000');
});
