import React, { Component } from 'react';
import { AppRegistry, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import suggestions from './Seed';

export default class Details extends Component {
	static navigationOptions = {
		title: 'Details'
	};

	render() {
		const { params } = this.props.navigation.state;

		return (
			<ImageBackground
				style={styles.backgroundImage}
				source={require('./Geolocation/details.jpg')}
			>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
				<Text style={styles.text}>{params.name}{"\n"}{params.address}{"\n"}{params.phone}{"\n"}</Text>
				<Text style={styles.description}>{params.description}</Text>
			</View>
			</ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: null,
		height: null,
	},
  text: {
		// flex:1,
		// justifyContent: 'center',
		// alignItems: 'center',
    color: '#ffffff',
    fontSize: 50,
    textAlign: 'center',
		textAlignVertical: 'center',
		backgroundColor: 'rgba(0,0,0,0)'
	},
	description: {
		color: '#ffffff',
    fontSize: 30,
    textAlign: 'center',
		textAlignVertical: 'center',
		backgroundColor: 'rgba(0,0,0,0)'
	}
});

AppRegistry.registerComponent('Details', () => Details)