import React, { Component } from 'react';
import { AppRegistry,View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import MapView from 'react-native-maps';
import { StackNavigator } from 'react-navigation';
import suggestions from './Seed';
import Details from './Details';

export default class Maps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			businesses: [],
			temperature: null
		}
	}

	static navigationOptions = {
    title: 'Maps'
	};


	componentDidMount(){
		console.log('temp here', this.state.temperature);
		// const auth = {method: 'get', headers: { "Authorization": "Bearer btNkn1XX9ZJvF9exIHWvIPlsQtiCnCb5_ELZaBzvg5yB0Zag83IDfEWpCsvBfgEvRZ9EerChrRe8Ymy03tXB4vtU7J9ISU86iioTDA3hzHAeCUc9BVab0swBmi-mWXYx"}}

		// 	fetch("https://api.yelp.com/v3/businesses/search?term=parks&location=newyork", auth)
		// 			.then(response => response.json())
		// 			.then(res => {
		// 				console.log('res', res.businesses[0]['name']);
		// 				this.setState({
		// 					businesses: res.businesses
		// 				})
		// 			}
		// 		);
	}

	render(){

		const { navigate } = this.props.navigation;
		const { params } = this.props.navigation.state;
		const businesses = this.state.businesses;
		const temperature = params.temperature;
		this.state.temperature !== null ? this.setState({temperature: params.temperature}) : null;

		const auth = {method: 'get', headers: { "Authorization": "Bearer btNkn1XX9ZJvF9exIHWvIPlsQtiCnCb5_ELZaBzvg5yB0Zag83IDfEWpCsvBfgEvRZ9EerChrRe8Ymy03tXB4vtU7J9ISU86iioTDA3hzHAeCUc9BVab0swBmi-mWXYx"}}

			if(this.state.businesses.length === 0 && params.temperature > 65 && params.temperature < 80){

				fetch("https://api.yelp.com/v3/businesses/search?categories=zoos,playgrounds,beaches,observatories,tennis&location=newyork", auth)
							.then(response => response.json())
							.then(res => {
								console.log('res', res.businesses[0]['name']);
								this.setState({
									businesses: res.businesses
								})
							}
						);

			} else if (this.state.businesses.length === 0 && params.temperature <= 65){
				fetch("https://api.yelp.com/v3/businesses/search?categories=restaurants,yoga,museums,movietheaters,observatories&location=newyork", auth)
				.then(response => response.json())
				.then(res => {
					console.log('res', res.businesses[0]['name']);
					this.setState({
						businesses: res.businesses
					})
				}
			);
			}

						console.log('businesses', this.state.businesses);

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
		       	businesses.map((business, i) => (

		       		<MapView.Marker
		       		key={i}
					      coordinate={business.coordinates}
					      title={business.name}
					      description={business.location['address1']}
					     >
					      <MapView.Callout tooltip style={styles.callout}>
                <View>
									<TouchableHighlight
                    onPress={() => navigate('Details', {name: business.name,phone: business.phone, address: business.location['address1'], address2: business.location['city'], address3: business.location['zip_code']})}
                  >
                    <View>
                        <Text>{business.name}</Text>
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
