import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home.js'
import Constants from 'expo-constants'
export default function App() {
    return (
        <View style={styles.container}>
            <Home/>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        marginTop:Constants.statusBarHeight,
        
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
