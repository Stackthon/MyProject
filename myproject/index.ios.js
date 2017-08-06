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


