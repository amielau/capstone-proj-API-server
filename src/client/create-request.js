import { database } from '../database'

export const createRequest = async (req, res) => {
  const requestData = req.body
  console.log('body', requestData)

  const result = await database.Requests.insertOne(requestData, 'api')

  return res.status(201).json(result)
}
