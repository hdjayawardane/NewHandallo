import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Shop from '../BaseComponents/Shop/Shop'



class Home extends Component{
    render(){
        return(
            <Shop></Shop>
        );
    }

}
export default Home;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
        
    }
});