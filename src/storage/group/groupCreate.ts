import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION } from '@storage/storageConfig'
import { groupsGetAll } from './groupGetAll'
import { AppError } from '@utils/AppError'

export async function groupCreate(newGroup: string) {
  try {
    const storageGroups = await groupsGetAll()

    const groupAlreadyExists = await storageGroups.includes(newGroup)

    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.')
    }

    const storage = JSON.stringify([...storageGroups, newGroup])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    console.log(error)
    throw error
  }
}
