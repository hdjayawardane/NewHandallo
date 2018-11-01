// import React, {Component} from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     Button,
//     AsyncStorage
// } from "react-native";
// //import { Button } from "react-native-elements";

// class Login extends Component{

//     signIn = async ()=> {
//         await AsyncStorage.setItem('userToken', 'Himal')
//         this.props.navigation.navigate('App')

//     }
//     render(){
//         return(
//             <View style={styles.container} > 
//                 <Text>LoginScreen</Text>
//                 <Button title="Sign In" onPress={this.signIn}/>
//                 <Button title="Sign Up" onPress={()=> this.props.navigation.navigate('Signup')}/>
//             </View>
           
//         );
//     }
 
// }
// export default Login;

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent:'center'
        
//     }
// });


import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';


class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidMount(){
        this.loadInitiolState().done();
    }

    loadInitiolState = async () => {
        var value = await AsyncStorage.getItem('token');
        if (value !== null){
            this.props.navigation.navigate('profile');
        }
    }

    login = () => {
        fetch('https://handallo-66656.firebaseio.com/b.json', {
            method: 'POST',
            headers:{
                'Content-type':'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })

        .then((response) => response.json())
        .then((res) => {

            if (res.state===true){
               AsyncStorage.setItem('token',res.token);
               this.props.navigation.navigate('Home');
            } else {
                alert('no responce from backend')
            }
        })
        .done();
    }

    render(){
        const { navigation } = this.props;
        return(
            <KeyboardAvoidingView style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}> - LOGIN - </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Username'
                        onChangeText={ (username) => this.setState({username})}
                        underlineColorAndroid='transparent' 
                        />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Password'
                        onChangeText={(password) => this.setState({ password })}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                    />

                    <TouchableOpacity 
                        style={styles.btn} 
                        onPress={this.login}>
                        <Text> Log in </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            navigation.navigate('Home');
                        }}>
                        <Text> Register </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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
        marginBottom:5
    },

});

export default Login;

//Native base UI component for Login is below

// import React, { Component } from 'react';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';


// class Login  extends Component {
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Content>
//           <Form>
//             <Item inlineLabel>
//               <Label>Username</Label>
//               <Input />
//             </Item>
//             <Item inlineLabel last>
//               <Label>Password</Label>
//               <Input />
//             </Item>
//           </Form>
//         </Content>
//       </Container>
//     );
//   }
// }
// export default Login;