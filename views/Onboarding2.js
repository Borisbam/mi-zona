import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
    BalsamiqSans_700Bold,
    BalsamiqSans_700Bold_Italic,
} from '@expo-google-fonts/balsamiq-sans';

import { Entypo } from '@expo/vector-icons';

const Onboarding2 = () => {

    let [fontsLoaded] = useFonts({
        BalsamiqSans_400Regular,
        BalsamiqSans_400Regular_Italic,
        BalsamiqSans_700Bold,
        BalsamiqSans_700Bold_Italic,
    });

    const [actualPage, setActualPage] = useState(true)
    const [actualPage2, setActualPage2] = useState(false)
    const [actualPage3, setActualPage3] = useState(false)
    const [actualPage4, setActualPage4] = useState(false)

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <ScrollView>
                <View
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image source={require('../assets/page-2.jpg')} />
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
                    >
                        <Text
                            style={{
                                backgroundColor: 'yellow',
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
                        backgroundColor: 'white',
                        paddingVertical: 30
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