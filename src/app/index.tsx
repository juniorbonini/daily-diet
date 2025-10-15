import { Button } from "@/components/Button";
import { HomeScreen } from "@/components/Home";
import { Colors } from "@/theme/Colors";
import { fontFamily } from "@/theme/fontFamly";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen
        percentage="50,50%"
        description="das refeições dentro da dieta"
      />

      <View>
        <Text style={{ fontFamily: fontFamily.regular, fontSize: 16, marginBottom: 10, color: Colors.gray[100] }}>Refeições</Text>
        <Button
          title="Nova refeição"
          onPress={() => router.navigate("/diet")}
          icon="add"
        >
        </Button>
      </View>
    </View>
  );
}
