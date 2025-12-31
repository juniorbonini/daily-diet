import { useEffect, useState } from "react";
import { Diet } from "../../types/diet";
import { useRoute } from "@react-navigation/native";
import { dietStorage } from "../../storage/diet.storage";
import { Text, View } from "react-native";

export function DietDetails() {
  const route = useRoute();
  const { id } = route.params as { id: string };
  const [diet, setDiet] = useState<Diet | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDiet() {
      const diet = await dietStorage.getById(id);

      setDiet(diet ?? null);
      setLoading(false);
    }

    loadDiet();
  }, [id]);

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  if (!diet) {
    return <Text>Refeição não encontrada!</Text>;
  }

  return (
    <View>
      <Text>{diet.name}</Text>
      <Text>{diet.description}</Text>
    </View>
  );
}
