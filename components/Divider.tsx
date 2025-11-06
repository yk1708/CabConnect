// src/components/Divider.tsx
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

export interface DividerProps {
  /** Thickness of the line (default = 1) */
  thickness?: number;
  /** Line colour (default = #e5e7eb – gray-200) */
  color?: string;
  /** Horizontal margin (default = 0) */
  marginHorizontal?: number;
  /** Vertical margin (default = 8) */
  marginVertical?: number;
  /** Full-width line (default = true) */
  fullWidth?: boolean;
  /** Optional custom style */
  style?: ViewStyle;
}

/**
 * Horizontal divider component – no Tailwind, only StyleSheet.
 */
const Divider: React.FC<DividerProps> = ({
  thickness = 1,
  color = '#e5e7eb',
  marginHorizontal = 0,
  marginVertical = 8,
  fullWidth = true,
  style,
}) => {
  const dividerStyle: ViewStyle = {
    borderTopWidth: thickness,
    borderTopColor: color,
    marginHorizontal,
    marginVertical,
    ...(fullWidth ? { width: '100%' } : {}),
  };

  return <View style={[dividerStyle, style]} />;
};

export default Divider;