import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RenderMdx } from 'rn-mdx'
import { ColorBox, ColorText } from './customComponents'
import content from './content.mdx'
import { Image } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <RenderMdx components={{ Image, ColorBox, ColorText }}>{content}</RenderMdx>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
})
