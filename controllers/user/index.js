const { updateUserController } = require('./userUpdateController')
const { updateUserAvatarController } = require('./updateUserAvatarController')
const { verificationController } = require('./verificationController')
const { resendingVerification } = require('./resendingVerification')
module.exports = { updateUserController, updateUserAvatarController, verificationController, resendingVerification }
