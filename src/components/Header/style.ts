import { colors } from "@/theme/colorTheme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 120,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.gray[300],
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 'auto'
  },
});
