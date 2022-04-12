const User = require("../models/User")
const { sendNotFound } = require("../helpers/response")

exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.json({
      success: true,
      message: "Account Created Successfully",
      user_id: user.id
    })
  }
  catch (err) {
    res.status(400).json({
      sucess: false,
      message: err
    })
  }
}

exports.read = (req, res) => {
  if (req.params.email == req.currentUser.email) {
    res.json(req.currentUser)
  } else {
    res.status(401).json({
      success: false,
      message: 'Resource not found.'
    })
  }
}

exports.update = async (req, res) => {
  if (req.params.email == req.currentUser.email) {
    const user = await User.findOne({ where: {"email": req.params.email}})
    try {
      await user.update(req.body)
      res.json({
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "city": user.city
      })
    } catch (err) {
      res.status(401).json({
        success: false,
        message: err.errors.map(error => error.message)
      })
    }
  } else {
    res.status(401).json({
      success: false,
      message: 'Resource not found.'
    })
  }
}

exports.delete = async (req, res) => {
  if (req.params.email == req.currentUser.email) {
    await req.currentUser.destroy()
    res.json({
      success: true,
      message: "User successfully deleted"
    })
  } else {
    res.status(401).json({
      success: false,
      message: 'Resource not found.'
    })
  }
}

exports.list = async (req, res) => {
  try {
    const userList = await User.findAll({
      attributes: { exclude: ["password", "id", "createdAt", "updatedAt"]}
    })
    res.json(userList)
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err
    })
  }
}