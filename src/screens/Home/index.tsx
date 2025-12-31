import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";

type NavigationProp = NativeStackNavigationProp<any>;

export function Home() {
  const navigation = useNavigation<NavigationProp>()
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('create')}>
        <Text>Criar refeição(criar uma refeição)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('statistics')}>
        <Text>Statistics(todas refeições registradas)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('edit')}>
        <Text>Edit Diet(editar uma refeição)</Text>
      </TouchableOpacity>
    </View>
  );
}
