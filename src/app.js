import express from 'express'
import { json } from 'body-parser'
import cors from 'cors'
import { getAboutInfo } from './about/getAboutInfo'
import { getRequests } from './client/get-requests'
import { createRequest } from './client/create-request'
import { deleteRequest } from './client/delete-request'
import { getProfile } from './client/get-profile'
import { approveRequest } from './admin/approve-request'

export const start = async () => {
  const app = express()

  app.use(json())
  app.use(cors())

  app.use((req, res, next) => {
    console.log('Request: ', req.method, req.originalUrl)
    next()
  })

  app.get('/api/about', getAboutInfo)

  app.get('/api/client/requests', getRequests)
  app.post('/api/client/requests', createRequest)
  app.delete('/api/client/requests/:id', deleteRequest)

  app.patch('/api/admin/requests/:id/approve', approveRequest)

  app.get('/api/client/profile/:id', getProfile)

  return app
}
