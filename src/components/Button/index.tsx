import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./style";
import { colors } from "@/theme/colorTheme";
import { ButtonProps } from "@/types/button";

export function Button({
  title,
  icon,
  onPress,
  isSelected = false,
  size,
  variant = 'default'
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.container,
        size === "sm" && styles.smallContainer,
        
        isSelected && styles.isSelected,
        isSelected && variant === 'positive' && styles.positive,
        isSelected && variant === 'negative' && styles.negative,
      ]}
    >
      <MaterialIcons name={icon} size={24} color={colors.gray[0]} />
      <Text style={[styles.title,
      size === 'sm' && styles.smallTitle
      ]}>{title}</Text>
    </TouchableOpacity>
  );
}
