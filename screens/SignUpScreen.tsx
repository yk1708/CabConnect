import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // ✅ use this instead of deprecated SafeAreaView
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

const { height } = Dimensions.get("window");

interface SignUpScreenProps {
  navigation: any; // ✅ Explicitly typed
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState<Date | null>(null); // ✅ Properly typed
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  // ✅ Type-safe handler for DateTimePicker
  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    setShowDatePicker(false);
    if (selectedDate) setDob(selectedDate);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Top Orange Section */}
          <View
            className="bg-orange-400 w-full"
            style={{ height: height * 0.45 }}
          >
            <View className="flex-col items-center justify-center mt-20">
              <MaterialCommunityIcons name="car" size={50} color="#fff" />
              <Text className="text-white text-3xl font-extrabold mt-4">
                Sign Up
              </Text>
              <Text className="text-white text-sm mt-2">
                Already have an account?{" "}
                <Text
                  className="underline"
                  onPress={() => navigation.navigate("SignIn")}
                >
                  Log In
                </Text>
              </Text>
            </View>
          </View>

          {/* Card Section */}
          <View className="flex-1 justify-center px-6">
            <View
              className="bg-white rounded-3xl shadow-lg p-6"
              style={{
                marginTop: height * -0.28,
                // shadowColor: '#000',
                // shadowOffset: { width: 0, height: 4 },
                // shadowOpacity: 0.2,
                // shadowRadius: 5,
                elevation: 5,
              }}
            >
              {/* Name Fields */}
              <View className="flex-row space-x-2 mb-4">
                <TextInput
                  className="flex-1 border border-gray-300 rounded-lg p-3 text-base"
                  placeholder="First Name"
                  value={firstName}
                  onChangeText={setFirstName}
                />
                <TextInput
                  className="flex-1 border border-gray-300 rounded-lg p-3 text-base"
                  placeholder="Last Name"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>

              {/* Email */}
              <TextInput
                className="border border-gray-300 rounded-lg p-3 mb-4 text-base"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              {/* DOB */}
              <TouchableOpacity
                className="border border-gray-300 rounded-lg p-3 mb-4 flex-row justify-between items-center"
                onPress={() => setShowDatePicker(true)}
              >
                <Text className="text-gray-700 text-base">
                  {dob ? dob.toLocaleDateString() : "Select Date of Birth"}
                </Text>
                <MaterialCommunityIcons
                  name="calendar"
                  size={24}
                  color="#555"
                />
              </TouchableOpacity>

              {showDatePicker && (
                <DateTimePicker
                  value={dob || new Date(2000, 0, 1)}
                  mode="date"
                  display="default"
                  maximumDate={new Date()}
                  onChange={handleDateChange} // ✅ Type-safe function
                />
              )}

              {/* Phone */}
              <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 mb-3">
                <Text className="mr-2 text-base">🇮🇳 +91</Text>
                <TextInput
                  className="flex-1 text-base"
                  placeholder="Phone Number"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
              </View>

              {/* Password */}
              <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 mb-3">
                <TextInput
                  className="flex-1 text-base"
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={hidePassword}
                />
                <TouchableOpacity
                  onPress={() => setHidePassword(!hidePassword)}
                >
                  <MaterialCommunityIcons
                    name={hidePassword ? "eye-off" : "eye"}
                    size={22}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>

              {/* Sign Up Button */}
              <TouchableOpacity className="bg-black rounded-lg py-4 items-center mb-4">
                <Text className="text-white text-lg font-semibold">
                  Sign Up
                </Text>
              </TouchableOpacity>

              {/* Divider */}
              <View className="flex-row items-center mb-4">
                <View className="flex-1 border-t border-gray-300" />
                <Text className="text-gray-400 mx-2 text-center text-base">
                  Or
                </Text>
                <View className="flex-1 border-t border-gray-300" />
              </View>

              {/* Google Sign-Up */}
              <TouchableOpacity className="flex-row items-center justify-center bg-gray-100 rounded-lg py-3">
                <MaterialCommunityIcons
                  name="google"
                  size={22}
                  color="#DB4437"
                />
                <Text className="ml-2 text-base text-gray-700 font-semibold">
                  Sign up with Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;