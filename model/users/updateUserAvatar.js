const { User } = require('../../db/userModel')
const fs = require('fs/promises')
const path = require('path')

const updateUserAvatar = async ({ _id, tempDir, filename, uploadDir }) => {
  await fs.rename(tempDir, uploadDir)
  const image = path.join('avatars', filename)
  const updateContact = await User.findByIdAndUpdate(_id, { avatarUrl: image })
  return updateContact
}

module.exports = { updateUserAvatar }
