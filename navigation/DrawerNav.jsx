import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { WaitingStackNav } from './WaitingStackNav'

//Screens
import { HomeScreen } from '../src/HomeScreen'
import { ProfileScreen } from '../src/ProfileScreen'

const Drawer = createDrawerNavigator()

export function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Scan NFC Tag">
      <Drawer.Screen name="Scan NFC Tag" component={WaitingStackNav} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  )
}
