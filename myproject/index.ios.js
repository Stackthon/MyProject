/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Geolocation from './app/components/Geolocation'
import Maps from './app/components/Maps'

class HomeScreen extends React.Component {
 static navigationOptions = {
   title: 'Welcome',
 };
 render() {
   const { navigate } = this.props.navigation;
   
   return (
     <View>
       <Text>Hello, My Weather App!</Text>
       <Geolocation />
       <Button
          onPress={() => navigate('Maps')}
          title="Maps"
        />
     </View>
   );
 }
}

const myproject = StackNavigator({
 Home: { screen: HomeScreen },
 Maps: { screen: Maps}
 
});

AppRegistry.registerComponent('myproject', () => myproject);


// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';
// import Component1 from './app/components/Component1.js'
// import Component2 from './app/components/Component2.js'
// import Component3 from './app/components/Component3.js'
// import Component5 from './app/components/Component5.js'

// export default class myproject extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
         
//          <Component3 />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('myproject', () => myproject);
