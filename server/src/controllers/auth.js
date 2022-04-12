const User = require("../models/User")
const jwt = require("jsonwebtoken")

exports.authenticate = async (req, res) => {
  const user = await User.findOne({
    where: {"email": req.body.email}
  })
  if (user) {
    const valid = await user.validPassword(req.body.password)
    const expiresDate = new Date()
    
    expiresDate.setSeconds(expiresDate.getSeconds() + 3600)

    if (valid) {
      const token = jwt.sign(user.getDataToken(expiresDate), process.env.JWT_SECRET)
      res.json({
        sucess: true,
        type: "Bearer",
        token: token,
        expires: expiresDate.toTimeString()
      })
    } else {
      res.status(401).json({
        success: false,
        message: 'Authentication failed.'
      })
    }
  } else {
    res.status(401).json({
        success: false,
        message: 'Authentication failed.'
    })
  }
}

exports.verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]
  
  if (token && token.startsWith('Bearer ')) {
    const parsedToken = token.split(" ")[1]

    jwt.verify(parsedToken, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        res.status(401).json({
          success: false,
          message: "Failed to authenticate token.",
          error: err
        })
      } else {
        user = await User.findByPk(
          decoded.id, {
            attributes: {
              exclude: ["password"]
            }
          }
        )
        if (user) {
          req.currentUser = user
          next()
        } else {
          res.status(401).json({
            success: false,
            message: 'Authentication failed.'
          })
        }
      }
    })
  } else {
    res.status(401).json({
      success: false,
      message: 'No token provided.'
    })
  }
}