import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/ui/Button";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigations/RootNavigator";
import { MapPin, Calendar, DollarSign, Info, Bell } from "lucide-react-native";
import RecentRideItem from "../../components/RecentRideItem";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function PostRideScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [activeTab, setActiveTab] = useState("post");
  const [pickup, setPickup] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [fare, setFare] = useState("");


  const handleNotificationScreen = () => {
    navigation.navigate("Notification"); 
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1">
        {/* Header */}
        <View className="shadow-sm px-5 py-4 flex-row items-center justify-between">
          <Text className="text-2xl font-bold text-orange-500">RideZee</Text>
          <View className="relative">
            <TouchableOpacity onPress={handleNotificationScreen}>
              <Bell size={24} color="#666" />
            </TouchableOpacity> 
            <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2" />
          </View>
        </View>

        {/* 🚘 Post Ride / Get Ride Toggle */}
        <View className="flex-row bg-gray-100 rounded-xl p-2 mx-5 mt-4">
          <TouchableOpacity
            onPress={() => setActiveTab("post")}
            className={`flex-1 rounded-xl py-2 items-center ${
              activeTab === "post" ? "bg-white shadow-sm" : "bg-gray-100"
            }`}
          >
            <Text
              className={`text-sm font-semibold ${
                activeTab === "post" ? "text-black" : "text-gray-500"
              }`}
            >
              Post Ride
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab("get")}
            className={`flex-1 rounded-xl py-2 items-center ${
              activeTab === "get" ? "bg-white shadow-sm" : "bg-gray-100"
            }`}
          >
            <Text
              className={`text-sm font-semibold ${
                activeTab === "get" ? "text-black" : "text-gray-500"
              }`}
            >
              Get Ride
            </Text>
          </TouchableOpacity>
        </View>

        {/* Main Content */}
        <ScrollView className="flex-1 px-5 pt-5">
          {activeTab === "post" ? (
            // ======================== POST RIDE FORM ========================
            <View className="bg-white rounded-xl p-5 shadow-sm mb-5">
              {/* Pickup Place */}
              <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-2 mb-4">
                <MapPin size={20} color="#666" className="mr-3" />
                <TextInput
                  placeholder="Pickup Place"
                  value={pickup}
                  onChangeText={setPickup}
                  className="flex-1 text-base"
                />
                <TouchableOpacity>
                  <Text className="text-orange-500 text-sm">Open Maps</Text>
                </TouchableOpacity>
              </View>

              {/* Dates */}
              <View className="flex-row gap-3 mb-4">
                <View className="flex-1 flex-row items-center border border-gray-300 rounded-lg px-4 py-2">
                  <Calendar size={20} color="#666" className="mr-3" />
                  <TextInput
                    placeholder="From Date"
                    value={fromDate}
                    onChangeText={setFromDate}
                    className="flex-1"
                  />
                </View>
                <View className="flex-1 flex-row items-center border border-gray-300 rounded-lg px-4 py-2">
                  <Calendar size={20} color="#666" className="mr-3" />
                  <TextInput
                    placeholder="To Date"
                    value={toDate}
                    onChangeText={setToDate}
                    className="flex-1"
                  />
                </View>
              </View>

              {/* Fare */}
              <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-2 mb-5">
                <DollarSign size={20} color="#666" className="mr-3" />
                <TextInput
                  placeholder="Fare"
                  value={fare}
                  onChangeText={setFare}
                  keyboardType="numeric"
                  className="flex-1 text-base"
                />
                <View className="flex-row items-center">
                  <Info size={16} color="#999" className="mr-1" />
                  <Text className="text-xs text-gray-500">Negotiable</Text>
                </View>
              </View>

            {/* Confirm Button */}
            <Button title="Confirm" size="lg"/>

              {/* Guide Link */}
              <Text className="text-start text-sm text-gray-600 mt-4">
                Not sure what to do?{" "}
                <Text className="text-orange-500 underline">Read our guide</Text>
              </Text>
            </View>
          ) : (
            // ======================== GET RIDE SCREEN ========================
            <View className="bg-white rounded-xl p-5 shadow-sm mb-5">
              <Text className="text-lg font-semibold mb-4">
                Search for Available Rides
              </Text>

              <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-3 mb-4">
                <MapPin size={20} color="#666" className="mr-3" />
                <TextInput
                  placeholder="Enter Destination"
                  className="flex-1 text-base"
                />
              </View>

              <TouchableOpacity className="bg-orange-500 rounded-full py-4 items-center">
                <Text className="text-white font-semibold text-lg">
                  Find Ride
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Recent Rides Section (only for Post tab) */}
          {activeTab === "post" && (
            <>
              <View className="flex-row justify-between items-center mb-4 mt-2">
                <Text className="text-lg font-semibold">
                  Recent Posted Rides
                </Text>
                <TouchableOpacity>
                  <Text className="text-orange-500 text-sm">View all</Text>
                </TouchableOpacity>
              </View>

              <RecentRideItem
                from="Pune"
                to="Manali"
                price="1,798.00"
                status="In Negotiation"
              />
              <RecentRideItem
                from="Pune"
                to="Manali"
                price="1,798.00"
                status="Accepted By Driver"
              />
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
