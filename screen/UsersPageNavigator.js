import React from "react";
import {StyleSheet} from "react-native";
import {View, Text, Button, TouchableOpacity} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Users from "../components/Users";
import UsersDetails from "../components/UsersDetails";

let StackNavigator = createStackNavigator();

const UsersPageNavigator = (props) =>{


return (
<StackNavigator.Navigator>

<StackNavigator.Navigator.Screen name={'Users'} component={Users}>
<StackNavigator.Navigator.Screen name={'Users Details'} component={UsersDetails}>

</StackNavigator.Navigator>
);
};
export default UsersPageNavigator;

let styles = StyleSheet.create({});