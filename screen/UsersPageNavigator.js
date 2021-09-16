import React from "react";
import {StyleSheet} from "react-native";
// import {View, Text, Button, TouchableOpacity} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Users from "../components/Users";
import UsersDetails from "../screen/UsersDetails";

let StackNavigator = createStackNavigator();

const UsersPageNavigator = () =>{


return (
<StackNavigator.Navigator>

<StackNavigator.Screen name={'Users'} component={Users}/>
<StackNavigator.Screen name={'Users Details'} component={UsersDetails}/>

</StackNavigator.Navigator>
);
};

export default UsersPageNavigator;

let styles = StyleSheet.create({});