/* const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end("welcome to our home page")
  }
  if(req.url === '/about'){
    res.end("welcome to our about page")
  }
  res.end(`
   <h1>oops</h1>
   <p>We can't seem to find the page</p>
   <a href="/">back home</a>
  `)
})

server.listen(5000)

 */


const _ = require('lodash')

const  items = [1, [2, [3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)