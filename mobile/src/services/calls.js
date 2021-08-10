import api from './api'

export async function getPoints() {
  try {
    const result = await api.get('points')

    return result.data
  } catch (error) {
    return error
  }
}

export async function removePoint(uuid) {
  try {
    const result = await api.delete('points', {
      data: {
        uuid,
      },
    })

    return result
  } catch (error) {
    return error
  }
}
