import React from 'react'
import { Center } from './Center'
import { Button, Text } from 'react-native'

export function HomeScreen({ navigation }) {
  return (
    <Center>
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
