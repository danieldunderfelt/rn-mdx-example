import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RenderMdx } from 'rn-mdx'
import { CustomComponent, TextComponent } from './customComponents'
import content from './content.mdx'

console.log(content)

export default function App() {
  return (
    <View style={styles.container}>
      <RenderMdx components={{ CustomComponent, TextComponent }}>{content}</RenderMdx>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
})
