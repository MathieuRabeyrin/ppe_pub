const { DataTypes } = require("sequelize")
const db = require("../db/connection")

const Movie = db.define('Movie', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.CHAR,
    allowNull: false
  },
  poster: {
    type: DataTypes.CHAR
  },
  description: {
    type: DataTypes.TEXT
  },
  link: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true
    }
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  underscored: true
})

module.exports = Movie