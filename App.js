import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home.js";
import Constants from "expo-constants";
import CreateEmployee from "./screens/CreateEmployee.js";
import Profile from "./screens/Profile.js";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "teal" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{title:"Employees"}}/>
        <Stack.Screen name="Profile" component={Profile} options={{title:"Employee Profile"}}/>
        <Stack.Screen name="Create" component={CreateEmployee} options={{title:"Enter Employee Info"}}/>
      </Stack.Navigator>
    </View>
  );
}

const containerTheme = {
  dark: true,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "rgb(0, 0, 0)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export default () => {
  return (
    <NavigationContainer theme={containerTheme}>
      <App />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    /*  marginTop: Constants.statusBarHeight, */

    // alignItems: 'center',
    // justifyContent: 'center',
  },
});


//10.0.2.2:8000
