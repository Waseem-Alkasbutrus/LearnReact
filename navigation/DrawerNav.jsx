import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

//Screens
import { HomeScreen } from '../src/HomeScreen'
import { ProfileScreen } from '../src/ProfileScreen'
import { ClubsScreen } from '../src/ClubsScreen'

const Drawer = createDrawerNavigator()

export function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Clubs" component={ClubsScreen} />
    </Drawer.Navigator>
  )
}
