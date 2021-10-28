const { User } = require('../../db/userModel')
const { VerificationError } = require('../../helpers/errors')

const confirmationUser = async (verificationToken) => {
  const user = await User.findOne({ verifyToken: verificationToken })
  if (!user) {
    throw new VerificationError('User not found')
  }
  user.verifyToken = null
  user.verify = true
  await user.save()
}

module.exports = { confirmationUser }
