import { database } from '../database'

export const getProfile = async (req, res) => {
  const userId = req.params.id
  console.log('userId', userId)
  const profile = await database.Users.getById(userId)
  return res.status(200).json(profile)
}
