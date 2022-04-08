import { database } from './database'
require('dotenv').config()

const harness = async () => {}

harness()
  .then(() => {
    process.exit(0)
  })
  .catch((err) => {
    console.log('runner error', err)
    process.exit(1)
  })
