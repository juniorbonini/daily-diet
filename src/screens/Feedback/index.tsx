import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Diet } from "../../types/diet";
import { dietStorage } from "../../storage/diet.storage";
import { Text, View } from "react-native";

export function Feedback() {
  const route = useRoute();
  const { id } = route.params as { id: string };
  const [diet, setDiet] = useState<Diet | null>(null);
  const [isDiet, setIsDiet] = useState<boolean>();

  useEffect(() => {
    async function loadDiet() {
      const diet = await dietStorage.getById(id);

      setDiet(diet ?? null);
      setIsDiet(diet?.isOnDiet);
    }
    loadDiet();
  }, [id]);

  if (!diet) {
    return <Text>Refeição não encontrada</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: diet?.isOnDiet ? "green" : "red" }}>
      <Text>{diet.name}</Text>
    </View>
  );
}
