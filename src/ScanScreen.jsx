import React from 'react'
import { Center } from './Center'
import { Button, Text } from 'react-native'

export function ScanScreen({ navigation }) {
  return (
    <Center>
      <Text>SCAN YOUR NFC TAG</Text>
      <Button
        title="Scan Tag"
        onPress={() => {
          navigation.navigate('Present', { screen: 'Home' })
        }}
      />
    </Center>
  )
}
