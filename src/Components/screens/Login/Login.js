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

// import React, { Component } from 'react';
// import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';


// class Login extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//         }
//     }

//     componentDidMount(){
//         this.loadInitiolState().done();
//     }

//     loadInitiolState = async () => {
//         var value = await AsyncStorage.getItem('token');
//         if (value !== null){
//             this.props.navigation.navigate('profile');
//         }
//     }

//     login = () => {
//         fetch('https://mighty-taiga-45064.herokuapp.com/login', {
//             method: 'POST',
//             headers:{
//                 'Content-type':'application/json',
//             },
//             body: JSON.stringify({
//                 username: this.state.username,
//                 password: this.state.password,
//             })
//         })

//         .then((response) => response.json())
//         .then((res) => {

//             if (res.state===true){
//                AsyncStorage.setItem('token',res.token);
//                this.props.navigation.navigate('Profile');
//             } else {
//                 alert('no responce from backend')
//             }
//         })
//         .done();
//     }

//     render(){
//         const { navigation } = this.props;
//         return(
//             <KeyboardAvoidingView style={styles.wrapper}>
//                 <View style={styles.container}>
//                     <Text style={styles.header}> - LOGIN - </Text>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder='Username'
//                         onChangeText={ (username) => this.setState({username})}
//                         underlineColorAndroid='transparent' 
//                         />
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder='Password'
//                         onChangeText={(password) => this.setState({ password })}
//                         underlineColorAndroid='transparent'
//                         secureTextEntry={true}
//                     />

//                     <TouchableOpacity 
//                         style={styles.btn} 
//                         onPress={this.login}>
//                         <Text> Log in </Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={styles.btn}
//                         onPress={() => {
//                             navigation.navigate('Register');
//                         }}>
//                         <Text> Register </Text>
//                     </TouchableOpacity>
//                 </View>
//             </KeyboardAvoidingView>
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
//         marginBottom:5
//     },

// });


// export default Login;

// import React, { Component } from 'react';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// export default class Login extends Component {
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Content />
//         <Footer>
//           <FooterTab>
//             <Button>
//               <Icon name="apps" />
//             </Button>
//             <Button>
//               <Icon name="camera" />
//             </Button>
//             <Button active>
//               <Icon active name="navigate" />
//             </Button>
//             <Button>
//               <Icon name="person" />
//             </Button>
//           </FooterTab>
//         </Footer>
//       </Container>
//     );
//   }
// }


// //Fixed Lable  https://docs.nativebase.io/Components.html#fixed-label-headref
// import React, { Component } from 'react';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
// export default class Login extends Component {
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Content>
//           <Form>
//             <Item fixedLabel>
//               <Label>Username</Label>
//               <Input />
//             </Item>
//             <Item fixedLabel last>
//               <Label>Password</Label>
//               <Input />
//             </Item>
//           </Form>
//         </Content>
//       </Container>
//     );
//   }
// }

// dsfsdnsdjvdfsbnvijdfsnbvjdsnbvjdsvcdshvbsdjhvbhjdbvjhdbvhjdsbvhjdbshvbdsjhvbdsjhvb
import React, { Component } from 'react';
import { StyleSheet, View, Image, AsyncStorage,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Icon, H2 } from 'native-base';
//import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation'


class Login extends Component {

  constructor(props){
    super(props);
    
  }
  state={
    username:'',
    password:''
  };

  
  



  setUsername=(text)=>{
    this.setState({username:text})
  }
  setPassword =(text)=> {
    this.setState({password:text})
  }
  newToHandalloButton=() =>{
        this.props.navigation.navigate('Signup')
  }

  login(username,password){
      const bodyobj = {
          // email: username,
          // pass_word: password
          email: "dulangah2@gmail.com",
          pass_word: "123456"
      }
      console.log(bodyobj),
    //console.log(username)
    fetch('https://handallo.azurewebsites.net/api/Customer/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    //   body: JSON.stringify({
    //     email: username,
    //     pass_word: password,
    //   }),
    body: JSON.stringify(bodyobj)
      
  })
  .then((response) => {
    console.log(response)
      if(response.status === 200){
        response.json().then(
            responsejson => (this.loginsucess(responsejson))
        )
      }
      else{
          alert("login failed")
      }
      
  })

    }
 async loginsucess(responsejson){
     const token = responsejson.token;
     //console.log(token)
     try{
        await AsyncStorage.setItem("token",token);
     }catch(error){
         console.log(error)
     }
     //const token1 = AsyncStorage.getItem("token");
     //const keys = await AsyncStorage.getAllKeys()
     //const values = await AsyncStorage.multiGet(keys)
     //console.log(token1);
     this.getData();
     this.props.navigation.navigate('Home');
 }
 async getData(){
    await AsyncStorage
  .getItem('token')
  .then((value) => console.log(value))
  .done();

}
 


 
    

  render() {
    return (
        <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username or Email</Label>
              <Input onChangeText={this.setUsername}/> 
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input  onChangeText = {this.setPassword} />
            </Item>
          </Form> 

          <Button full onPress={()=>this.login(this.state.username, this.state.password)}>
          <Text>login</Text>
          </Button>
          <Button full onPress={this.ForgotPassword}>
          <Text>Forgot Password</Text>
          </Button>
          <Text>New to Handallo?</Text>
          <Button  full onPress={this.newToHandalloButton}> 
        <Text>Sign Up</Text>
          </Button>

          </Content>
      </Container>
       
    );
  }
}

export default Login;


// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent:'center'
        
//     }
// });

// import React, { Component } from 'react';
// import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';


// class Login extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//         }
//     }

//     componentDidMount(){
//         this.loadInitiolState().done();
//     }

//     loadInitiolState = async () => {
//         var value = await AsyncStorage.getItem('token');
//         if (value !== null){
//             this.props.navigation.navigate('profile');
//         }
//     }

//     login = () => {
//         fetch('https://handallo.azurewebsites.net/api/Customer/login', {
//             method: 'POST',
//             headers:{
//                 'Content-type':'application/json',
//             },
//             body: JSON.stringify({
//                 username: this.state.username,
//                 password: this.state.password,
//             })
            
//         })

//         .then((response) => console.log(response))
//         //.then((response) => response.json())
//         .then((res) => {

//             if (res.state===true){
//                AsyncStorage.setItem('token',res.token);
//                this.props.navigation.navigate('Home');
//             } else {
//                 alert('no responce from backend')
//             }
//         })
//         .done();
//     }

//     render(){
//         const { navigation } = this.props;
//         return(
//             <KeyboardAvoidingView style={styles.wrapper}>
//                 <View style={styles.container}>
//                     <Text style={styles.header}> - LOGIN - </Text>
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder='Username'
//                         onChangeText={ (username) => this.setState({username})}
//                         underlineColorAndroid='transparent' 
//                         />
//                     <TextInput
//                         style={styles.textInput}
//                         placeholder='Password'
//                         onChangeText={(password) => this.setState({ password })}
//                         underlineColorAndroid='transparent'
//                         secureTextEntry={true}
//                     />

//                     <TouchableOpacity 
//                         style={styles.btn} 
//                         onPress={this.login}>
//                         <Text> Log in </Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={styles.btn}
//                         onPress={() => {
//                             navigation.navigate('Signup');
//                         }}>
//                         <Text> Register </Text>
//                     </TouchableOpacity>
//                 </View>
//             </KeyboardAvoidingView>
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
//         marginBottom:5
//     },

// });


// export default Login;
