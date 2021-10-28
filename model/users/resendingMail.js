const sgMail = require('@sendgrid/mail')
const { User } = require('../../db/userModel')
const { WrongParametersError } = require('../../helpers/errors')

const resendingMail = async (email) => {
  const user = await User.findOne({ email, verify: false })
  if (!user) {
    throw new WrongParametersError('Verification has already been passed')
  }
  const msg = {
    to: user.email,
    from: 'Yourlexss@gmail.com',
    subject: 'Thank you for registration',
    text: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verifyToken}">Please, confirm your email address</a>`,
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verifyToken}">Please, confirm your email address</a>`,
  }
  await sgMail.send(msg)
}

module.exports = { resendingMail }
