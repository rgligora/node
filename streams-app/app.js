const fs = require('fs')
const {createServer} = require('http')

const server = createServer()
server.on('request', (req,res)=>{
    /* res.end(fs.readFileSync('../content/bigfile.txt', 'utf-8')) */
    const stream = fs.createReadStream('../content/bigfile.txt', 'utf-8')
    stream.on('open', ()=>{
        stream.pipe(res)
    })
})
server.listen(8080)

