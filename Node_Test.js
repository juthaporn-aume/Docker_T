const http = require('http')
const port = 8888
http.createServer((req, res) => {
  // say hello world to any route.
  res.write('AAAAAAAA World !')
  res.end()
}).listen(port, function() {
  console.log(`AAAAAAAAA on port ${port}`)
})