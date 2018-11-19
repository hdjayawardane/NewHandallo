import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class ShopDetails extends Component{
    render(){
        return(
            <View style={styles.container} > 
                <Text>ShopDetails</Text>
            </View>
           
        );
    }

}

export default ShopDetails;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
        
    }
});