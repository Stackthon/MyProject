import React, { Component } from 'react';
import { AppRegistry,View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';


var locations = [{
			coordinate:{
				latitude: 40.7128, 
				longitude: -74.0059}
			},
			{coordinate:{
				latitude: 40.7150, 
				longitude: -74.0061}
			}]
export default class Component5 extends Component {
	
	render(){
		console.log('hello')
		return(
		     
		       	<MapView
		       		style={styles.map}
		       		initialRegion={{
		       			latitude: 40.7128,
					      longitude: -74.0059,
					      latitudeDelta: 0.0922,
					      longitudeDelta: 0.0421,
					      // mapView.showsUserLocation = YES;

		       		}}
		       		///showsUserLocation
		       		>
		       		{
		       			locations.map((location) => (
		       				  <MapView.Marker
					            coordinate={location.coordinate}
					            title={"title"}
					            description={"description"}
			         			/>
			         		
			         		)
			         	)
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

AppRegistry.registerComponent('Component5', () => Component5);