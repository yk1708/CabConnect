import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import {
  ArrowLeft,
  MoreVertical,
  Camera,
  AlertCircle,
  DollarSign,
  ChevronDown,
} from "lucide-react-native";

const notifications = [
  {
    id: "1",
    icon: <Camera size={20} color="#000" />,
    title: "Payment Received",
    message:
      "Ride Pune-Goa has been completed and your payment has been credited!",
    time: "34 Minutes ago",
  },
  {
    id: "2",
    icon: <Camera size={20} color="#000" />,
    title: "Payment Received",
    message:
      "Ride Pune-Goa has been completed and your payment has been credited!",
    time: "15 Minutes ago",
  },
  {
    id: "3",
    icon: <AlertCircle size={20} color="#000" />,
    title: "Payment Received",
    message:
      "Ride Pune-Goa has been completed and your payment has been credited!",
    time: "52 Minutes ago",
  },
  {
    id: "4",
    icon: <DollarSign size={20} color="#000" />,
    title: "Payment Received",
    message:
      "Ride Pune-Goa has been completed and your payment has been credited!",
    time: "35 Minutes ago",
  },
  {
    id: "5",
    icon: <DollarSign size={20} color="#000" />,
    title: "Payment Received",
    message:
      "Ride Pune-Goa has been completed and your payment has been credited!",
    time: "24 Minutes ago",
  },
];

export default function NotificationScreen() {
  return (
    <View className="flex-1 bg-orange-400">
      <StatusBar barStyle="light-content" backgroundColor="#fb923c" />

      {/* ==================== ORANGE HEADER ==================== */}
      <View className="flex-row items-center justify-between px-4 pt-12 pb-6">
        <TouchableOpacity>
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold">Notification</Text>
        <TouchableOpacity>
          <MoreVertical size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* ==================== WHITE CARD ==================== */}
      <View className="flex-1 bg-white rounded-t-3xl shadow-lg overflow-hidden mt-4">
        <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
          <Text className="text-lg font-bold text-gray-900">
            Latest notification
          </Text>
          <TouchableOpacity className="flex-row items-center bg-gray-100 px-3 py-1.5 rounded-full">
            <Text className="text-gray-700 text-sm font-medium mr-1">
              Sort By
            </Text>
            <ChevronDown size={14} color="#374151" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={notifications}
          keyExtractor={(i) => i.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View className="h-px bg-gray-200 mx-14" />
          )}
          contentContainerStyle={{ paddingBottom: 32 }}
          renderItem={({ item }) => (
            <View className="flex-row items-start py-4 px-4">
              {/* Icon + Red Dot */}
              <View className="relative mr-3">
                <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
                  {item.icon}
                </View>
                <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
              </View>

              {/* Text */}
              <View className="flex-1">
                <Text className="text-gray-900 font-semibold text-base">
                  {item.title}
                </Text>
                <Text className="text-gray-600 text-sm mt-0.5 leading-5">
                  {item.message}
                </Text>
                <Text className="text-gray-400 text-xs mt-1">{item.time}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}