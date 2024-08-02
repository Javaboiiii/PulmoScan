import { View, Text } from 'react-native'
import React from 'react'

const MyText = ({ children }) => {
  return (
      <Text style={{
        fontWeight: 600, 
        fontStyle: 'normal', 
        fontSize: 15
      }}>{children}</Text>
  )
}

export default MyText
