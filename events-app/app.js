const http = require('http')
const eventEmmiter = require('events')
const customEmmiter = new eventEmmiter()

const server = http.createServer()

server.on('request', (req, res) => {
    res.end("Welcome")
})
server.on('close', (req, res) => {
    console.log("Server closed")
})


customEmmiter.on('response', () => {
    console.log(`data recieved `)
})

customEmmiter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id: ${id}`)
})

customEmmiter.emit('response','John', 36537568)
customEmmiter.emit('response')

server.listen(8080, ()=>{
    console.log('Listening on 8080...')
})

setTimeout(()=>{
    server.close()
}, 5000)