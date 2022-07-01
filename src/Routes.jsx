import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text } from 'react-native'
import { Button } from 'react-native-web'
import { Center } from './Center'

const Stack = createStackNavigator()

function Login({ navigation }) {
  return (
    <Center>
      <Text>Login here</Text>
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate('Register')
        }}
      />
    </Center>
  )
}

function Register({ navigation }) {
  return (
    <Center>
      <Text>Create account here</Text>
    </Center>
  )
}

export const Routes = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
