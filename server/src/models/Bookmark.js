const db = require("../db/connection")

const Bookmark = db.define('Bookmark', {}, {
  underscored: true
})

module.exports = Bookmark