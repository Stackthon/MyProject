mport React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

import suggestions from './Seed';

export default class Details extends Component {
	render(){
		return(
		    <View>
			    <Text>{this.props.detail.name}</Text>
			    <Text>{this.props.detail.description}</Text>
			  </View>
			)
	}
}