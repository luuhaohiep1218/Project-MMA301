import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Start from "./pages/Start";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RecipeByCategory from "./pages/RecipeByCategory";
import MainTabNavigator from "./navigation/MainTabNavigator"; // Import đúng

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="RecipeByCategory" component={RecipeByCategory} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
