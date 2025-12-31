import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import { dietStorage } from "../../storage/diet.storage";

type NavigationProp = NativeStackNavigationProp<any>;

export function Home() {
  const navigation = useNavigation<NavigationProp>();
  const fakeDiets = [
    {
      id: "1",
      name: "Filé de frango",
      description: "Arroz, 2 Filé de frango, com feijão e salada",
      hour: "12:30",
      date: "2025-12-12",
      isOnDiet: true,
    },
    {
      id: "2",
      name: "Banana",
      description: "Lanche da tarde",
      hour: "16:00",
      date: "2025-12-12",
      isOnDiet: true,
    },
    {
      id: "3",
      name: "Big Mac",
      description: "Lanche do Mc Donalds",
      hour: "20:00",
      date: "2025-12-12",
      isOnDiet: false,
    },
  ];

  async function seedDiets() {
    await AsyncStorage.removeItem("@daily-diet:diet");

    for (const diet of fakeDiets) {
      await dietStorage.create(diet);
    }
  }

  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={seedDiets}>
        <Text>Seed fake diets</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("details", { id: "3" })}
      >
        <Text>Go to Details (id 1)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("edit", { id: "3" })}
      >
        <Text>Go to Edit (id 2)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("feedback", { id: '2' })}
      >
        <Text>Go to Feedback (success)</Text>
      </TouchableOpacity>
    </View>
  );
}
