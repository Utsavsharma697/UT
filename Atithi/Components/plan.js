

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Platform,
    Alert
} from 'react-native';

import MapView, {Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

import Geolocation from '@react-native-community/geolocation';

Geolocation.setRNConfiguration(config);
import {reqest, PERMISSIONS} from 'react-native-permissions'

class Plan extends Component {


    componentDidMount() {
        this.requestLocationPermission();
    }

    
    requestLocationPermission = async () => {
        if(Platform.OS === 'ios'){
            var response = await reqest(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
            console.log('iPhone: ' + response);


            if(response === 'granted'){
                this.locateCurrentPosition();
            }
        }
        else{
            var response =await request(PERMISSIONS.ANDROID.LOCATION_WHEN_IN_USE)
            console.log('Android: ' + response);

            if(response === 'granted'){
                this.locateCurrentPosition();
            }
        }

    }


    locateCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
                console.log(JSON.stringify(position));

                let initialPosition = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.035
                }

                this.setState({initialPosition})

            },
            error => Alert.alert(error.message),
            {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000}
        )
    }




    render() {
        return (

            <View style={styles.container}>
                <MapView

                ref = {map => this._map = map }


                style={styles.map}
                initialRegion={this.state.initialPosition}
                >
                
                <Marker
                    coordinate={{latitude: 37.78825,
                    longitude: -122.4324}}
                    title={"My firrst marker"} />
                
                </MapView>

                
                   
        
            </View>

        )
        
    }
    
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

export default Plan;