require('dotenv').config()
const express = require('express')
const db = require("./db")
const morgan = require("morgan")
const routes = require("./routes")
const port = process.env.PORT | 3000

const app = express()

app.listen(port)

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes)

console.log(`http://localhost:${port}`)