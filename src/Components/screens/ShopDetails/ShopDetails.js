// import React, {Component} from "react";
// import {
//     View,
//     Text,
//     StyleSheet
// } from "react-native";

// class ShopDetails extends Component{
//     render(){
//         return(
//             <View style={styles.container} > 
//                 <Text>ShopDetails</Text>
//             </View>
           
//         );
//     }

// }

// export default ShopDetails;

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent:'center'
        
//     }
// });


import React, { Component } from 'react';
import { Image, Dimensions,AsyncStorage,  } from 'react-native';
import { Container, List, Content, Card, CardItem, ListItem, Text, Button, Icon, Left, Body, Right } from 'native-base';



class ShopDetails extends Component {

  constructor(props) {
    super(props);
  
      this.state = {
          data: [],
      };
  }


// onPressShop = () => {
//     this.props.navigation.navigate('ShopDetails');

// }




// componentDidMount(){
//  this.getData()
// }

// async getData(){
//    const token = await AsyncStorage.getItem('token')
//     console.log(token)
//     fetch('https://handallo.azurewebsites.net/api/Shop/',{
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization':'Bearer '.concat(token)
//       }
//     }).then((response) => response.json())
//       .then(res => {
//     console.log(res)
//       this.setState({
//          data: res
//       });
//   })
// }

  render() {
    return (
      <Container>
      <Content>
      {/* <List dataArray={this.state.data} renderRow={(item) =>
      <ListItem>
        <Card>
          <CardItem cardBody  style={{width: Dimensions.get('window').width}} onPress={this.onPressShop}>
            <Image source={{uri: item.url }} style={{height: 200, width: null , flex: 1}}/>
          </CardItem>
          <CardItem>
              <Body>
                <Text>{item.ShopName}</Text>
                <Text note>{item.Des_cription}</Text>
              </Body>
          </CardItem>
        </Card>
        </ListItem>
      }>
      </List> */}

      <Text>dfghjk</Text>
      </Content>
    </Container>
    );
  }
}

export default ShopDetails;


