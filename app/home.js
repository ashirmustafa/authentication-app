import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.homeTextLarge}>Logged in as ADMIN</Text>
            <Text style={styles.homeText}>Home Page</Text>
            <Button title='Logout' />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
    },
    homeTextLarge:{
        fontSize: 24,
        color: 'red',
        fontWeight: 'bold',
    }
})

export default Index;
