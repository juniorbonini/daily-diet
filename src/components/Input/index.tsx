import { InputProps } from "@/types/input";
import { useRef, useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { styles } from "./style";

export function Input<T extends FieldValues>({
  control,
  name,
  label,
  multiLine,
  size,
  ...rest
}: InputProps<T>) {
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);
  const isMultiline = multiLine || size === "lg";

  function handleFocus() {
    setIsFocused(true);
  }
  function handleBlur() {
    setIsFocused(false);
  }
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <TextInput
              value={value}
              onChangeText={onChange}
              multiline={isMultiline}
              numberOfLines={isMultiline ? 4 : 1}
              style={[
                styles.input,
                size === "sm" && styles.smInput,
                size === "lg" && styles.lgInput,
                isFocused && styles.InputOnFocus,
              ]}
              ref={inputRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onEndEditing={handleFocus}
              {...rest}
            />
          </View>
        );
      }}
    />
  );
}
