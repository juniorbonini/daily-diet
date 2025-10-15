import { MaterialIcons } from "@expo/vector-icons";

export type CreateDietDTO = {
  name: string;
  description: string;
  date: Date;
  isDietFood: boolean;
};

export type HomeProps = {
  percentage: string;
  description: string;
};

export type ButtonProps = {
  title: string;
  onPress: () => void;
  icon?:  keyof typeof MaterialIcons.glyphMap;
};
