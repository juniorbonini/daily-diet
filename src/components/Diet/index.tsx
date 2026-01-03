import { DietData } from "@/types/diet";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { colors } from "@/theme/colorTheme";

export function DietItem({ data, onPress }: DietData) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.hour}>{data.hour}</Text>
      <View style={styles.divider}><Text></Text></View>
      <Text style={styles.name}>{data.name}</Text>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: data.isOnDiet
              ? `${colors.green["green-light"]}`
              : `${colors.red["red-light"]}`,
          },
        ]}
      ></View>
    </TouchableOpacity>
  );
}
