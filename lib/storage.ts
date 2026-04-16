
import AsyncStorage from "@react-native-async-storage/async-storage";

export const STORAGE_KEYS = {
  PROFILE: "profile",
  NOTIFICATION: "notifications",
  THEME: "dark",
}
// Get a value from storage (automatically parses JSON)
export async function get<T>(key: string): Promise<T | null> {
  const value = await AsyncStorage.getItem(key);
  if (value === null) return null;
  return JSON.parse(value) as T;
}
// set A value in store (automaticaly stringifies to JSON)
export async function set(key: string, value: unknown): Promise<void> {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}
//remove a value from storage 
export async function remove(key: string): Promise<void> {
  await AsyncStorage.removeItem(key);
}
