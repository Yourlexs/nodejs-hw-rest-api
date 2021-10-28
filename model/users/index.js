const { addUser } = require('./addUser')
const { login } = require('./login')
const { logout } = require('./logout')
const { getUserInfo } = require('./getUserInfo')
const { updateUserSubscription } = require('./updateUserSubscription')
const { updateUserAvatar } = require('./updateUserAvatar')
const { confirmationUser } = require('./confirmationUser')
const { resendingMail } = require('./resendingMail')

module.exports = { addUser, login, logout, getUserInfo, updateUserSubscription, updateUserAvatar, confirmationUser, resendingMail }
