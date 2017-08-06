/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Component1 from './app/components/Component1.js'
import Component2 from './app/components/Component2.js'
import Component3 from './app/components/Component3.js'
import Component5 from './app/components/Component5.js'

export default class myproject extends Component {
  render() {
    return (
      <View style={styles.container}>
         
         <Component5 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myproject', () => myproject);
