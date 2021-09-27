const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.resolve('./db/contacts.json')

const getListContacts = async () => {
  const contacts = await fs.readFile(contactsPath, 'utf-8')
  return JSON.parse(contacts)
}

module.exports = { getListContacts }
