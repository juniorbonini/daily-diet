import { ButtonProps } from "@/types/Types";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/theme/Colors";

export function Button({ title, icon, onPress, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest} activeOpacity={.7} onPress={onPress}>
        { icon && <MaterialIcons name={icon} size={18} color={Colors.gray.white} />}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
