// App.tsx
import { StatusBar } from "expo-status-bar";
import React from "react";
import AppNavigator from "./navigations/AppNavigator";  

export default function App() {
  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}