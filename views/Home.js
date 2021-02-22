import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

const Home = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>Bienvenido a la app</Text>
                <StatusBar style="auto" />
            </View>
        </>
    );


}

export default Home;