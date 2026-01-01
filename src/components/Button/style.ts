import { colors } from "@/theme/colorTheme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 58,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    backgroundColor: colors.gray[700],
    borderRadius: 8,
    marginHorizontal: 'auto',
    marginBottom: 35
  },
  title: {
    fontSize: 16,
    color: colors.gray[0],
    fontWeight: 'bold',
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
    width: 150,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.gray[700],
    borderRadius: 8,
    backgroundColor: colors.gray[200]
   }
});
