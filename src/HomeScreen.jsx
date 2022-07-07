import React from 'react'
import { Center } from './Center'
import { Button, Text, Image } from 'react-native'

export function HomeScreen({ navigation }) {
  return (
    <Center>
      <Image source={require('../assets/HOME.png')} style={{ width: 100, height: 100 }}/>
      <Text>HOME SCREEN</Text>
      <Button
        title="Scan Another Tag"
        onPress={() => {
          navigation.navigate('Waiting', { screen: 'Scan New Tag' })
        }}
      />
    </Center>
  )
}
