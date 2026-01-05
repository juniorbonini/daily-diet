import { Text, View } from "react-native";
import { useCallback, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { styles } from "./style";
import { Diet } from "@/types/diet";
import { Button } from "@/components/Button";
import { Percent } from "@/components/Percent";
import { RoutesParams } from "@/types/routes.params";
import { dietStorage } from "@/storage/diet.storage";
import { calculateDietStatus } from "@/utils/dietState";

type NavigationProp = NativeStackScreenProps<RoutesParams, "statistics">;

export function Statistic() {
  const [diets, setDiets] = useState<Diet[]>([]);
  const navigation = useNavigation<NavigationProp>();
  const { percent, isPositive, dietsOnDiet, total, dietsOutDiet } =
    calculateDietStatus(diets);

  useFocusEffect(
    useCallback(() => {
      async function load() {
        const data = await dietStorage.getAll();
        setDiets(data);
      }
      load();
    }, [])
  );
  return (
    <View style={styles.container}>
        <Percent value={percent} isPositive={isPositive} variant="large" />
      <View style={styles.content}>
        <Text style={styles.title}>Estatísticas gerais</Text>
        <View style={styles.sequence}>
          <Text style={styles.subtitle}>{dietsOnDiet}</Text>
          <Text style={styles.text}>
            melhor sequência de pratos dentro da dieta
          </Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.subtitle}>{total}</Text>
          <Text style={styles.text}>refeições registradas</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.success}>
            <Text style={styles.subtitle}>{dietsOnDiet}</Text>
            <Text style={styles.text}>refeições dentro da dieta</Text>
          </View>
          <View style={styles.fail}>
            <Text style={styles.subtitle}>{dietsOutDiet}</Text>
            <Text style={styles.text}>refeições dentro da dieta</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Ir para a página inicial"
            onPress={() => navigation.navigate("home")}
          />
        </View>
      </View>
    </View>
  );
}
