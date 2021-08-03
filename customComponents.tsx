import { Text, View } from 'react-native'
import React from 'react'

export const CustomComponent = props => {
  let { label = 'Wow!', color = 'red' } = props

  return (
    <View style={{ backgroundColor: color, width: 100, height: 100 }}>
      <Text style={{ color: 'white' }}>{label}</Text>
    </View>
  )
}

export const TextComponent = props => {
  return (
    <Text style={{ fontWeight: 'bold', fontSize: 40, lineHeight: 50, height: 50 }}>
      {props.children}
    </Text>
  )
}
