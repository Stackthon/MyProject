import React, { Component } from 'react';
import { AppRegistry,View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import MapView from 'react-native-maps';
import { StackNavigator } from 'react-navigation';
import suggestions from './Seed';
import Details from './Details';

export default class Maps extends Component {
	static navigationOptions = {
    title: 'Maps'
  };
	render(){
		console.log('hello');
		const { navigate } = this.props.navigation;
		console.log("navigate", navigate)
		const { params } = this.props.navigation.state;

		return(
		     <MapView
		      style={styles.map}
		      initialRegion={{
		       	latitude: params.latitude,
					  longitude: params.longitude,
					  latitudeDelta: 0.0922,
					  longitudeDelta: 0.0421,
						}}
		       >
		       {
		       	suggestions.map((suggestion, i) => (

		       		<MapView.Marker
		       		key={i}
					      coordinate={suggestion.coordinate}
					      title={suggestion.name}
					      description={suggestion.Address}
					     >
					      <MapView.Callout tooltip style={styles.callout}>
                <View>
									<TouchableHighlight
                    onPress={() => navigate('Details', {name: suggestion.name, address: suggestion.Address, phone: suggestion.Phone, description: suggestion.Description})}
                  >
                    <View>
                        <Text>{suggestion.name}</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </MapView.Callout>
             </MapView.Marker>
			       ))
		       	}
		      </MapView>
		     )
			}
}

const styles = StyleSheet.create({

    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
    },

});

AppRegistry.registerComponent('maps', () => maps);