const { resendingMail } = require('../../model/users')

const resendingVerification = async (req, res) => {
  const { mail } = req.body
  if (!mail) {
    return res.status(400).json({ message: 'missing required fields' })
  }
  await resendingMail(mail)
  res.status(200).json({ message: 'success' })
}

module.exports = { resendingVerification }
