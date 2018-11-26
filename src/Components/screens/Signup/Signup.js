// import React, {Component} from "react";
// import {
//     View,
//     Text,
//     StyleSheet, Button
// } from "react-native";

// class Signup extends Component{
//     render(){
//         return(
//             <View style={styles.container} > 
//                 <Text>SignupScreen</Text>
//                 <Button title="GO" onPress={()=> this.props.navigation.navigate('Home')}/>
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
//sefjisbvlblghbdshbvhdfsbvhdfbvisdfbvidbsvhidsbvhbdshvbdkshbvkdsbvkdsbvkhdsbvhsdbvhsdbvkhbdshv
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { AsyncStorage, SafeAreaView,  StyleSheet, Button  } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Signup extends Component {

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


    signUp = () => {
        fetch('https://handallo.azurewebsites.net/api/Customer/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
             
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                //confirmPassword: this.state.confirmPassword,
                mobileNumber: this.state.mobileNumber
            })
        })

            .then((response) => response.json())
            .then((res) => {

                if (res.state === true) {
                    AsyncStorage.setItem('token', res.token);
                    this.props.navigation.navigate('Home');
                } else {
                   // alert(res.msg)
                    this.props.navigation.navigate('Home');
                }
            })
            .done();
    }

    render() {
        return (
    

     
            
      <Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>UserName</Label>
            <Input onChange={ (username) => this.setState({username})}/>
          </Item>
          

          <Item floatingLabel last>
            <Label>Email</Label>
            <Input onChange={ (email) => this.setState({email})} />
          </Item>

           <Item floatingLabel>
            <Label>New password</Label>
            <Input onChange={ (password) => this.setState({password})}/>
          </Item>


           <Item floatingLabel>
            <Label>Confirm password</Label>
            <Input onChange={ (confirmPassword) => this.setState({confirmPassword})}/>
          </Item>

          <Item floatingLabel>
            <Label>Mobile Number</Label>
            <Input onChange={ (mobileNumber) => this.setState({mobileNumber})}/>
          </Item>






        </Form>
        <Button
      onPress={this.signUp}
      title="Sign Up"
      color="#841534"
      accessibilityLabel="Learn more about this purple button"
       />
        {/* <Button
      onPress={this.ForgotPassword}
      title="Forgot Password?"
      color="#841581"
      accessibilityLabel="Learn more about this purple button"
       />
        <Button
      onPress={this.newToHandalloButton}
      title="New to Handallo?"
      color="#841581"
      accessibilityLabel="Learn more about this purple button"
       /> */}
      </Content>
      </Container>

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


export default Signup;




// import React, { Component } from 'react';
// import { Container, Header, Content, Form, Item, Input, Label, Button, Text, StyleSheet } from 'native-base';
// export default class Signup extends Component {
//   render() {
//     return (
//       <Container>
//         <Content>
//           <Form>
//             <Item floatingLabel>
//               <Label>Username</Label>
//               <Input />
//             </Item>
//             <Item floatingLabel last>
//               <Label>Password</Label>
//               <Input />
//             </Item>
//           </Form>
//         </Content>
//         <Button full style={styles.container} >
//        <Text>Primary</Text>
//        </Button>
//       </Container>
       
//     );
//   }
// }

// import React, { Component } from 'react';
// import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, StyleSheet, ScrollView } from 'react-native';
// import { StackNavigator } from 'react-navigation';

// class Signup extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             fullname: '',
//             username: '',
//             email: '',
//             phoneno: '',
//             password: '' 
//         }
//     }


//     login = () => {
//         fetch('https://mighty-taiga-45064.herokuapp.com/register', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json',
//             },
//             body: JSON.stringify({
//                 fullname: this.state.fullname,
//                 username: this.state.username,
//                 email: this.state.email,
//                 phoneno: this.state.phoneno,
//                 password: this.state.password 
//             })
//         })

//             .then((response) => response.json())
//             .then((res) => {

//                 if (res.state === true) {
//                     AsyncStorage.setItem('token', res.token);
//                     this.props.navigation.navigate('Home');
//                 } else {
//                     alert(res.msg)
//                 }
//             })
//             .done();
//     }

//     render() {
//         return (
//             <ScrollView>
//             <KeyboardAvoidingView style={styles.wrapper}>
//                 <View style={styles.container}>
//                     <Text style={styles.header}> - TidyMaster - </Text>
//                     <Text style={styles.header}> - REGISTER NEW USER - </Text>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder='Fullname'
//                         onChangeText={(fullname) => this.setState({ fullname })}
//                         underlineColorAndroid='transparent'
//                     />
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder='Username'
//                         onChangeText={(username) => this.setState({ username })}
//                         underlineColorAndroid='transparent'
//                     />
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder='Email'
//                         onChangeText={(email) => this.setState({ email })}
//                         underlineColorAndroid='transparent'
//                     />
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder='PhoneNo'
//                         onChangeText={(phoneno) => this.setState({ phoneno })}
//                         underlineColorAndroid='transparent'
//                     />
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder='Password'
//                         onChangeText={(password) => this.setState({ password })}
//                         underlineColorAndroid='transparent'
//                     />

//                     <TouchableOpacity
//                         style={styles.btn}
//                         onPress={this.login}>
//                         <Text> Register Now </Text>
//                     </TouchableOpacity>
//                 </View>
//             </KeyboardAvoidingView>
//             </ScrollView>
//         );
//     }
// }

// const styles = StyleSheet.create({

//     wrapper: {
//         flex: 1,
//     },
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#2896d3',
//         paddingLeft: 40,
//         paddingRight: 40,
//     },
//     header: {
//         fontSize: 24,
//         marginBottom: 60,
//         color: '#fff',
//         fontWeight: 'bold',
//     },
//     textInput: {
//         alignSelf: 'stretch',
//         padding: 16,
//         marginBottom: 20,
//         backgroundColor: '#fff',
//     },
//     btn: {
//         alignSelf: 'stretch',
//         backgroundColor: '#01c853',
//         padding: 20,
//         alignItems: 'center',
//     },

// });


// export default Signup;