import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { COLORS } from '../constants/colors';
import { SIZES } from '../constants/sizes';

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  label,
  error,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError, inputStyle]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={COLORS.lightText}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.margin,
  },
  label: {
    fontSize: SIZES.body3,
    color: COLORS.text,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.lightText,
    borderRadius: SIZES.radius,
    paddingHorizontal: 16,
    fontSize: SIZES.body2,
    color: COLORS.text,
    backgroundColor: COLORS.white,
  },
  inputError: {
    borderColor: COLORS.error,
  },
  errorText: {
    color: COLORS.error,
    fontSize: SIZES.body3,
    marginTop: 4,
  },
});

export default Input;
