// src/components/Button.tsx
import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  GestureResponderEvent,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  useColorScheme,
} from "react-native";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  /** Button label */
  title: string;
  /** Visual style */
  variant?: ButtonVariant;
  /** Size */
  size?: ButtonSize;
  /** Show loading spinner */
  loading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Left icon (any React node) */
  leftIcon?: React.ReactNode;
  /** Right icon (any React node) */
  rightIcon?: React.ReactNode;
  /** Press handler */
  onPress?: (e: GestureResponderEvent) => void;
  /** Optional custom container style */
  style?: ViewStyle;
  /** Optional custom text style */
  textStyle?: TextStyle;
}

/**
 * Themed Button component — automatically adapts to Light/Dark mode.
 */
const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  onPress,
  style,
  textStyle,
}) => {
  const theme = useColorScheme(); // 'light' | 'dark'
  const isDark = theme === "dark";

  // ── Theme colors ──
  const colors = {
    light: {
      primaryBg: "#000000",
      primaryText: "#ffffff",
      secondaryBg: "#6b7280",
      secondaryText: "#ffffff",
      border: "#000000",
      text: "#000000",
    },
    dark: {
      primaryBg: "#ffffff",
      primaryText: "#000000",
      secondaryBg: "#9ca3af",
      secondaryText: "#000000",
      border: "#ffffff",
      text: "#ffffff",
    },
  };

  const palette = isDark ? colors.dark : colors.light;
  const isDisabled = disabled || loading;

  // ────── Container styles ──────
  const containerStyle = StyleSheet.flatten([
    styles.base,
    styles[size],
    variant === "primary" && { backgroundColor: palette.primaryBg },
    variant === "secondary" && { backgroundColor: palette.secondaryBg },
    variant === "outline" && {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: palette.border,
    },
    variant === "ghost" && { backgroundColor: "transparent" },
    isDisabled && styles.disabled,
    style,
  ]);

  // ────── Text styles ──────
  const textStyleCombined = StyleSheet.flatten([
    styles.textBase,
    styles[`${size}Text`],
    {
      color:
        variant === "primary"
          ? palette.primaryText
          : variant === "secondary"
          ? palette.secondaryText
          : palette.text,
    },
    isDisabled && styles.disabledText,
    textStyle,
  ]);

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          size={size === "sm" ? "small" : "small"}
          color={
            variant === "primary" || variant === "secondary"
              ? palette.primaryText
              : palette.text
          }
        />
      ) : (
        <>
          {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
          <Text style={textStyleCombined}>{title}</Text>
          {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999, // pill shape
  },

  // ── Sizes ──
  sm: { height: 36, paddingHorizontal: 16 },
  md: { height: 48, paddingHorizontal: 24 },
  lg: { height: 56, paddingHorizontal: 32 },

  // ── Text ──
  textBase: {
    fontWeight: "600",
    textAlign: "center",
  },
  smText: { fontSize: 14 },
  mdText: { fontSize: 16 },
  lgText: { fontSize: 18 },

  // ── Icons ──
  iconLeft: { marginRight: 8 },
  iconRight: { marginLeft: 8 },

  // ── Disabled ──
  disabled: { opacity: 0.6 },
  disabledText: { opacity: 0.7 },
});

export default Button;
