import { Text, TouchableOpacity, View } from "react-native";

export function CreateDiet() {
  return (
    <View>
      <Text>CreateDiet Screen</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text>Feedback Diet</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text>Voltar a Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
