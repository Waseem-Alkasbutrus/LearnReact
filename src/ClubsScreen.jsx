import React from 'react'
import { Center } from './Center'
import { Text, Image } from 'react-native'

export function ClubsScreen({ navigation }) {
  return (
    <Center>
      <Image source={require('../assets/CLUBS.png')} style={{ width: 100, height: 100 }}/>
      <Text>CLUBS SCREEN</Text>
    </Center>
  )
}
