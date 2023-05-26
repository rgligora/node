
const {readFile} = require('fs');
const http = require('http')
var counter = 1

const server = http.createServer((req,res) => {
    if(req.url !== '/favicon.ico'){
        console.log(`Starting task: ${counter}`)
        var first_task = counter
        readFile('./content/first.txt', 'utf-8', (err, data) => {
            if (err) throw err;
            console.log(data);
            console.log(`Ended task: ${first_task}\n`)
        });

        console.log("Continuing to the next task")
        counter++
        console.log(`Starting task: ${counter}`)
        var second_task = counter
        setTimeout(()=>{
            console.log(`Ended task: ${second_task}`)
        }, 0)
        counter++
        res.end("Closing down")
    }
})

server.listen(8080, ()=>{
    console.log("Listening on port 8080")
})


