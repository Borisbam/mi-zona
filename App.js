import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/Home';
import Onboarding1 from './views/Onboarding1';
import Onboarding2 from './views/Onboarding2';
import Onboarding3 from './views/Onboarding3';
import Onboarding4 from './views/Onboarding4';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false
          }}
        >
          <Stack.Screen name='Onboarding-1' component={Onboarding1} />
          <Stack.Screen name='Onboarding-2' component={Onboarding2} />
          <Stack.Screen name='Onboarding-3' component={Onboarding3} />
          <Stack.Screen name='Onboarding-4' component={Onboarding4} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  );
}
