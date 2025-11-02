import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface CheckBoxIconProps {
  value: boolean;
  onToggle: () => void;
  size?: number;
  color?: string;
}

const CheckBoxIcon: React.FC<CheckBoxIconProps> = ({
  value,
  onToggle,
  size = 20,
  color = '#000',
}) => {
  return (
    <TouchableOpacity onPress={onToggle}>
      <MaterialCommunityIcons
        name={value ? 'checkbox-marked' : 'checkbox-blank-outline'}
        size={size}
        color={color}
      />
    </TouchableOpacity>
  );
};

export default CheckBoxIcon;