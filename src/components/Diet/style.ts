import { colors } from "@/theme/colorTheme";
import { fontFamily } from "@/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 327,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[300],
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },
  hour: {
    fontFamily: fontFamily.bold,
    fontSize: 14,
  },
  divider: {
    backgroundColor: colors.gray[300],
    width: 2,
  },
  name: {
    fontSize: 16,
    fontFamily: fontFamily.regular
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginLeft: "auto",
  },
});
