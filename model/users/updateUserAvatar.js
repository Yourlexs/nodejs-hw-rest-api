const { User } = require('../../db/userModel')
const fs = require('fs/promises')
const path = require('path')

const updateUserAvatar = async (id, tempDir, filename, uploadDir) => {
  await fs.rename(tempDir, uploadDir)
  const image = path.join('avatars', filename)
  const updateContact = await User.findByIdAndUpdate(id, { avatarURL: image })
  return updateContact
}

module.exports = { updateUserAvatar }
