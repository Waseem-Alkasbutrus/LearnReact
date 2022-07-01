import React, { Children } from 'react'
import { View } from 'react-native'

export const Center = ({Children}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >

    {children}

    </View>
  );
}
