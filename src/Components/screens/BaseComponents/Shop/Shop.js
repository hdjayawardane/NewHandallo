import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from "react-native";
import {Card, Button} from 'react-native-elements';



class Shop extends Component{
    render(){
        return(
<Card
  title='HELLO WORLD'
  image={require('/Users/himal/Documents/Development/RN/NewHandallo/src/Components/images/login.jpg')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={{name: 'code'}}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>

 

              
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