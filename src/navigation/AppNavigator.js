import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ParentTabNavigator from "./ParentTabNavigator";
import StudentTabNavigator from "./StudentTabNavigator";
import AddChildScreen from "../screens/parent/AddChildScreen";
import AccountSwitcherScreen from "../screens/AccountSwitcherScreen";
import ChildDetailScreen from "../screens/parent/ChildDetailScreen";
import AssignmentSubmissionScreen from "../screens/student/AssignmentSubmissionScreen";
import PaymentScreen from "../screens/parent/PaymentScreen";

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
      <Stack.Screen name="ChildDetail" component={ChildDetailScreen} />
      <Stack.Screen
        name="AssignmentSubmission"
        component={AssignmentSubmissionScreen}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        screenOptions={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
