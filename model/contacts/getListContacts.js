const { Contact } = require('../../db/contactModel')

const getListContacts = async ({ _id, page, limit }) => {
  const skip = (page - 1) * limit
  const contacts = await Contact.find({ owner: _id }, '', { skip, limit: +limit })
  return contacts
}

module.exports = { getListContacts }
