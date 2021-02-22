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
import { createViewPortConfig } from 'react-native-responsive-view-port';

const Onboarding2 = ({ navigation }) => {

    navigation.addListener('beforeRemove', e => {
        e.preventDefault();
    })    

    const { vw } = createViewPortConfig();
    let [fontsLoaded] = useFonts({
        BalsamiqSans_400Regular,
        BalsamiqSans_400Regular_Italic,
        BalsamiqSans_700Bold,
        BalsamiqSans_700Bold_Italic,
    });

    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('onboarding-4')
            if (value) {                
                navigation.navigate('Home')
            }else{
                setLoading(false)
            }
            
        } catch (e) {
            alert('Hubo algún error')
        }
    }

    const setData = async () => {
        try {
            await AsyncStorage.setItem('onboarding-4', 'true')
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
            <ScrollView>
                <View
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -65,
                        backgroundColor: 'white'
                    }}
                >
                    <Image source={require('../assets/page-4.jpg')} style={{ width: '100%' }} />
                </View>

                <View>
                    <Text style={{
                        textAlign: 'center',
                        color: 'grey',
                        fontSize: 75 * vw,
                        backgroundColor: 'white',
                        fontWeight: 'bold'
                    }}>Pagá cómodamente</Text>
                </View>

                <View>
                    <Text style={{
                        textAlign: 'center',
                        color: 'grey',
                        fontSize: 60 * vw,
                        backgroundColor: 'white',
                        paddingTop: 20
                    }}>Podés pagar como desees y {'\n'} recibirás en tu casa lo que {'\n'} hayas comprado
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
                            navigation.navigate('Home')
                            setData()
                        }}
                    >
                        <Text
                            style={{
                                backgroundColor: '#D3315B',
                                paddingVertical: 10,
                                paddingHorizontal: 50,
                                marginTop: 20,
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
                        backgroundColor: 'white',
                        paddingVertical: 30
                    }}
                >
                    <Entypo name="controller-record" size={12} color="#D7D7D7" style={{ marginEnd: 10 }} />
                    <Entypo name="controller-record" size={12} color="#D7D7D7" style={{ marginEnd: 10 }} />
                    <Entypo name="controller-record" size={12} color="#D7D7D7" style={{ marginEnd: 10 }} />
                    <Entypo name="controller-record" size={14} color="#D3315B" style={{ marginEnd: 10 }} />
                </View>
            </ScrollView>
        );
    }
}

export default Onboarding2;