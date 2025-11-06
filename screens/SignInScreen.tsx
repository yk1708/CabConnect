// screens/SignInScreen.tsx
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CheckBoxIcon from "../components/ui/CheckBoxIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigations/RootNavigator";

type SignInNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "SignIn"
>;

const { height } = Dimensions.get("window");

const SignInScreen = () => {
  const navigation = useNavigation<SignInNavigationProp>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const toggleRememberMe = () => setRememberMe((prev) => !prev);

  const goToSignUp = () => {
    navigation.navigate("SignUp"); // now type-safe
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 bg-white relative">
            {/* Top Orange Background */}
            <View
              className="bg-orange-400 absolute w-full"
              style={{ height: height / 2 }}
            >
              <View className="flex-col items-center space-y-2 mt-20">
                <MaterialCommunityIcons name="car" size={50} color="#fff" />
                <Text className="text-white text-4xl font-extrabold mt-4">
                  Sign in to your
                </Text>
                <Text className="text-white text-4xl font-extrabold mt-1">
                  {" "}
                  Account
                </Text>
                <Text className="text-white text-sm">
                  Enter your email and password to log in
                </Text>
              </View>
            </View>

            {/* Login Card */}
            <View className="flex-1 justify-center px-6 mt-20">
              <View className="bg-white rounded-2xl shadow-lg p-6">
                {/* Google Login */}
                <TouchableOpacity className="flex-row items-center justify-center bg-gray-100 rounded-md py-3 mb-6">
                  <Text className="ml-2 text-base text-gray-700 font-semibold">
                    Continue with Google
                  </Text>
                </TouchableOpacity>

                <View className="flex-row items-center mb-5">
                  <View className="flex-1 border-t border-gray-300" />
                  <Text className="text-sm text-gray-500 mx-2 text-center">
                    Or login with
                  </Text>
                  <View className="flex-1 border-t border-gray-300" />
                </View>

                {/* Email Input */}
                <TextInput
                  className="border border-gray-300 rounded-md p-3 mb-4"
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />

                {/* Password Input */}
                <TextInput
                  className="border border-gray-300 rounded-md p-3 mb-2"
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />

                {/* Remember Me & Forgot Password */}
                <View className="flex-row items-center justify-between mb-6">
                  <TouchableOpacity
                    className="flex-row items-center"
                    onPress={toggleRememberMe}
                  >
                    <CheckBoxIcon
                      value={rememberMe}
                      onToggle={toggleRememberMe}
                      size={20}
                      color="blue"
                    />
                    <Text className="text-gray-700 ml-2">Remember me</Text>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Text className="text-blue-500 underline">
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Log In Button */}
                <TouchableOpacity className="bg-black rounded-md py-4 items-center mb-4">
                  <Text className="text-white text-lg font-semibold">
                    Log In
                  </Text>
                </TouchableOpacity>

                {/* Sign Up */}
                <View className="items-center flex-row justify-center">
                  <Text className="text-gray-700">Don't have an account?</Text>
                  <TouchableOpacity
                    onPress={goToSignUp}
                    activeOpacity={0.7}
                  >
                    <Text className="text-blue-500 ml-1">Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;