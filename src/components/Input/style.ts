import { colors } from "@/theme/colorTheme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 70,
  },
  label: {
    marginBottom: 15,
  },
  input: {
    padding: 16,
    color: colors.gray[700],
    fontSize: 14,
    borderColor: colors.gray[300],
    borderWidth: 1,
    borderRadius: 8,
  },
  smInput: {
    width: 153,
    height: 58,
  },
  lgInput: {
    height: 120,

  },
  InputOnFocus: {
    borderColor: colors.gray[700]
  },
});
