import { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import { Diet } from "@/types/diet";
import { colors } from "@/theme/colorTheme";
import { Button } from "@/components/Button";
import { RoutesParams } from "@/types/routes.params";
import { dietStorage } from "@/storage/diet.storage";

type NavigationProp = NativeStackScreenProps<RoutesParams, "details">;

export function DietDetails() {
  const route = useRoute();
  const { id } = route.params as { id: string };
  const navigation = useNavigation<NavigationProp>();
  const [diets, setDiets] = useState<Diet | undefined>(undefined);

  useEffect(() => {
    async function loadDiet(id: string) {
      const data = await dietStorage.getById(id);

      if (data) {
        setDiets(data);
      }
    }

    loadDiet(id);
  }, []);

  async function handleRemove() {
    Alert.alert("Excluir refeição", "Deseja realmente excluir esta refeição?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          if (!diets) return;
          await dietStorage.remove(diets?.id);
          navigation.navigate('home');
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      {diets?.isOnDiet ? (
        <View
          style={[
            styles.headerContainer,
            { backgroundColor: colors.green["green-light"] },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("home")}
          >
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={colors.gray[500]}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Refeições</Text>
        </View>
      ) : (
        <View
          style={[
            styles.headerContainer,
            { backgroundColor: colors.red["red-light"] },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("home")}
          >
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={colors.gray[500]}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Refeições</Text>
        </View>
      )}
      <View style={styles.content}>
        <View style={styles.nameContainer}>
          <Text style={styles.subtitle}>{diets?.name}</Text>
          <Text style={styles.description}>{diets?.description}</Text>
        </View>
        <View>
          <Text style={styles.date}>Data e hora</Text>
          <Text style={styles.dateText}>
            {diets?.date} às {diets?.hour}
          </Text>
        </View>
        {diets?.isOnDiet ? (
          <View style={styles.tag}>
            <Text
              style={[
                diets?.isOnDiet && styles.status,
                { backgroundColor: colors.green["green-mid"] },
              ]}
            ></Text>
            <Text>dentro da dieta</Text>
          </View>
        ) : (
          <View style={styles.tag}>
            <Text
              style={[
                styles.status,
                { backgroundColor: colors.red["red-mid"] },
              ]}
            ></Text>
            <Text>fora da dieta</Text>
          </View>
        )}
        <View style={styles.buttonContainer}>
          <Button
            title="Editar refeição"
            icon="edit"
            onPress={() => navigation.navigate("edit", { id })}
          />
          <Button
            title="Excluir refeição"
            icon="delete-outline"
            onPress={handleRemove}
          />
        </View>
      </View>
    </View>
  );
}
