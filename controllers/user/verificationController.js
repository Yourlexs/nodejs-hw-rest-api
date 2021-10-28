const { confirmationUser } = require('../../model/users')

const verificationController = async (req, res) => {
  const { verificationToken } = req.params
  await confirmationUser(verificationToken)
  res.status(200).json({ message: 'success' })
}
module.exports = { verificationController }
