import React, { Component } from 'react';
import { View, StyleSheet, Text,TextInput, TouchableOpacity } from 'react-native';


class Inputlocation extends Component{
    constructor(props) {
        super(props);

        this.state = {
            custom_fields: [],
            name: ''
            
        }
        
    }

    addCustomField = ()=>{
        this.setState({
            custom_fields: [...this.state.custom_fields, {meta_name:'value'}]

        })
    }

    OnCustomInputNameHandler = (value,index) => {
        this.state.custom_fields[index].meta_name = value;
        this.setState({custom_fields:this.state.custom_fields});

    } 

    deleteDynamicField = (index)=>{
        this.state.custom_fields.splice(index,1);
        this.setState({custom_fields:this.state.custom_fields});

    }


    render() {
        return (
            <View>
                {
                    this.state.custom_fields.map((customInput,key)=>{
                        return(
                        
                           
                        
                
                
                <View key={key} style={Styles.InputsContainer}>
                    <View>
                        <TextInput
                            style = {Styles.input}
                            onChangeText = {name => {this.OnCustomInputNameHandler(name,key)}}
                            placeholder = {'Name'}
                            />
                    </View>
                
                        
                    <TouchableOpacity onPress={() => this.deleteDynamicField(key)}>
                        <Text> Delete </Text>
                    </TouchableOpacity>
                    </View>
                        )
                    })
                }

                
            
            
                    <TouchableOpacity
                        
                        onPress={() => {this.addCustomField()}}>
                            <Text style={Styles.addBtnText}> + ADD </Text>
                        </TouchableOpacity>

            </View>
            
            
            
                        
                    

        );
                        


    }



}

const Styles = StyleSheet.create({
    addBtn: {
        width: "10%",
        height: 20,

    },

    addBtnText: {
        fontSize: 10,
        color: "#fff",
        textAlign: 'center'
        
    },
    InputContainer:{
        width: '10%',
        flex: 1,
        marginRight:10
    },
    InputsContainer:{
        flexDirection: 'row',
        padding: 10
    },
    input:{
        width:'80%',
        fontSize:10
    }
})

export default Inputlocation;
