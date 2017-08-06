import React, { Component } from 'react';
import {AppRegistry, Text, View, Alert} from 'react-native';

export default class Login extends Component {
	render(){
		return (
		    <View style={styles.container}>
		    	<Text>Hey</Text>
		    </View>
		        )
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})