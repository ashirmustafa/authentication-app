import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.homeTextLarge}>Login Page</Text>
            <TextInput placeholder='Enter email ' style={styles.textInput}/> 
            <TextInput placeholder='Enter password '  style={styles.textInput}/> 
            <Button title='Login' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
    },
    homeTextLarge: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    },
    textInput:{
        borderWidth: 1,
        padding: 10,
        width: 200,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    }
})

export default Login;
