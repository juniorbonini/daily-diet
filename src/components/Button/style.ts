import { colors } from "@/theme/colorTheme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 50,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    backgroundColor: colors.gray[700],
    borderRadius: 8,
  },
  title: {
    color: colors.gray[0],
    fontSize: 18
  }
});
