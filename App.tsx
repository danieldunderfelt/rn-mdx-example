import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RenderMdx } from 'rn-mdx'

const CustomComponent = () => {
  return (
    <View style={{ backgroundColor: 'red', width: 100, height: 100 }}>
      <Text style={{ color: 'white' }}>Wow a red box!</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <RenderMdx components={{ CustomComponent }}>
        {`
A very cool Custom Component!
          
<CustomComponent />

Space text yeehaw!

<CustomComponent />

That's right!
        `}
      </RenderMdx>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff000',
  },
})
