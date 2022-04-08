import { database } from '../database'

export const deleteRequest = async (req, res) => {
  const idToDelete = req.params.id
  console.log('id', req.params.id)
  await database.Requests.deleteOne(idToDelete, 'api')
  return res.status(204).send()
}
