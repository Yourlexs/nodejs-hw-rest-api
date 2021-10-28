const gravatar = require('gravatar')
const { nanoid } = require('nanoid')
const sgMail = require('@sendgrid/mail')
const { User } = require('../../db/userModel')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const addUser = async (email, password) => {
  const verifyToken = nanoid()
  const avatarURL = gravatar.url(email)
  const user = new User({ email, password, avatarURL, verifyToken })
  await user.save()

  const msg = {
    to: user.email,
    from: 'Yourlexss@gmail.com',
    subject: 'Thank you for registration',
    text: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verifyToken}">Please, confirm your email address</a>`,
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verifyToken}">Please, confirm your email address</a>`,
  }
  await sgMail.send(msg)
}

module.exports = { addUser }
