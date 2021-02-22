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
import {createViewPortConfig} from 'react-native-responsive-view-port';

const Onboarding2 = ({navigation}) => {

    navigation.addListener('beforeRemove', e => {
        e.preventDefault();
    })

    let [fontsLoaded] = useFonts({
        BalsamiqSans_400Regular,
        BalsamiqSans_400Regular_Italic,
        BalsamiqSans_700Bold,
        BalsamiqSans_700Bold_Italic,
    });
    const { vw, vh } = createViewPortConfig();

    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('onboarding-3')
            if (value) {                
                navigation.navigate('Onboarding-4')
            }else{
                setLoading(false)
            }
            
        } catch (e) {
            alert('Hubo algún error')
        }
    }

    const setData = async () => {
        try {
            await AsyncStorage.setItem('onboarding-3', 'true')
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
                        marginTop: -40,
                        backgroundColor: 'white'
                    }}
                >
                    <Image source={require('../assets/page-3.jpg')} style={{width: '100%'}}/>
                </View>

                <View>
                    <Text style={{
                        textAlign: 'center',
                        color: 'grey',
                        fontSize: 75*vw,
                        backgroundColor: 'white',
                        fontWeight: 'bold'
                    }}>Encontrá lo que buscás</Text>
                </View>

                <View>
                    <Text style={{
                        textAlign: 'center',
                        color: 'grey',
                        fontSize: 60*vw,
                        backgroundColor: 'white',
                        paddingTop: 20
                    }}>Explorá los diferentes rubros {'\n'} que ofrecemos y los que mejor {'\n'} se adaptan a lo que necesitás
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
                            navigation.navigate('Onboarding-4')
                            setData()
                        }}
                    >
                        <Text
                            style={{
                                backgroundColor: '#F9813D',
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
                    <Entypo name="controller-record" size={14} color="#F9813D" style={{ marginEnd: 10 }} />
                    <Entypo name="controller-record" size={12} color="#D7D7D7" style={{ marginEnd: 10 }} />
                </View>
            </ScrollView>
        );
    }
}

export default Onboarding2;