export type Diet = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isOnDiet: boolean;
};

export type CreateFormData = {
  name: string;
  description: string;
  date: string;
  hour: string;
}

export type DietData = {
  data: Diet;
  onPress: () => void;
}
