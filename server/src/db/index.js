const sequelize = require("./connection")
const User = require("../models/User")
const Movie = require("../models/Movie")
const Bookmark = require("../models/Bookmark")

User.hasMany(Bookmark)
Bookmark.belongsTo(Movie)

sequelize.sync()

module.exports = sequelize