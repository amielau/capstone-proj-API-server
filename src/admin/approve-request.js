import { database } from '../database'

export const approveRequest = async (req, res) => {
  const requestId = req.params.id
  const approved = req.body.approved || false

  const request = await database.Requests.getById(requestId)

  const result = await database.Requests.updateOne(
    { ...request, approved },
    'api'
  )

  console.log('result', result)

  return res.status(200).json(result)
}
