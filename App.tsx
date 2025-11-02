import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-100">
      <Text className="text-2xl font-bold text-blue-700">
        🚀 Tailwind is Working!
      </Text>
      <Text className="text-gray-700 mt-2">
        If you see this styled text, setup is successful 🎉
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
