const express = require("express")
const routes = express.Router()
const auth = require("../controllers/auth")
const user = require("../controllers/user")

routes.route("/:email")
  .all(auth.verifyToken)
  .get(user.read)
  .put(user.update)
  .delete(user.delete)

routes.route("/")
  .get(auth.verifyToken, user.list)
  .post(user.create)

module.exports = routes