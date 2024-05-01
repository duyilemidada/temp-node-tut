const {readFile, writeFile} = require('fs')
console.log("start")
readFile('./content/first.txt', 'utf8', (err, results) =>{
 if(err) {
  console.log(err)
  return;
 }
  const first = results
  readFile('./content/second.txt', 'utf8', (err, results) => {
    if(err) {
      console.log(err)
      return;
    }
    const  second = results
    writeFile('./content/result-async.txt', 
    `Here is the result : ${first}, ${second}`,
    (err, results) => {
      if(err) {
        console.log(err)
        return
      }
      console.log("done")
    }
  )
  })
})

console.log("starting next task")

 