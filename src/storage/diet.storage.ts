import { Diet } from "../types/diet";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DIET_COLLECTION = "@daily-diet:diet";

async function getAll(): Promise<Diet[]> {
  const storage = await AsyncStorage.getItem(DIET_COLLECTION);

  if (!storage) {
    return [];
  }

  return JSON.parse(storage) as Diet[];
}

async function getById(id: string): Promise<Diet | undefined> {
  const diets = await getAll();

  return diets.find((diet) => diet.id === id);
}

async function create(newDiet: Diet) {
  try {
    const stored = await AsyncStorage.getItem(DIET_COLLECTION);
    const diets: Diet[] = stored ? JSON.parse(stored) : [];

    diets.push(newDiet);

    await AsyncStorage.setItem(DIET_COLLECTION, JSON.stringify(diets));
  } catch (error) {
    throw error;
  }
}

async function update(updateDiet: Diet): Promise<void> {
  const diets = await getAll();

  const newDiet = diets.map((diet) =>
    diet.id === updateDiet.id ? updateDiet : diet
  );

  return AsyncStorage.setItem(DIET_COLLECTION, JSON.stringify(newDiet));
}

async function remove(id: string): Promise<void> {
  const diets = await getAll();

  const removeDiet = diets.filter((diet) => diet.id !== id);

  return AsyncStorage.setItem(DIET_COLLECTION, JSON.stringify(removeDiet));
}

export const dietStorage = {
  getAll,
  getById,
  create,
  update,
  remove,
};
