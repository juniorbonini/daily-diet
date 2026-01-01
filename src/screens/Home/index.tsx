import { useCallback, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { styles } from "./style";
import { Diet } from "@/types/diet";
import { Button } from "@/components/Button";
import { DietItem } from "@/components/Diet";
import { Percent } from "@/components/Percent";
import { dietStorage } from "@/storage/diet.storage";
import { RoutesParams } from "../../types/routes.params";

type NavigationProp = NativeStackNavigationProp<RoutesParams, "home">;

const logoImage = require("@/images/daily-diet-logo.png");
const userImage = require("@/images/user-image.png");

export function Home() {
  const navigation = useNavigation<NavigationProp>();
  const [diets, setDiets] = useState<Diet[]>([])
  const [section, setSection] = useState();

  function handleDetails(id: string) {
    navigation.navigate("details", { id });
  }

  useFocusEffect(useCallback(() => {
    async function fecthDetails() {
      const data = await dietStorage.getAll();
      setDiets(data)
    }

    async function groupDietsByDate() {
      setSection(section)
    }

    fecthDetails();
    groupDietsByDate();
  }, []))

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
          data={diets}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <DietItem
            data={item}
            onPress={() => handleDetails(item.id)}
            />
          )}
        />
      </View>
  );
}
