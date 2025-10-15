import { HomeScreen } from "@/components/Home";
import { router } from "expo-router";
import { Button, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <HomeScreen />

      <View style={{ padding: 24, paddingBottom: 50 }}>
        <Button title="Nova refeição" onPress={() => router.navigate("/diet")} />
      </View>
    </View>
  );
}
