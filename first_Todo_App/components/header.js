import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        
        height:100,
        paddingTop:68,
        backgroundColor:'coral',
        width:500,
    },
    title:{
        textAlign:'center',
        color: 'black',
        fontSize:20,
        fontWeight:'bold',
        
    }

})