import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Component2 from './Component2'

export default class Component3 extends Component {
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
        console.log(currentLat,currentLong, 'latitude' );

    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        <Component2 latitude={currentLat} longitude={currentLong} />
      </View>

    );
  }
}

AppRegistry.registerComponent('Component3', () => Component3);