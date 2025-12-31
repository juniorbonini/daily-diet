import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Statistic } from "../screens/Statics";
import { Feedback } from "../screens/Feedback";
import { EditDiet } from "../screens/EditDiet";
import { CreateDiet } from "../screens/CreateDiet";
import { DietDetails } from "../screens/DietDetails";
import { RoutesParams } from "../types/routes.params";

const Stack = createNativeStackNavigator<RoutesParams>();

export function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="feedback" component={Feedback} />
      <Stack.Screen name="statistics" component={Statistic} />
      <Stack.Screen name="create" component={CreateDiet} />
      <Stack.Screen name="edit" component={EditDiet} />
      <Stack.Screen name="details" component={DietDetails} />
    </Stack.Navigator>
  );
}
