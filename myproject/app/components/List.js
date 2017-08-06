import React, { Component } from 'react';
import { AppRegistry,View, Text, StyleSheet} from 'react-native';

export default class List extends Component {
	
	render(){
		const suggestions = this.props.list;
		console.log("suggestions", suggestions);
		return(
		    <View>
		    	{
		    		suggestions < 55 ? <Text>Link-1</Text> : suggestions < 80 ? <Text>Link-2</Text> : <Text>Link-3</Text>
		    	}
		    </View>
		  )
		}
}
AppRegistry.registerComponent('List', () => List);