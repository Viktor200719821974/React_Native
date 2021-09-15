import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text, Button, TouchaleOpacity} from 'react-native';
import {getUsers} from '../services/api.service';
import User from './User';

const Users = () =>{
let [users, setUsers] = useState();
useEffect(()=>{
getUsers().then(value => setUsers([...value]));
}, []);
return (
<View>
<FlatList data={users} renderItem = {({item}) => {
return
<User item={item}/>
}}
/>
</View>
);
};
export default Users;

let styles = StyleSheet.create({});