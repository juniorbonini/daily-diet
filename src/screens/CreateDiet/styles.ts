import { colors } from "@/theme/colorTheme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: colors.gray[700]
  },
  formContainer: {
    height: '100%',
    backgroundColor: colors.gray[0],
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    gap: 40,
    marginTop: -22
  },
  inputRow: {
    flexDirection: 'row',
    marginTop: 55,
    gap: 20
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  textContainer: {
    marginBottom: 10,
    marginHorizontal: 15,
    fontSize: 14,
    color: colors.gray[600],
    fontWeight: 'bold'
  }
});
