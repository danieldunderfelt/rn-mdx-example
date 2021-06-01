import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {RenderMdx} from 'rn-mdx'
import {markdownTest} from "./markdownTest";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <RenderMdx>
          {markdownTest}
        </RenderMdx>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
