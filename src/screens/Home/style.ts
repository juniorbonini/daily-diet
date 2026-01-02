import { StyleSheet } from "react-native";
import { colors } from "@/theme/colorTheme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
    paddingHorizontal: 28,
    paddingTop: 50,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  percentContainer: {
    marginBottom: 32,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray[500],
    marginBottom: 8,
  },

  dietContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 8,
  },

  dietInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  dietHour: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.gray[700],
  },

  separator: {
    fontSize: 14,
    color: colors.gray[400],
  },

  dietName: {
    fontSize: 14,
    color: colors.gray[600],
  },

  dietStyle: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  dietDate: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16
  }
});
