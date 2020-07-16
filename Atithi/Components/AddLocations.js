import React, { Component } from 'react';
import { Text,View, TextInput, StyleSheet, Header } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { color } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';


class Addlocation extends Component {

    constructor(props) {
        super(props);
        this.state={
            textInput : [],
            inputData : []
        }
    }

    addTextInput = (index) => {
        let textInput = this.state.textInput;
        textInput.push(<TextInput style={styles.textInput}
            onChangeText={(text) => this.addValues(text, index)} />);
          this.setState({ textInput });
    }

    removeTextInput = () => {
        let textInput = this.state.textInput;
        let inputData = this.state.inputData;
        textInput.pop();
        inputData.pop();
        this.setState({ textInput,inputData });
      }

    addValues = (text, index) => {
        let dataArray = this.state.inputData;
        let checkBool = false;
        if (dataArray.length !== 0){
          dataArray.forEach(element => {
            if (element.index === index ){
              element.text = text;
              checkBool = true;
            }
          });
        }
        if (checkBool){
            this.setState({
              inputData: dataArray
            });
          }
          else {
            dataArray.push({'text':text,'index':index});
            this.setState({
              inputData: dataArray
            });
          }
          }

          getValues = () => {
            console.log('Data',this.state.inputData);
          }
        
        
          render(){
            
            return(
              
              
              
                
              <View style={styles.container}>
                <View style={styles.textarea}>
                <Text style={styles.heading}>
                        ATITHI
                    </Text>
                </View>
                
                
                <View style={{width: 280}}>
                
                {this.state.textInput.map((value) => {
                  
                  
                  return value
                })}
                </View>
                
                <View style= {styles.row}>
                  <View style={{margin: 20}}>
                <Button 
                    raised
                    title=' + ADD LOCATION' onPress={() => this.addTextInput(this.state.textInput.length)} />
                </View>
                <View style={{margin: 20}}>
                <Button 
                    raised
                    title=' - DELETE LOCATION' onPress={() => this.removeTextInput()} />
                </View>
                </View>
                
                
                <Button 
                    raised
                    icon={{name: 'check',
                           color:"#ffff"}}
                    title='Submit' onPress={() => this.getValues()}/>
                    
              </View>
            )
          }
        }

        const styles = StyleSheet.create({
            container: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              paddingBottom: 30
            },
            buttonView: {
            flexDirection: 'row'
            },
            textInput: {
            height: 40,
            borderColor: 'black', 
            borderWidth: 1,
            margin: 20
          },
          row:{
            
            flexDirection: 'row',
            justifyContent: 'center'
            },
            heading: {
              marginTop:80,
              marginBottom:250,
              fontFamily: "serif",
              textAlign: 'center',
              fontSize: 60, 
              color: '#607D8B'
              

            },
            textarea:{
              flex: 2
            }
          });
          
          export default Addlocation;










