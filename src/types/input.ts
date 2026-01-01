import { Control, FieldValues, Path } from "react-hook-form"
import { TextInputProps } from "react-native"

export type InputProps<T extends FieldValues> = TextInputProps & {
    control: Control<T>;
    name: Path<T>;
    label: string;
    multiLine: boolean;
    size?: 'sm' | 'md' | 'lg'
}