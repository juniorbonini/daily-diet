import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Diet() {
  return (
    <View>
      <Text>Registrar uma refeição</Text>
      <View>
        <Button title="Cadastrar refeição" onPress={() => router.replace("/")} />
      </View>
    </View>
  );
}
