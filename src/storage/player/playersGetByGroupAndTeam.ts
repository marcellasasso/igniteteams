import { PlayerStorageDTO } from './PlayerStorageDTO'
import { playersGetByGroup } from './playersGetByGroup'

export async function playersGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage: any = await playersGetByGroup(group)

    const players = storage.filter(
      (player: PlayerStorageDTO) => player.team === team,
    )

    return players
  } catch (error) {
    console.log(error)
    throw error
  }
}
