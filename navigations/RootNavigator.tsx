import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import SignInScreen from '../screens/SignInScreen';
// import SignUpScreen from '../screens/SignUpScreen';

export type RootStackParamList = {
  SignIn: undefined;
//   SignUp: undefined;
//   Home: undefined; // TabNavigator
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
      {/* <Stack.Screen name="Home" component={TabNavigator} /> */}
    </Stack.Navigator>
  );
};

export default RootNavigator;
