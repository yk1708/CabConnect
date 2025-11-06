import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface RecentRideItemProps {
  from: string;
  to: string;
  price: string;
  status: string;
}

export default function RecentRideItem({
  from,
  to,
  price,
  status,
}: RecentRideItemProps) {
  const isAccepted = status === "Accepted By Driver";

  return (
    <TouchableOpacity className="flex-row justify-between items-center p-4 bg-white rounded-xl mb-3 shadow">
      <View>
        <Text className="font-semibold text-gray-800">{from}</Text>
        <Text className="text-sm text-gray-500">{to}</Text>
      </View>

      <View className="items-end">
        <Text className="font-bold text-lg text-gray-900">Rs. {price}</Text>
        <Text
          className={`text-xs ${
            isAccepted ? "text-green-600" : "text-yellow-600"
          }`}
        >
          {status}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
