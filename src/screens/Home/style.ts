import { StyleSheet } from "react-native";
import { colors } from "../../theme/colorTheme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[200],
    marginTop: 50,
    paddingHorizontal: 25,
    gap: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    color: colors.gray[500]
  },

  dietContainer: {
    padding: 20,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.gray[400],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  dietCalcContainer: {
    width: 327,
    marginHorizontal: 'auto',
    height: 102,
    backgroundColor: colors.green["green-mid"],
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  dietName: {
  },
  textDiet: {
    color: colors.gray[500],
    fontSize: 16
  },
  titlePercentage: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  dietStyle: {
    width: 15,
    height: 15,
    borderRadius: 5,
    alignSelf: "center",
  },
});
