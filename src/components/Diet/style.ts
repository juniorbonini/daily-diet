import { colors } from "@/theme/colorTheme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 327,
        height: 49,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.gray[300],
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 15
    },
    hour: {
        fontWeight: 'bold'
    },
    divider: {
        height: 18,
        borderWidth: 1,
        backgroundColor: colors.gray[200]
    },
    name: {
        fontSize: 16
    },
    circle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        marginLeft: 'auto'
    }
})