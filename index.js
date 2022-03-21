const express = require ('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const PORT = 3000;

const staticMiddleware = express.static(path.join(__dirname,'public'));

const puppies = [
    {   name: 'bob',
        breed: 'beagel',
        id: 1
    },
    {   name: 'cookie',
        breed: 'fox-terrier',
        id: 2
    },
    {   name: 'spot',
        breed: 'pug',
        id: 3
    },
    {   name: 'lola',
        breed: 'boxer',
        id: 4
    },
    {   name: 'mochi',
        breed: 'husky',
        id: 5
    }
];

app.use(morgan('dev'));

app.use(staticMiddleware);

app.use(express.json());

app.use("*",(req, res, next) => {
    console.log(req.method, req.url)
    next();
});

app.get("/",(req, res, next) => {
    res.send("<h1>Hello World from app.get</h1>")
})

app.get("/puppies",(req, res, next) => {
    res.send(puppies)
})


app.get("/puppies/:id",(req, res, next) => {
    const id = req.params.id
    res.json(puppies.find(puppy => puppy.id == id))
})

app.listen(PORT,() => {
    console.log(`The server is up on port: ${PORT}`)
});

module.exports = app;