import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import icon

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ExplorePage from "./pages/ExplorePage";
import CookbookPage from "./pages/CookbookPage";

export default function App() {
  const Tab = createBottomTabNavigator();
  <ion-icon name="book-outline"></ion-icon>;
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          sceneStyle: { marginTop: 50 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Explore") {
              iconName = focused ? "compass" : "compass-outline";
            } else if (route.name === "Cookbook") {
              iconName = focused ? "book" : "book-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#5550F2", // Màu icon khi tab được chọn
          tabBarInactiveTintColor: "gray", // Màu icon khi tab không được chọn
        })}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
        <Tab.Screen name="Explore" component={ExplorePage} />
        <Tab.Screen name="Cookbook" component={CookbookPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
