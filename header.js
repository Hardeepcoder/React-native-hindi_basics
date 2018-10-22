
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class header extends Component<Props> {  
  render() {
    return (
     <View>
      <Text style={{color:'#000',fontSize:22,
    backgroundColor:'lightgray',padding:10,textAlign:'center'}}> {this.props.title}</Text>
      </View>
    );
  }
}

