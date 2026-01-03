import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { styles } from "./styles";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { CreateFormData, Diet } from "@/types/diet";
import { dietStorage } from "@/storage/diet.storage";
import { RoutesParams } from "@/types/routes.params";

type NavigationProp = NativeStackNavigationProp<RoutesParams, "create">;

export function CreateDiet() {
  const navigation = useNavigation<NavigationProp>();
  const [isOnDiet, setIsOnDiet] = useState<boolean | null>(null);
  const { control, handleSubmit } = useForm<CreateFormData>({
    defaultValues: {
      name: "",
      description: "",
      date: "",
      hour: "",
    },
  });

  async function handleCreateDiet(data: CreateFormData) {
    if (isOnDiet === null) {
      return;
    }

    const newDiet: Diet = {
      id: `${Date.now()}-${Math.random()}`,
      ...data,
      isOnDiet,
    };
    await dietStorage.create(newDiet);
    navigation.navigate("feedback", { id: newDiet.id });
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formContainer}>
        <Input
          control={control}
          name="name"
          rules={{
            required: "O nome da refeição é obrigatório",
          }}
          multiLine={false}
          label="Nome"
        />
        <Input
          control={control}
          name="description"
          multiLine={true}
          rules={{
            required: "A descrição da refeição é obrigatório",
            minLength: 10,
          }}
          label="Descrição"
          size="lg"
        />
        <View style={styles.inputRow}>
          <Input
            control={control}
            name="date"
            rules={{
              required: "A data da refeição é obrigatória",
            }}
            multiLine={false}
            size="sm"
            label="Data"
          />
          <Input
            control={control}
            name="hour"
            rules={{
              required: "A hora da refeição é obrigatória",
            }}
            multiLine={false}
            size="sm"
            label="Hora"
          />
        </View>
        <View>
          <Text style={styles.textContainer}>Está dentro da dieta?</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Sim"
              size="sm"
              variant="positive"
              isSelected={isOnDiet === true}
              onPress={() => setIsOnDiet(true)}
            />
            <Button
              title="Não"
              size="sm"
              variant="negative"
              isSelected={isOnDiet === false}
              onPress={() => setIsOnDiet(false)}
            />
          </View>
        </View>

        <Button
          title="Cadastrar refeição"
          onPress={handleSubmit(handleCreateDiet)}
        />
      </View>
    </View>
  );
}
