import { Colors } from "@/theme/Colors";
import { ActivityIndicator } from "react-native";
import { styles } from "./style";

export function Loading() {
    return (
        <ActivityIndicator color={Colors.gray[400]} style={styles.container} />
    )
}