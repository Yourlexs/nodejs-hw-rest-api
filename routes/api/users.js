const express = require('express')
const router = express.Router()

const { asyncWrapper } = require('../../helpers/apiHelpers')
const { authMiddleware } = require('../../middlewares/authMiddleware')
const { uploadMiddleware } = require('../../middlewares/uploadMiddleware')

const { updateUserController, updateUserAvatarController, verificationController, resendingVerification } = require('../../controllers/user')

router.patch('/', authMiddleware, asyncWrapper(updateUserController))
router.patch('/avatars', authMiddleware, uploadMiddleware.single('avatar'), asyncWrapper(updateUserAvatarController))
router.get('/verify/:verificationToken', asyncWrapper(verificationController))
router.post('/verify', asyncWrapper(resendingVerification))
module.exports = router
