const fs = require('fs/promises')
const path = require('path')
const Jimp = require('jimp')
const { updateUserAvatar } = require('../../model/users/index')

const updateUserAvatarController = async (req, res, next) => {
  const { _id } = req.user
  const { path: tempDir, originalname } = req.file

  Jimp.read(tempDir).then(avatar => {
    return avatar.resize(250, 250).write(originalname)
  }).catch(err => console.log(err))

  const [, extension] = originalname.split('.')
  const filename = `${_id}.${extension}`
  const uploadDir = path.join(__dirname, '../../', 'public\\avatars', filename)
  const updateAvatar = await updateUserAvatar(_id, tempDir, filename, uploadDir)

  if (!updateAvatar) {
    await fs.unlink(tempDir)
    next()
  }
  res.status(200).json({ message: 'Update avatar success' })
}

module.exports = { updateUserAvatarController }
