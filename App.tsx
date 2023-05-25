import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler';

const App = () => {
  const [button1Color, setButton1Color] = useState('red');
  const [button2Color, setButton2Color] = useState('blue');

  const handleButton1Press = () => {
    const newColor = button1Color === 'red' ? 'green' : 'red';
    setButton1Color(newColor);
  };

  const handleButton2Press = () => {
    const newColor = button2Color === 'blue' ? 'yellow' : 'blue';
    setButton2Color(newColor);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TapGestureHandler onActivated={handleButton1Press}>
          <View style={[styles.button, { backgroundColor: button1Color }]}>
            <Text>Button 1</Text>
          </View>
        </TapGestureHandler>
        <TapGestureHandler onActivated={handleButton2Press}>
          <View style={[styles.button, { backgroundColor: button2Color }]}>
            <Text>Button 2</Text>
          </View>
        </TapGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  }
});

export default App;
