import { StyleSheet } from "react-native";

import { Colors, fontFamily } from "@/theme/Global-Fonts-Colors";

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.gray[200],
    width: "100%",
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
    cursor: 'pointer'
  },
  title: {
    color: Colors.gray.white,
    fontFamily: fontFamily.bold
  }
});
