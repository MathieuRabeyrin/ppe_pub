const express = require("express")
const routes = express.Router()
const auth = require("./auth")
const user = require("./user")
const movie = require("./movie")

routes.use("/", auth)
routes.use("/user", user)
routes.use("/movie", movie)

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Ok' });
});

module.exports = routes