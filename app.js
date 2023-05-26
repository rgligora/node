
const {readFile} = require('fs');
const http = require('http')
var counter = 1

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data)=> {
            if (err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
const aboutFunction = async () => {
    try {
        const first = await getText('./content/aboutPage.txt')
        console.log("Loaded first file")
        const second = await getText('./content/aboutPageAdditionalInfo.txt')
        console.log("Loaded second file")
        console.log("About page loaded")
        return first + second
    } catch (error) {
        console.log(error)
    }
}

const server = http.createServer((req,res) => {
    if(req.url === '/'){
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
    if(req.url === '/about'){
        aboutFunction().then((data)=>{
            res.end(data)
        })
    }
})

server.listen(8080, ()=>{
    console.log("Listening on port 8080")
})


