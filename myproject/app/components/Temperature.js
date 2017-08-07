import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Alert,
  StyleSheet,
  ImageBackground
} from 'react-native';

export default class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rovers: '',
      latitude: null,
      longitude: null,
      place: '',
      summary: '',
      visibility: '',
      wind: '',
    }
    // this.someFn = this.someFn.bind(this);
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
          rovers: responseJson.currently.temperature,
          place: responseJson.timezone,
          summary: responseJson.currently.summary,
          visibility: responseJson.currently.visibility,
          wind: responseJson.currently.windSpeed
        });
      })
      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    const index = this.state.place.indexOf('/');
    const place = this.state.place.slice(index + 1).replace('_', ' ');

    const summary = this.state.summary;

    return (
           
      // <ImageBackground
      //   style={styles.backgroundImage}
      //   source={require('./Geolocation/rain.jpg')}
      //   source={summary.includes('Rain') ? require('./rain.jpg') : summary === 'Sunny' ? require('./sunny.jpg') : summary.includes('Cloudy') ? require('./cloudy.jpg') : require('./details.jpg')}
      // >
        <View  >
          <Text style={styles.textone}>{place} {'\n'} {Math.floor(this.state.rovers)}{'\u00B0'} </Text>
          <Text style={styles.text}> {this.state.summary}</Text>
          <Text style={styles.texttwo} >
            visibility: {this.state.visibility}{'\n'} windspeed: {this.state.wind}
          </Text>
        </View>
      
       

     //</ImageBackground>
   );
 }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  textone: {
    color: '#ffffff',
    fontSize: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  texttwo: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  }
});

AppRegistry.registerComponent('Temperature', () => Temperature);