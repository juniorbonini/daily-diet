import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
