import React from 'react'
import { Center } from './Center'
import { Text, Image } from 'react-native'

export function ProfileScreen() {
  return (
    <Center>
      <Image source={require('../assets/PROFILE.png')} style={{ width: 100, height: 100 }}/>
      <Text>PROFILE SCREEN</Text>
    </Center>
  )
}
