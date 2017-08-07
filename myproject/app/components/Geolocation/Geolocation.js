import React, { Component } from 'react';
import { View, Text, AppRegistry, TouchableHighlight, ImageBackground, StyleSheet } from 'react-native';
import Temperature from '../Temperature'
import Map from '../Maps'

class Geolocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      listDataFromChild: null

    };
  }


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position, 'position');
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


  static navigationOptions = {
    title: 'Forecast',
  };
  render() {
    console.log(this.state, 'state');
    const { navigate } = this.props.navigation;
    const currentLat = this.state.latitude;
    const currentLong = this.state.longitude;

    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require('./rain.jpg')}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }} >
          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}

          <Temperature latitude={currentLat} longitude={currentLong}  />
          <TouchableHighlight
            onPress={() => navigate('Maps', {latitude: currentLat, longitude:currentLong})}
            underlayColor={'white'}

            >
            <Text style={styles.button}>
             let's go!
            </Text>
          </TouchableHighlight>
        </View>
       </ImageBackground>


    );
  }
}

export default Geolocation;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  button: {

    color: '#ffffff',
    fontSize: 40,
    textAlign: 'center',
    marginTop: 70,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10
  },
});


AppRegistry.registerComponent('Geolocation', () => Geolocation);