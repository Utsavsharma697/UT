import React, { Component } from 'react';
import { AppRegistry,StyleSheet, View, Text, Button, TextInput} from 'react-native';

class Enterlocation extends Component {
  constructor(props){
    super(props);
    this.state = {
      textInput : []
    }
  }
  addTextInput = (key) => {
    let textInput = this.state.textInput;
    textInput.push(<TextInput key={key} />);
    this.setState({ textInput })
  }
  render(){
    return(
      <View style={StyleSheet.container}> 
        <Button title='+' onPress={() => this.addTextInput(this.state.textInput.length)} />
        {this.state.textInput.map((value, index) => {
          return value
        })}
      </View>
    )
  }
}

const Styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: "20",
        marginTop:"100"
    }
})


export default Enterlocation