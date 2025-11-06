// src/components/Button.tsx
import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  GestureResponderEvent,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

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

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  onPress,
  style,
  textStyle,
}) => {
  const isDisabled = disabled || loading;

  // ────── Container styles ──────
  const containerStyle = StyleSheet.flatten([
    styles.base,
    styles[variant],
    styles[size],
    isDisabled && styles.disabled,
    style,
  ]);

  // ────── Text styles ──────
  const textStyleCombined = StyleSheet.flatten([
    styles.textBase,
    styles[`${variant}Text`],
    styles[`${size}Text`],
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
          size={size === 'sm' ? 'small' : 'small'}
          color={variant === 'primary' || variant === 'secondary' ? '#fff' : '#000'}
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

/* -------------------------------------------------------------
   StyleSheet – all styling lives here (no Tailwind)
   ------------------------------------------------------------- */
const styles = StyleSheet.create({
  // Base
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999, // pill shape
  },

  // ── Sizes ──
  sm: { height: 36, paddingHorizontal: 16 },
  md: { height: 48, paddingHorizontal: 24 },
  lg: { height: 56, paddingHorizontal: 32 },

  // ── Variants ──
  primary: { backgroundColor: '#000' },
  secondary: { backgroundColor: '#6b7280' },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#000',
  },
  ghost: { backgroundColor: 'transparent' },

  // ── Text ──
  textBase: {
    fontWeight: '600',
    textAlign: 'center',
  },
  primaryText: { color: '#fff' },
  secondaryText: { color: '#fff' },
  outlineText: { color: '#000' },
  ghostText: { color: '#000' },

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