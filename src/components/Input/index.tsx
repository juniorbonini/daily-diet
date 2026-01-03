import { InputProps } from "@/types/input";
import { useRef, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { styles } from "./style";

export function Input<T extends FieldValues>({
  name,
  label,
  control,
  multiLine,
  size,
  rules,
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
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
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
                error && styles.errorInput
              ]}
              ref={inputRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onEndEditing={handleFocus}
              {...rest}
            />
            {error && (
              <Text style={styles.errorMessage}>
                {error.message}
              </Text>
            )}
          </View>
        );
      }}
    />
  );
}
