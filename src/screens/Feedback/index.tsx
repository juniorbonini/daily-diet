import { Text, TouchableOpacity, View } from "react-native";

export function Feedback() {
  return (
    <View>
      <Text>FeedBack Screen</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text>Voltar a Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
