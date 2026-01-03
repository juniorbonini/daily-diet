import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { styles } from "./style";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { CreateFormData, Diet } from "@/types/diet";
import { dietStorage } from "@/storage/diet.storage";
import { RoutesParams } from "@/types/routes.params";

// type NavigationProp = NativeStackNavigationProp<RoutesParams, 'edit'>

export function EditDiet() {
  // const navigation = useNavigation<NavigationProp>()
  const route = useRoute();
  const { id } = route.params as { id: string };
  const [isOnDiet, setIsOnDiet] = useState<boolean | null>(null);
  const [diets, setDiets] = useState<Diet | null>(null);
  const { control, handleSubmit, reset } = useForm<CreateFormData>();

  useEffect(() => {
    async function loadDiet() {
      const data = await dietStorage.getById(id);
      if (data) setDiets(data);
    }
    loadDiet();
  }, []);

  useEffect(() => {
    if (diets) {
      reset({
        name: diets.name,
        description: diets.description,
        date: diets.date,
        hour: diets.hour,
      });

      setIsOnDiet(diets.isOnDiet);
    }
  }, [diets]);

  async function handleUpdate(data: CreateFormData) {
    if (!diets || isOnDiet === null) return;

    const updateDiet: Diet = {
      ...diets,
      description: data.description,
      hour: data.hour,
      isOnDiet,
    };

    await dietStorage.update(updateDiet);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formContainer}>
        <Input control={control} name="name" multiLine={false} label="Nome" />
        <Input
          control={control}
          name="description"
          multiLine={true}
          label="Descrição"
          size="lg"
        />
        <View style={styles.inputRow}>
          <Input
            control={control}
            name="date"
            multiLine={false}
            size="sm"
            label="Data"
            editable={false}
          />
          <Input
            control={control}
            name="hour"
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

        <Button title="Salvar refeição" onPress={handleSubmit(handleUpdate)} />
      </View>
    </View>
  );
}
