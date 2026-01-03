import { ActivityIndicator } from "react-native";
import { styles } from "./style";
import { colors } from "@/theme/colorTheme";

export function Loading() {
    return <ActivityIndicator style={styles.container} color={colors.gray[600]} />
}