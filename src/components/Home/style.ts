import { Colors, fontFamily } from "@/theme/Global-Fonts-Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  headerContainer: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 55
  },
  dietContainer: {
    backgroundColor: Colors.green["green-medium"],
    width: 327,
    height: 102,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    borderRadius: 8
  },
  percentageText: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    color: Colors.gray[100]
  },
  descriptionText: {
    fontFamily: fontFamily.regular,
    color: Colors.gray[200]
  },
   logoImage: {
    color: Colors.green["green-dark"]
   }
});
