exports.sendNotFound = (res) => {
  return res.status(404).json({
    sucess: false,
    message: 'Ressource not found.'
  })
}