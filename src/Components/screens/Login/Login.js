import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage
} from "react-native";
//import { Button } from "react-native-elements";

class Login extends Component{

    signIn = async ()=> {
        await AsyncStorage.setItem('userToken', 'Himal')
        this.props.navigation.navigate('App')

    }
    render(){
        return(
            <View style={styles.container} > 
                <Text>LoginScreen</Text>
                <Button title="Sign In" onPress={this.signIn}/>
                <Button title="Sign Up" onPress={()=> this.props.navigation.navigate('Signup')}/>
            </View>
           
        );
    }
 
}
export default Login;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
        
    }
});