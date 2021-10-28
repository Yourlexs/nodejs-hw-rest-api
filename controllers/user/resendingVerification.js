const { resendingMail } = require('../../model/users')

const resendingVerification = async (req, res) => {
  const { email } = req.body
  if (!email) {
    return res.status(400).json({ message: 'missing required fields' })
  }
  await resendingMail(email)
  res.status(200).json({ message: 'success' })
}

module.exports = { resendingVerification }
