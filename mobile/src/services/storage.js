import AsyncStorage from '@react-native-async-storage/async-storage'

export async function saveCity(city) {
  await AsyncStorage.setItem('@isafe:location', city)
}

export async function loadCity() {
  try {
    const data = await AsyncStorage.getItem('@isafe:location')

    return data
  } catch (error) {
    throw new Error(error)
  }
}

export async function clearCity() {
  AsyncStorage.clear();
}
