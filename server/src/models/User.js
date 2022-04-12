const { DataTypes } = require("sequelize")
const db = require("../db/connection")
const bcrypt = require("bcrypt")

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

const User = db.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  username: {
    type: DataTypes.CHAR,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.CHAR,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.CHAR,
    allowNull: false
  },
  city: {
    type: DataTypes.CHAR
  },
}, {
  hooks: {
    beforeCreate: async (user, options) => {
      user.password = await hashPassword(user.password)
    },
    beforeUpdate: async (user, options) => {
      const match = await bcrypt.compare(user.password, user._previousDataValues.password)

      if (!match)
        user.password = await hashPassword(user.password)
      else
        user.password = user._previousDataValues.password
    }
  },
  underscored: true
})

User.prototype.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

User.prototype.getDataToken = function (expiresDate) {
  return {
    id: this.id,
    email: this.email,
    // date epoch en ms convertit en s
    exp: expiresDate.getTime() / 1000
  }
}

module.exports = User