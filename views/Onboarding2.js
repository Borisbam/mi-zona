import React, { useEffect, useState } from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    useFonts,
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
    BalsamiqSans_700Bold,
    BalsamiqSans_700Bold_Italic,
} from '@expo-google-fonts/balsamiq-sans';

import { Entypo } from '@expo/vector-icons';

const Onboarding2 = ({ navigation }) => {


    navigation.addListener('beforeRemove', e => {
        e.preventDefault();
    })

    let [fontsLoaded] = useFonts({
        BalsamiqSans_400Regular,
        BalsamiqSans_400Regular_Italic,
        BalsamiqSans_700Bold,
        BalsamiqSans_700Bold_Italic,
    });

    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('onboarding-2')
            if (value) {
                navigation.navigate('Onboarding-3')
            } else {
                setLoading(false)
            }

        } catch (e) {
            alert('Hubo algún error')
        }
    }

    const setData = async () => {
        try {
            await AsyncStorage.setItem('onboarding-2', 'true')
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
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -60
                    }}
                >
                    <Image source={require('../assets/page-2.jpg')} style={{}} />
                </View>

                <View>
                    <Text style={{
                        textAlign: 'center',
                        color: 'grey',
                        fontSize: 20,
                        backgroundColor: 'white',
                        fontWeight: 'bold'
                    }}>Variedad personalizada</Text>
                </View>
                <View>
                    <Text style={{
                        textAlign: 'center',
                        color: 'grey',
                        fontSize: 20,
                        backgroundColor: 'white',
                        paddingTop: 20
                    }}>También tenemos Mi Zona Deli, {'\n'} en donde verás las mejores {'\n'} opciones de gastronomía
                    </Text>
                </View>

                <View
                    style={{
                        backgroundColor: 'white'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex'
                        }}
                        onPress={() => {
                            navigation.navigate('Onboarding-3')
                            setData()
                        }}
                    >
                        <Text
                            style={{
                                backgroundColor: '#DEDC88',
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
                        justifyContent: 'center',
                        backgroundColor: 'white'
                    }}
                >
                    <Entypo name="controller-record" size={12} color="#D7D7D7" style={{ marginEnd: 10 }} />
                    <Entypo name="controller-record" size={14} color="yellow" style={{ marginEnd: 10 }} />
                    <Entypo name="controller-record" size={12} color="#D7D7D7" style={{ marginEnd: 10 }} />
                    <Entypo name="controller-record" size={12} color="#D7D7D7" style={{ marginEnd: 10 }} />
                </View>
            </ScrollView>
        );
    }
}

export default Onboarding2;