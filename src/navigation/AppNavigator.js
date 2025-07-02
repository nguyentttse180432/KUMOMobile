import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ParentTabNavigator from "./ParentTabNavigator";
import StudentTabNavigator from "./StudentTabNavigator";
import AddChildScreen from "../screens/parent/AddChildScreen";
import AccountSwitcherScreen from "../screens/AccountSwitcherScreen";
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ParentTabs" component={ParentTabNavigator} />
      <Stack.Screen name="StudentTabs" component={StudentTabNavigator} />
      <Stack.Screen name="AddChild" component={AddChildScreen} />
      <Stack.Screen name="AccountSwitcher" component={AccountSwitcherScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
