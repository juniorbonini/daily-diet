import { Button, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Tela HomeScreen</Text>

      <Button title="Nova refeição" onPress={() => {}} />
    </View>
  );
}
