//OS built in module
const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`System uptime ${os.uptime}`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS)

//PATH built in module
const path = require('path')

console.log(path.sep)

const filePath = path.join('/web', 'node_tutroial', '4-modules.js')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, '4-modules-utils.js')
console.log(absolute)

//FS built in module SYNC
const fs = require('fs')
const first = fs.readFileSync('./content/first.txt', 'utf-8')
const second = fs.readFileSync('./content/second.txt', 'utf-8')
console.log(first)
console.log(second)
//ovewrite
fs.writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`) 
//append
fs.writeFileSync('./content/result-sync-append.txt', `Here is the result: ${first}, ${second} `, {flag: 'a'}) 

//FS built in module ASYNC
fs.readFile('./content/first.txt','utf-8', (err, data) => {
    if (err) throw err;
    console.log(`This is a ASYNC function: ${data}`);
})