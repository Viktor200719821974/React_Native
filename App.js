import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import Users from "./components/Users";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react=navigation/stack";
import Home from "./components/Home";
//import UsersDetails from "./screen/Userdetails";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UsersPageNavigator from "./screen/UsersPageNavigator";

let BottomTabNavigator = createBottomTabNavigator();
let StackNavigator = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <BottomTabNavigator.Navigator tabBarOption={{tabStyle: justifyContent: 'center', alignItems: 'center'}}>
    <BottomTabNavigator.Screen name={'UsersPageNavigator'} component={UsersPageNavigator} />
    <BottomTabNavigator.Screen name={'Home'} component={Home} /> />

    </BottomTabNavigator.Navigator>
//    <StackNavigator.Navigator>
//    <StackNavigator.Screen name={'Users'} component={Users} />
//    <StackNavigator.Screen name={'Home'} component={Home} />
//    <StackNavigator.Screen name={'Users Details'} component={UsersDetails} />
//    </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
