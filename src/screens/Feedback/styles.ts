import { colors } from "@/theme/colorTheme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200
  },
  feedbacktextContainer: {
    alignItems: "center",
    gap: 10,
    marginBottom: 70
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.green["green-dark"],
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  strongText: {
    fontWeight: 'bold'
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35
  },
  titleRed: {
    fontSize: 28,
    color: colors.red["red-dark"],
    fontWeight: 'bold'
  },

});
