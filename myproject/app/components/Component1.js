import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Component1 extends Component {
  render() {
    return (
      <View >
        <Text > Hello Hello
        </Text>
      </View>
    );
  }
}



AppRegistry.registerComponent('Component1', () => Component1);
