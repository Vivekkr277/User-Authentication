import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import welcome_1 from "../assets/welcome_1.png";

export default function WelcomeScreen({ navigation }) {
  return (
    <View className="h-full bg-cyan-200	">
      <StatusBar />
      <View className="items-center mt-14">
        <Text className="text-4xl font-medium ">Let's Get Started!</Text>
      </View>

      <View className="items-center mt-20">
        <Image source={welcome_1} style={{ height: 180, width: 180 }} />
      </View>

      <View className="justify-center items-center">
        <View className="bg-neutral-50 w-4/5  items-center p-2  mt-52 rounded-2xl">
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text className="text-2xl font-medium letter tracking-wide">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row mt-6 ">
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
