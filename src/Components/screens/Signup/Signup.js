import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet, Button
} from "react-native";

class Signup extends Component{
    render(){
        return(
            <View style={styles.container} > 
                <Text>SignupScreen</Text>
                <Button title="GO" onPress={()=> this.props.navigation.navigate('Home')}/>
            </View>
           
        );
    }

}
export default Signup;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
        
    }
});