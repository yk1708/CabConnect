import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import TabNavigator from './TabNavigator';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TabNavigator from './TabNavigator';
import NotificationScreen from '../screens/notification/NotificationScreen';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  HomeTabs: undefined; 
  Notification: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
      {/* Main App - Tab Navigation */}
      <Stack.Screen name="HomeTabs" component={TabNavigator} />
      <Stack.Screen name="Notification" component={NotificationScreen} />

    </Stack.Navigator>
  );
};

export default RootNavigator;
