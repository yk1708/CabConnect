import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import PostRideScreen from "../screens/Home/RideDetails";
import { Home, MessagesSquare, User } from "lucide-react-native";

const Tab = createBottomTabNavigator();

// 🧩 Placeholder Component
interface PlaceholderProps {
  name: string;
}

const Placeholder = ({ name }: PlaceholderProps) => (
  <View className="flex-1 justify-center items-center bg-gray-100">
    <Text className="text-lg text-gray-900">{name}</Text>
  </View>
);

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 64,
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB", // gray-200
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: "#FF5A5F",
        tabBarInactiveTintColor: "#666",
        headerShown: false,
      }}
    >
      {/* 🏠 Home Tab */}
      <Tab.Screen
        name="Home"
        component={PostRideScreen}
        options={{
          tabBarIcon: ({ color }) => <Home color={color} size={24} />,
        }}
      />

      {/* 💬 Chat Tab */}
      <Tab.Screen
        name="Chat"
        component={() => <Placeholder name="Chat" />}
        options={{
          tabBarIcon: ({ color }) => <MessagesSquare color={color} size={24} />,
        }}
      />

      {/* 👤 Profile Tab */}
      <Tab.Screen
        name="Profile"
        component={() => <Placeholder name="Profile" />}
        options={{
          tabBarIcon: ({ color }) => <User color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
}
