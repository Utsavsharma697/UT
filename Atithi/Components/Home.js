import React, { Component } from 'react';
import { Text,ScrollView, Image, View, StyleSheet, ImageBackground } from 'react-native';
import { Card, Icon, Input, CheckBox ,Button} from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { Header } from 'react-native/Libraries/NewAppScreen';
import * as SecureStore from 'expo-secure-store';
import { color } from 'react-native-reanimated';



class LoginTab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            remember: false
            
        
        }
        this.handleLogin = this.handleLogin.bind(this);

    }

    componentDidMount() {
        SecureStore.getItemAsync('userinfo')
            .then((userdata) => {
                let userinfo = JSON.parse(userdata);
                if (userinfo) {
                    this.setState({username: userinfo.username});
                    this.setState({password: userinfo.password});
                    this.setState({remember: true})
                }
            })
    }

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon
               name='sign-in'
               type='font-awesome'
               size={24}
               iconStyle={{ color: tintColor }}
            />
       )
    }

    handleLogin() {
        
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();
    }
    
    
        render() {
            return (
              <View
                 backgroundColor="FFFFFF">
                    <Text style={styles.heading}>
                        ATITHI
                    </Text>
                
                <View style={styles.container}>
                    
                    
                       <Input
                       placeholder="Username"
                       leftIcon={{ type: 'font-awesome', name: 'user-o'}}
                       onChangeText={(username) => this.setState({username})}
                       value={this.state.username}
                       containerStyle={styles.formInput}
                       color="#FFA000"
                       />
                       <Input
                       placeholder="Password"
                       leftIcon={{ type: 'font-awesome', name: 'key'}}
                       onChangeText={(password) => this.setState({password})}
                       value={this.state.password}
                       containerStyle={styles.formInput}
                       color="#FFA000"
                       />
                       <CheckBox title="Remember Me"
                           center
                           checked={this.state.remember}
                           onPress={() => this.setState({remember: !this.state.remember})}

                           color="#607D8B"
                           
                           containerStyle={styles.formCheckbox}
                        />
                        <View style={styles.formButton}>
                            <Button
                               onPress={() => this.handleLogin()}
                                title="Login"
                                color='#607D8B'
                            />
                        </View>
                        <View style={styles.formButton}>
                         <Button
                             onPress={() => this.props.navigation.navigate('Register')}
                             title="Register"
                             clear
                             
                             icon={
                                 <Icon
                                     name='user-plus'
                                     type='font-awesome'            
                                     size={24}
                                     color= '#FFFFFF'
                                     
                                 />
                             }
                        titleStyle={{
                            color: "#FFFFFF"
                            
                        }}
                        />
                </View>


                </View>
              </View>

                
                
            );

        }
    }

    class RegisterTab extends Component {

        constructor(props) {
            super(props);
    
            this.state = {
                username: '',
                password: '',
                firstname: '',
                lastname: '',
                email: '',
                remember: false,
                
            }
        }

        static navigationOptions = {
            title: 'Register',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                  name='user-plus'
                  type='font-awesome'            
                  size={24}
                  iconStyle={{ color: tintColor }}
                />
              ) 
        };

        render() {
            return(
                <ScrollView>
                <View style={styles.container}>
                    
                    <Input
                        placeholder="Username"
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                        containerStyle={styles.formInput}
                        />
                    <Input
                    placeholder="Password"
                    leftIcon={{ type: 'font-awesome', name: 'key' }}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    containerStyle={styles.formInput}
                    />
                <Input
                    placeholder="First Name"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(lastname) => this.setState({firstname})}
                    value={this.state.firstname}
                    containerStyle={styles.formInput}
                    />  
                <Input
                    placeholder="Last Name"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(lastname) => this.setState({lastname})}
                    value={this.state.lastname}
                    containerStyle={styles.formInput}
                    />
                <Input
                    placeholder="Email"
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    containerStyle={styles.formInput}
                    />
                <CheckBox title="Remember Me"
                    center
                    checked={this.state.remember}
                    onPress={() => this.setState({remember: !this.state.remember})}
                    containerStyle={styles.formCheckbox}
                    />  
                <View style={styles.formButton}>
                    <Button
                        onPress={() => this.handleRegister()}
                        title="Register"
                        icon={
                            <Icon
                                name='user-plus'
                                type='font-awesome'            
                                size={24}
                                color= 'white'
                            />
                        }
                        buttonStyle={{
                            backgroundColor: "#512DA8"
                        }}
                        />
                </View>
            </View>
            </ScrollView>
        );
    }
}

const Login = createBottomTabNavigator({
    Login: LoginTab,
    Register: RegisterTab
}, {
    tabBarOptions: {
        activeBackgroundColor: '#9575CD',
        inactiveBackgroundColor: '#D1C4E9',
        activeTintColor: '#ffffff',
        inactiveTintColor: 'gray'
    }
});




    const styles = StyleSheet.create({
        container: {
            
            
            justifyContent: 'center',
            marginTop:160,
            
            marginLeft:30

        },
        formInput: {
            paddingRight:40,
            
            paddingLeft: 0
        },
        formCheckbox: {
            paddingRight:40,
            paddingLeft: 0,
            backgroundColor: null
        },
        formButton: {
            marginHorizontal: 80,
            marginVertical: 20
        },
        heading: {
            marginTop:80,
            fontFamily: "Gayathri-Thin",
            textAlign: 'center',
            fontSize: 60, 
            color: '#607D8B'
            
            

        }

    });
    

      

    export default createAppContainer(Login);


