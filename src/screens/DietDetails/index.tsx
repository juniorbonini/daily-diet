import { useEffect, useState } from "react";
import { Diet } from "../../types/diet";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { dietStorage } from "../../storage/diet.storage";
import { Text, TouchableOpacity, View } from "react-native";
import { RoutesParams } from "@/types/routes.params";
import { colors } from "@/theme/colorTheme";

type NavigationProp = NativeStackNavigationProp<RoutesParams, "details">;

export function DietDetails() {
  const route = useRoute();
  const navigation = useNavigation<NavigationProp>();
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: diet?.isOnDiet
          ? `${colors.green["green-mid"]}`
          : `${colors.red["red-mid"]}`,
      }}
    >
      <Text>{diet.name}</Text>
      <Text>{diet.description}</Text>
      <Text>
        {diet.date} • {diet.hour}
      </Text>
      <Text>{diet.isOnDiet}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
