// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import SignInScreen from '../screens/SignInScreen';
// import SignUpScreen from '../screens/SignUpScreen';

// export type TabParamList = {
//   SignIn: undefined;
//   SignUp: undefined;
// };

// const Tab = createBottomTabNavigator<TabParamList>();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#007AFF',
//         tabBarInactiveTintColor: 'gray',
//       }}
//     >
//       <Tab.Screen
//         name="SignIn"
//         component={SignInScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="SignUp"
//         component={SignUpScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;
