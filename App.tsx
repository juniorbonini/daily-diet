import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import { Routes } from "./src/routes";
import { Loading } from "@/components/Loading";

export default function App() {
  const fontsLoaded = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return <Routes />;
}
