import { colors } from "@/theme/colorTheme";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "@/types/routes.params";
import { useNavigation } from "@react-navigation/native";

type NavigationProp = NativeStackNavigationProp<RoutesParams, "create">;

export function Header() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <MaterialIcons name="arrow-back" size={24} color={colors.gray[600]} />
      </TouchableOpacity>
      <Text style={styles.title}>Nova refeição</Text>
    </View>
  );
}
