import { colors } from "@/theme/colorTheme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 327,
    marginHorizontal: "auto",
    height: 102,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    color: colors.gray[500],
    fontSize: 14,
  },
  percentage: {
    fontSize: 35,
    fontWeight: "bold",
  },
  positive: {
    backgroundColor: colors.green["green-light"]
  },
  negative: {
    backgroundColor: colors.red["red-light"]
  }
});
