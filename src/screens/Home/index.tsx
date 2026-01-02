import { useCallback, useState } from "react";
import { Image, SectionList, Text, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { styles } from "./style";
import { Button } from "@/components/Button";
import { DietItem } from "@/components/Diet";
import { Percent } from "@/components/Percent";
import { Diet, DietSection } from "@/types/diet";
import { dietStorage } from "@/storage/diet.storage";
import { RoutesParams } from "../../types/routes.params";

type NavigationProp = NativeStackNavigationProp<RoutesParams, "home">;

const logoImage = require("@/images/daily-diet-logo.png");
const userImage = require("@/images/user-image.png");

export function Home() {
  const navigation = useNavigation<NavigationProp>();
  const [diets, setDiets] = useState<Diet[]>([])
  const section = groupDietByDate(diets);
  const dietsOnDiet = diets.filter(diets => diets.isOnDiet).length;
  const total = diets.length;
  const percent = 
  total > 0 ? Math.round((dietsOnDiet / total) * 100) : 0;

  const isPositive = percent <= 50;

  function handleDetails(id: string) {
    navigation.navigate("details", { id });
  }

  useFocusEffect(useCallback(() => {
    async function fecthDetails() {
      const data = await dietStorage.getAll();
      setDiets(data)
    }

    fecthDetails();
  }, []))

  function groupDietByDate(diets: Diet[]): DietSection[] {
    const grouped = diets.reduce<Record<string, Diet[]>>((acc, diet) => {
      if(!acc[diet.date]) {
        acc[diet.date] = []
      }

      acc[diet.date].push(diet)
      return acc
    }, {})

    return Object.entries(grouped).map(([ date, diets ]) => ({
      title: date,
      data: diets
    }))
  }

  return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={logoImage} />
          <Image source={userImage} />
        </View>
       <View>
        <Percent value={percent} isPositive={isPositive} />
       </View>
        <Text style={styles.title}>Refeições</Text>

        <Button title="Nova refeição" icon="add" onPress={() => navigation.navigate('create')} />

        <SectionList
          sections={section}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.dietDate}>{title}</Text>
          )}
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
