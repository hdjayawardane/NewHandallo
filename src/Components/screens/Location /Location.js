import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Location extends Component{
    render(){
        return(
            <View style={styles.container} > 
                <Text>ProfileScreen</Text>
            </View>
           
        );
    }

}
export default Location;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
        
    }
});