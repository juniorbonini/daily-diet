import { Diet } from "@/types/diet";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DIET_COLLECTION = '@dailydiets:diet';

async function readStorage(): Promise<Diet[]> {
  const storage = await AsyncStorage.getItem(DIET_COLLECTION);
  return storage ? JSON.parse(storage) : [];
}

async function writeStorage(diets: Diet[]): Promise<void> {
  await AsyncStorage.setItem(DIET_COLLECTION, JSON.stringify(diets))
}

async function getAll(): Promise<Diet[]> {
  return readStorage();
}

async function getById(id: string): Promise<Diet | undefined> {
  const diets = await readStorage();
  return diets.find(diet => diet.id === id);
}

async function create(newDiet: Diet): Promise<void> {
  const diets = await readStorage();
  await writeStorage([...diets, newDiet])
}

async function update(updatedDiet: Diet): Promise<void> {
  const diets = await readStorage();

  const updated = diets.map(diet =>
    diet.id === updatedDiet.id ? updatedDiet : diet
  )

  await writeStorage(updated);
}

async function remove(id: string): Promise<void> {
  const diets = await readStorage()
  const filtered = diets.filter(diet => diet.id !== id);

  await writeStorage(filtered)
}

export const dietStorage = {
  getAll,
  getById,
  create,
  update,
  remove
}