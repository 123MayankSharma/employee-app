import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home.js";
import Constants from "expo-constants";
import CreateEmployee from "./screens/CreateEmployee.js";
import Profile from "./screens/Profile.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <View style={styles.container}>
      {/* <Stack.Navigator> */}
      {/*   <Stack.Screen name="Home" component={Home} /> */}
      {/*   <Stack.Screen name="Profile" component={Profile} /> */}
      {/*   <Stack.Screen name="Create" component={CreateEmployee} /> */}
      {/* </Stack.Navigator> */}
      {/* <Profile/> */}
     {/*  <CreateEmployee/> */}
     <Home/>
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    marginTop: Constants.statusBarHeight,

    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
