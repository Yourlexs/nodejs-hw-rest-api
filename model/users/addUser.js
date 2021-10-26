const gravatar = require('gravatar')
const { User } = require('../../db/userModel')

const addUser = async (email, password) => {
  const avatarURL = gravatar.url(email)
  const user = new User({ email, password, avatarURL })
  await user.save()
}

module.exports = { addUser }
