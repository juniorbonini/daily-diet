import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./styles";
import { DietProps } from "@/types/diet";
import { colors } from "@/theme/colorTheme";
import { RoutesParams } from "@/types/routes.params";

type NavigationProp = NativeStackScreenProps<RoutesParams, 'statistics'>

export function Percent({ value, isPositive, variant, showIcon = false }: DietProps) {
  const navigation = useNavigation<NavigationProp>()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('statistics')}
      activeOpacity={0.7}
      style={[styles.container, isPositive ? styles.positive : styles.negative, variant && styles.largeContainer]}
    >
     {showIcon && (
       <MaterialIcons
        name="arrow-outward"
        size={26}
        color={isPositive ? `${colors.green["green-dark"]}` : `${colors.red["red-dark"]}`}
        style={{ position: "absolute", top: 5, right: 5 }}
      />
     ) }
      <Text style={styles.percentage}>{value}%</Text>
      <Text style={styles.text}>das refeições dentro da dieta</Text>
    </TouchableOpacity>
  );
}
