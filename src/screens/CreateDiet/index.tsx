import { RoutesParams } from "@/types/routes.params";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";

type NavigationProp = NativeStackNavigationProp<RoutesParams, 'create'>;

export function CreateDiet() {
  const navigation = useNavigation<NavigationProp>()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>CreateDiet Screen</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text>Feedback Diet</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <Text>Voltar a Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
