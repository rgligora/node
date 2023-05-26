const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end(`<h1>HOME PAGE</h1>`)
        
    }
    else if(req.url === '/about'){
        res.end(`<h1>ABOUT PAGE</h1>`)
        
    }else{
        res.end(`<h1>Error 404!</h1>
        <a href="/">back home</a>`)
    }
    
})

server.listen(8080)