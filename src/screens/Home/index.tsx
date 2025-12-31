import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { styles } from "./style";
import { colors } from "@/theme/colorTheme";
import { Button } from "@/components/Button";
import { Percent } from "@/components/Percent";
import { RoutesParams } from "../../types/routes.params";

type NavigationProp = NativeStackNavigationProp<RoutesParams, "home">;

const logoImage = require("@/images/daily-diet-logo.png");
const userImage = require("@/images/user-image.png");

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
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={logoImage} />
          <Image source={userImage} />
        </View>
       <View>
        <Percent />
       </View>
        <Text style={styles.title}>Refeições</Text>

        <Button title="Nova refeição" icon="add" onPress={() => navigation.navigate('create')} />

        <FlatList
          data={fakeDiets}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleDetails(item.id)}
              style={styles.dietContainer}
            >
              <View>
                <Text> {item.hour}   |   {item.name}</Text>
              </View>
              <View
                style={[
                  styles.dietStyle,
                  { backgroundColor: item.isOnDiet ? `${colors.green["green-mid"]}` : `${colors.red["red-mid"]}` },
                ]}
              ></View>
            </TouchableOpacity>
          )}
        />
      </View>
  );
}
