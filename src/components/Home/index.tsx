import { Image, Text, View } from "react-native";


import { styles } from "./style";
import { HomeProps } from "@/types/Types";

const UserSource = require("@/assets/user.png");
const LogoSource = require("@/assets/daily-diet-logo.png");

export function HomeScreen({ percentage, description }: HomeProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={LogoSource} />
        <Image source={UserSource} />
      </View>

      <View style={styles.dietContainer}>
        <Text style={styles.percentageText}>{percentage}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
}
