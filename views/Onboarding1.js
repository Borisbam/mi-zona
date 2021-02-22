import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
    BalsamiqSans_700Bold,
    BalsamiqSans_700Bold_Italic,
} from '@expo-google-fonts/balsamiq-sans';

import { Entypo } from '@expo/vector-icons';



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        backgroundColor: '#fff',
        textAlign: 'center',
        paddingTop: 50,
        fontSize: 30,
        fontFamily: 'BalsamiqSans_400Regular'
    }
});

const Onboarding1 = ({ navigation }) => {

    let [fontsLoaded] = useFonts({
        BalsamiqSans_400Regular,
        BalsamiqSans_400Regular_Italic,
        BalsamiqSans_700Bold,
        BalsamiqSans_700Bold_Italic,
    });

    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('onboarding-1')
            if (value) {
                navigation.navigate('Onboarding-2')
            } else {
                setLoading(false)
            }

        } catch (e) {
            alert('Hubo algún error')
        }
    }

    const setData = async () => {
        try {
            await AsyncStorage.setItem('onboarding-1', 'true')
        } catch (e) {
            alert('Hubo algún error')
        }
    }

    useEffect(() => {
        getData()
    }, [])

    if (loading) return null;

    if (!fontsLoaded) {
        return <AppLoading />
    } else {

        return (
            <>


                <ScrollView
                    style={{
                        backgroundColor: 'white'
                    }}
                >


                    <Text style={styles.title} >!Bienvenido a Mi Zona!</Text>

                    <View style={styles.container}>

                        <View >
                            <Image source={require('../assets/isotipo.png')} style={{ marginTop: -150 }} />
                            <Image source={require('../assets/mi-zona.png')} style={styles.img} />
                        </View>
                        <Image source={require('../assets/page-1.jpg')} style={styles.img} />

                    </View>
                    <Text style={{
                        textAlign: 'center',
                        color: 'grey',
                        fontSize: 20,
                        backgroundColor: 'white',
                        fontWeight: 'bold'
                    }}>Búsqueda rápida</Text>

                    <View>
                        <Text style={{
                            textAlign: 'center',
                            color: 'grey',
                            fontSize: 20,
                            backgroundColor: 'white',
                            paddingTop: 20
                        }}>En Mi Zona vas a encontrar lo {"\n"} que quieras  y lo más {"\n"} cercano a vos</Text>
                    </View>

                    <View
                        style={{
                            backgroundColor: 'white',
                            flex: 1
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex'
                            }}
                            onPress={() => {
                                navigation.navigate('Onboarding-2')
                                setData()
                            }}
                        >
                            <Text
                                style={{
                                    backgroundColor: 'red',
                                    paddingVertical: 10,
                                    paddingHorizontal: 50,
                                    marginVertical: 20,
                                    borderRadius: 10,
                                    color: 'white',
                                    fontSize: 20
                                }}
                            >Continuar</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}
                    >
                        <Entypo name="controller-record" size={14} color="red" style={{ marginEnd: 10 }} />
                        <Entypo name="controller-record" size={12} color="#D7D7D7" style={{ marginEnd: 10 }} />
                        <Entypo name="controller-record" size={12} color="#D7D7D7" style={{ marginEnd: 10 }} />
                        <Entypo name="controller-record" size={12} color="#D7D7D7" style={{ marginEnd: 10 }} />

                    </View>

                    <TouchableOpacity
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text
                            style={{
                                padding: 10,
                                textDecorationLine: 'underline',
                                color: 'grey'
                            }}
                        >omitir intro</Text>
                    </TouchableOpacity>

                </ScrollView>



            </>
        );
    }
}

export default Onboarding1;