import { database } from '../database'

export const getRequests = async (req, res) => {
  const requests = await database.Requests.find({}, undefined, undefined, {
    'status.createdAt': -1
  })
  return res.status(200).json(requests)
}
