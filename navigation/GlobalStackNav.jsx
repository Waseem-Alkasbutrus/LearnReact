import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//Screens
import { WaitingStackNav } from './WaitingStackNav'
import { DrawerNav } from './DrawerNav'

const Stack = createStackNavigator()

export function GlobalStackNav() {
  return (
    <Stack.Navigator initialRouteName="Waiting">
      <Stack.Screen
        name="Waiting"
        component={WaitingStackNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Present"
        component={DrawerNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
