import { colors } from "@/theme/colorTheme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 120,
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  title: {
    marginHorizontal: "auto",
    fontSize: 22,
  },
  content: {
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -25,
    backgroundColor: colors.gray[0],
    padding: 40,
  },
  nameContainer: {
    gap: 10,
    marginBottom: 25,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    color: colors.gray[600],
    fontSize: 15,
  },
  date: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  dateText: {
    color: colors.gray[600],
  },
  tag: {
    flexDirection: "row",
    backgroundColor: colors.gray[200],
    width: 125,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    gap: 5,
    marginTop: 10,
  },
  status: {
    width: 8,
    height: 8,
    borderRadius: 20,
  },
  buttonContainer: {
    marginTop: 400,
    gap: 10
  },
});
