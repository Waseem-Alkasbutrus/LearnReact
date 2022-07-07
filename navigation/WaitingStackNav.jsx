import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//Screens
import { OnboardingScreen } from '../src/OnboardingScreen'
import { ScanScreen } from '../src/ScanScreen'
import { WelcomeScreen } from '../src/WelcomeScreen'

const Stack = createStackNavigator()

export function WaitingStackNav() {
  return (
    <Stack.Navigator initialRouteName="Scan Tag">
      <Stack.Screen name="Scan Tag" component={ScanScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}
