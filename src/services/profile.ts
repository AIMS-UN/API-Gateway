import { getInstance } from '@/configs/axios'
import { Profile } from '@/schemas/profile'

const profileInstance = getInstance('profile')

export const getUserbyId = async (userId: string): Promise<Profile> => {
  const data: Profile = await profileInstance.get(`/users/${userId}`)

  // For now, we'll just return a dummy data
  // const data: Data = { name: `Data from ${msName}`, message: 'Hello World!' }

  return await new Promise((resolve) => { resolve(data) })
}

export const getUsers = async (): Promise<Profile[]> => {
  const data: Profile[] = await profileInstance.get('/users')

  // For now, we'll just return a dummy data
  // const data: Data = { name: `Data from ${msName}`, message: 'Hello World!' }

  return await new Promise((resolve) => { resolve(data) })
}
