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

export type DietSection = {
  title: string;
  data: Diet[];
}

export type DietProps = {
  value: number;
  total?: number;
  showIcon?: boolean;
  isPositive: boolean;
  variant?: 'large' | 'default';
}
