import { colors } from "@/theme/colorTheme";
import { fontFamily } from "@/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 70,
  },
  label: {
    marginBottom: 5,
    fontFamily: fontFamily.bold
  },
  input: {
    padding: 16,
    color: colors.gray[700],
    fontSize: 14,
    borderColor: colors.gray[300],
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: fontFamily.regular
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
    errorInput: {
      borderColor: colors.red["red-dark"]
  },
  errorMessage: {
    marginTop: 4,
    color: colors.red["red-dark"],
    fontFamily: fontFamily.regular,
    fontSize: 12,
  }
});
