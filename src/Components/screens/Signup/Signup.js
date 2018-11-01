// import React, {Component} from "react";
// import {
//     View,
//     Text,
//     StyleSheet
// } from "react-native";

// class Signup extends Component{
//     render(){
//         return(
//             <View style={styles.container} > 
//                 <Text>SignupScreen</Text>
//             </View>
           
//         );
//     }

// }
// export default Signup;

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent:'center'
        
//     }
// });

import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, StyleSheet, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            username: '',
            email: '',
            phoneno: '',
            password: '' 
        }
    }


    login = () => {
        fetch('https://handallo-66656.firebaseio.com/a.json', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                fullname: this.state.fullname,
                username: this.state.username,
                email: this.state.email,
                phoneno: this.state.phoneno,
                password: this.state.password 
            })
        })

            .then((response) => response.json())
            .then((res) => {

                if (res.state === true) {
                    AsyncStorage.setItem('token', res.token);
                    this.props.navigation.navigate('Login');
                } else {
                    alert(res.msg)
                }
            })
            .done();
    }

    render() {
        return (
            <ScrollView>
            <KeyboardAvoidingView style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}> - TidyMaster - </Text>
                    <Text style={styles.header}> - REGISTER NEW USER - </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Fullname'
                        onChangeText={(fullname) => this.setState({ fullname })}
                        underlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Username'
                        onChangeText={(username) => this.setState({ username })}
                        underlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Email'
                        onChangeText={(email) => this.setState({ email })}
                        underlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='PhoneNo'
                        onChangeText={(phoneno) => this.setState({ phoneno })}
                        underlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Password'
                        onChangeText={(password) => this.setState({ password })}
                        underlineColorAndroid='transparent'
                    />

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.login}>
                        <Text> Register Now </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center',
    },

});


export default Register;
