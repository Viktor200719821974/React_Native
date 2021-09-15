import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchaleOpacity} from 'react-native';

const User = ({item}) =>{
return (
<View>
<Text> {item.name}</Text>
</View>
);
};
export default User;

let styles = StyleSheet.create({});