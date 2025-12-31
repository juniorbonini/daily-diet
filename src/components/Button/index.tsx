import { colors } from "@/theme/colorTheme";
import { ButtonProps } from "@/types/button";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export function Button({ title, icon, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}
    >
        <MaterialIcons name={icon} size={24} color={colors.gray[0]} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
