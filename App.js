import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/Routes';

export default Routes;

// const App = () => {
//   return (
//     <NavigationContainer>
//       <View style={styles.container}>
//         <Image style={styles.Img} source={require('./assets/Wave.png')}/>
//         <Text style={styles.text}>Hello, There!</Text>

//         <Button title='Wave Back! 👋' onPress={() => {
//           Alert.alert('You waved back!')
//         }}/>
//         <StatusBar style="auto" />
//       </View>
//     </NavigationContainer>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   text: {
//     color: 'red',
//     fontSize: 20.
//   },

//   Img: {
//     width: 100,
//     height: 100,
//   },
// });