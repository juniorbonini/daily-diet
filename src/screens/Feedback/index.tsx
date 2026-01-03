import { Image, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Diet } from "../../types/diet";
import { dietStorage } from "../../storage/diet.storage";
import { RoutesParams } from "@/types/routes.params";
import { Button } from "@/components/Button";
import { styles } from "./styles";

const imageFeedbackGreen = require('../../images/diet-feedback-green.png')
const imageFeedbackRed = require('../../images/diet-feedback-red.png')
type NavigationProp = NativeStackNavigationProp<RoutesParams, "feedback">;

export function Feedback() {
  const route = useRoute();
  const { id } = route.params as { id: string };
  const navigation = useNavigation<NavigationProp>();
  const [diets, setDiets] = useState<Diet | null>(null);

    useEffect(() => {
    async function loadDiet(id: string) {
      const data = await dietStorage.getById(id);

      if(data){
        setDiets(data)
      }
    }
    loadDiet(id);
  }, [])

  return (
    diets?.isOnDiet ? (
      <View style={styles.container}>
      <View style={styles.feedbacktextContainer}>
        <Text style={styles.title}>Continue assim!</Text>
        <Text style={styles.text}>
          Você continua <Text style={styles.strongText}>dentro da dieta.</Text> Muito bem!
        </Text>
        <View style={styles.imageContainer}>
          <Image source={imageFeedbackGreen} />
        </View>
      </View>
      <Button
        title="Ir para a página inicial"
        onPress={() => navigation.navigate("home")}
      />
    </View>
    ) : (
      <View style={styles.container}>
      <View style={styles.feedbacktextContainer}>
        <Text style={styles.titleRed}>Que pena!</Text>
        <Text style={styles.text}>
          Você<Text style={styles.strongText}> saiu da dieta</Text> dessa vezm mas continue se esforçando e não desista!
        </Text>
        <View style={styles.imageContainer}>
          <Image source={imageFeedbackRed} />
        </View>
      </View>
      <Button
        title="Ir para a página inicial"
        onPress={() => navigation.navigate("home")}
      />
    </View>
    )
  );
}
