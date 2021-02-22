import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
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

const Onboarding1 = () => {

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

                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                padding: 10,
                                textDecorationLine: 'underline',
                                color: 'grey'
                            }}
                        >omitir intro</Text>
                    </View>

                </ScrollView>



            </>
        );
    }
}

export default Onboarding1;