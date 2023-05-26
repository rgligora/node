
//FS built in module ASYNC
fs.readFile('../content/first.txt','utf-8', (err, data) => {
    if (err) throw err;
    console.log(`This is a ASYNC function: ${data}`);
    const first = data
    fs.readFile('../content/second.txt','utf-8', (err, data) => {
        if (err) throw err;
        console.log(`This is a ASYNC function: ${data}`);
        const second = data
    })
    fs.writeFile('../content/result-async.txt',`Here is the result: ${first}, ${second}`, (err, data) => {
        if (err) throw err;
        console.log(data);
        
    })

})