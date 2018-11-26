import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from "react-native";
//import {Card, Button} from 'react-native-elements';



class Shop extends Component{
  render(){
    return(
        <View style={styles.container} > 
            <Text>Cart</Text>
        </View>
       
    );
}


}
export default Shop;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
        
    }
});

