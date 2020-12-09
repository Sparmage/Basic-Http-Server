const app = require("express")()

app.get("/", (req, res)=> {

    console.log(req);
    res.setHeader('type', 'text/html')
    res.send('<h1>Hello From Sparmage!<h1>')
})


app.listen(8080, ()=>console.log("Proxy is listening on port 8080"))