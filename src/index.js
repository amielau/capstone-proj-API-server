import { start } from './app'

require('dotenv').config()

const PORT = 3030

start().then((app) => {
  app.listen(PORT, () => {
    console.log('Listening on PORT:', PORT)
  })
})
