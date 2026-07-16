const fs = require('fs')
const zlib = require('zlib')

const input = fs.createReadStream('file.txt')
const output = fs.createWriteStream("file.txt.gz")

input.pipe(zlib.createGzip()).pipe(output)

output.on("finish", ()=>{
  console.log("Zip File Created.")
})