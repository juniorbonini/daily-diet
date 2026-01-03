import { Diet } from "@/types/diet";

export function calculateDietStatus(diets: Diet[]) {
  const total = diets.length;
  const dietsOnDiet = diets.filter((diets) => diets.isOnDiet).length;
  const percent = total > 0 ? Math.round((dietsOnDiet / total) * 100) : 0;
  const dietsOutDiet = diets.filter((diets) => diets.isOnDiet === false).length;
  const isPositive = percent >= 50;

  return {
    dietsOnDiet,
    total,
    percent,
    isPositive,
    dietsOutDiet
  };
}
