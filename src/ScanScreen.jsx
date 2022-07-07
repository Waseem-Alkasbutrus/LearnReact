import React from 'react'
import { Center } from './Center'
import { Button, Text, Image } from 'react-native'

export function ScanScreen({ navigation }) {
  return (
    <Center>
      <Image source={require('../assets/SCAN_NFC.png')} style={{ width: 100, height: 100 }}/>
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
