
import React, {Component} from 'react';
import {Platform, Text, View,TouchableHighlight,StyleSheet} from 'react-native';
import Header from './header.js';

export default class App extends Component<Props> {  
  constructor(props){
    super(props);
    this.state={
      name:'hardeep singh', 
      title:'header'
    }
  }
  render() {
    return (
     <View style={{padding:10,flex:1}}>
       <Header title={this.state.title}/>
      <Text style={styles.har}>hello {this.state.name}</Text>

      <TouchableHighlight onPress={() => this.setState({title:'Header'})}>
        <Text>Click</Text>
      </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
har:{
  color:'red',
  fontSize:20,
  textAlign:'center'

}
});