import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { dietStorage } from "../../storage/diet.storage";
import { RoutesParams } from "../../types/routes.params";

type NavigationProp = NativeStackNavigationProp<RoutesParams, "home">;

export function Home() {
  const navigation = useNavigation<NavigationProp>();
  const fakeDiets = [
    {
      id: "1",
      name: "Filé de frango",
      description: "Arroz, 2 Filé de frango, com feijão e salada",
      hour: "12:30",
      date: "21-12-2025",
      isOnDiet: true,
    },
    {
      id: "2",
      name: "Banana",
      description: "Lanche da tarde",
      hour: "16:00",
      date: "21-12-2025",
      isOnDiet: true,
    },
    {
      id: "3",
      name: "Big Mac",
      description: "Lanche do Mc Donalds",
      hour: "20:00",
      date: "21-12-2025",
      isOnDiet: false,
    },
  ];

  function handleDetails(id: string) {
    navigation.navigate("details", { id });
  }

  return (
    <View style={{ flex: 1, padding: 18 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15 }}>
        RefeiçÕes
      </Text>

      <FlatList
        data={fakeDiets}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleDetails(item.id)}
            style={{
              padding: 12,
              marginBottom: 8,
              borderWidth: 1,
              borderRadius: 8,
              borderColor: "#ccc",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <Text>
                {item.date} • {item.hour}
              </Text>
            </View>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: item.isOnDiet ? "green" : "red",
                alignSelf: "center",
              }}
            ></View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
