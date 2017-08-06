import React, { Component } from 'react';
import {AppRegistry, Text, View, Alert} from 'react-native';
import List from './List';

export default class Component2 extends Component {
constructor(props) {
  super(props);
  this.state = {
     rovers: '',
     latitude: null,
     longitude: null
   }
 }

 componentWillReceiveProps(nextProps) {
   const savedLat = nextProps.latitude;
   const savedLong = nextProps.longitude;
   console.log(savedLat, savedLong, 'variables');

   return fetch('https://api.darksky.net/forecast/b51fa6b6e3510a257d8115c7e555e257/' + savedLat + ',' + savedLong)
     .then((response) => response.json())
     .then((responseJson) => {
       console.log('my response', responseJson);
       this.setState({
           rovers: responseJson['currently']['temperature']
       });
     })
     .catch((error) => {
       console.error(error);
     });

 }

 render() {
  console.log(this.props.latitude, this.props.longitude, 'props');
     return (
     <View>
       <Text> Hello: {this.state.rovers} </Text>
       <Text>    
       {
         this.state.rovers < 65 ?

           Alert.alert(
             'A little chilly',
             'grab a light jacket'
           ) : null

       }
       </Text>
       <List list={this.state.rovers} />
     </View>
   );
 }
}

AppRegistry.registerComponent('Component2', () => Component2);