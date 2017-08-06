import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Temperature from './Temperature'

export default class Geolocation extends Component {
 constructor(props) {
   super(props);
   this.state = {
     latitude: null,
     longitude: null,
     error: null,
   };
 }


 componentDidMount() {
   navigator.geolocation.getCurrentPosition(
     (position) => {
       this.setState({
         latitude: position.coords.latitude,
         longitude: position.coords.longitude,
         error: null,
       });
     },
     (error) => this.setState({ error: error.message }),
     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
   );
 }

 render() {
   const currentLat = this.state.latitude;
   const currentLong = this.state.longitude;
   console.log(currentLat, currentLong, 'latitude');

   return (
     <View >
        <Temperature latitude={currentLat} longitude={currentLong} />
     </View>
  );
 }
}

AppRegistry.registerComponent('Geolocation', () => Geolocation);

