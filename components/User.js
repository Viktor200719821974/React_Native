import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchaleOpacity} from 'react-native';

const User = ({item}) =>{
return (
<View style={[styles.userBox, styles.margins, styles.sizes]}>
<Text style={[styles.align]}> {item.name}</Text>
</View>
);
};
export default User;

let styles = StyleSheet.create({
userBox: {
        flex: 1,
        backgroundColor: 'silver'

},
margins:{
        marginBottom: 3
},
sizes: {
         width: '70%',
         height: 200
},
align: {
         textAlign: 'center'
}
});