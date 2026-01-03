import { colors } from "@/theme/colorTheme";
import { fontFamily } from "@/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: "100%",
    alignItems: "center",
    padding: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -35,
    backgroundColor: colors.gray[0],
    gap: 15,

  },
  title: {
    fontSize: 19,
    fontFamily: fontFamily.bold,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 20,
  },
  text: {
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
    fontSize: 14,
    textAlign: 'center'
  },
  info: {
    flexDirection: "row",
    gap: 15,
  },
  success: {
    backgroundColor: colors.green["green-light"],
    width: 175,
    height: 107,
    paddingHorizontal: 16,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  fail: {
    backgroundColor: colors.red["red-light"],
    width: 175,
    height: 107,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  sequence: {
    width: 365,
    height: 89,
    backgroundColor: colors.gray[200],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  total: {
    width: 365,
    height: 89,
    backgroundColor: colors.gray[200],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 170
  }
});
