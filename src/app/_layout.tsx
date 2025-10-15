import { Loading } from "@/components/Loading";
import { Colors } from "@/theme/Colors";
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import { Stack } from "expo-router";

export default function RootLayout() {
  const backgroundColor = Colors.gray.white;
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor, paddingHorizontal: 32 },
        
      }}
    />
  );
}
