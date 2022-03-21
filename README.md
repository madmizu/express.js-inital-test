# Node.js and Express.js

### Inital setup

```sh
npm init -y
```

```sh
npm install express
```

```sh
npm install nodemon
```

```sh
npm install morgan
```

Update scripts in package.json with:

- start : node index.js
- start:dev : nodemon index.js

Create index.js

Add requires:

- const express = require {'express'}
- const morgan = require('morgan')
- const path = require('path')
- const app = express ()

Add PORT listener to index.js:

- const PORT = 3000
```sh
app.listen(PORT,() => {
    console.log(`The server is up on port: ${PORT}`)
});
```

Add app.use for all routes:

- app.use(morgen('dev'))
- app.use(express.static(path.join(__dirname,'public')))
- app.use(express.json())

Create routes for server requests. If it is not the end-route, use next():

```sh
app.use("*",(req, res, next) => {
    console.log(req.method, req.url)
    next();
})
```

```sh
app.get("/",(req, res, next) => {
    res.send("<h1> Hello World - Home Page </h1>")
})
```

```sh
app.get("/puppies/:id",(req, res, next) => {
    const id = req.params.id
    res.json(puppies.find(puppy => puppy.id == id))
})
```