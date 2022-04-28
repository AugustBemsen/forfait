import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Airtime from "./screens/Airtime";
import InternetData from "./screens/InternetData";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerTitle: "" }}
          name="Airtime"
          component={Airtime}
        />
        <Stack.Screen
          name="Data"
          options={{ headerTitle: "" }}
          component={InternetData}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
