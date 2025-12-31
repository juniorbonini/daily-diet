import { Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/theme/colorTheme";

export function Percent() {
  return (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={0.7}
      style={styles.container}
    >
      <MaterialIcons
        name="arrow-outward"
        size={26}
        color={colors.green["green-dark"]}
        style={{ position: "absolute", top: 5, right: 5 }}
      />
      <Text style={styles.percentage}>50%</Text>
      <Text style={styles.text}>das refeições dentro da dieta</Text>
    </TouchableOpacity>
  );
}
