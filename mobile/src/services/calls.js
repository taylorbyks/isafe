import api from './api'

export async function getPoints() {
  try {
    const result = await api.get('points')

    return result.data
  } catch (error) {
    return error
  }
}
