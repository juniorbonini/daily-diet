import { colors } from "@/theme/colorTheme";
import { fontFamily } from "@/theme/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 58,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray[700],
    borderRadius: 8,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 16,
    color: colors.gray[0],
    fontFamily: fontFamily.bold
  },
  smallTitle: {
    color: colors.gray[700],
    textAlign: 'center'
  },
  isSelected: {
    borderWidth: 1,
  },

  positive: {
    borderColor: colors.green["green-dark"],
    backgroundColor: colors.green["green-light"]
  },
  negative: {
    borderColor: colors.red["red-dark"],
    backgroundColor: colors.red["red-light"]
  },
  
   smallContainer: {
    width: 155,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: colors.gray[700],
    borderRadius: 8,
    backgroundColor: colors.gray[200]
   },

});
