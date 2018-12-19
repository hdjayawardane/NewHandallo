import React, {Component} from "react";
import { Container, List, Content, Card, CardItem, ListItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image, Dimensions,AsyncStorage,TouchableHighlight  } from 'react-native';

class Orders extends Component{
    constructor(props) {
        super(props);
      
          this.state = {
              data: [],
              ShopID: null,
              selectedItems: []
          };
    
      }

      componentDidMount(){
        const shopid = (this.props.navigation.state.params);
          this.getData(shopid.ShopId);
      }

      onItemPressed(item) {

        if (!this.itemExists(item)) {
          this.state.selectedItems.push(item)
        }

      

        // var oldSelectedItems = this.state.selectedItems;
        // var itemState = oldSelectedItems[item.FoodItemId];
        // if(!itemState) {
        //     oldSelectedItems[item.FoodItemId] = true;
        // }
        // else {
        //     var newState = itemState? false: true;
        //     oldSelectedItems[item.FoodItemId] = newState;
        // }

        
        console.log(this.state.selectedItems)
    }


    itemExists(item) {
      if(this.state.selectedItems.includes(item)){
        this.state.selectedItems.pop(item);
        return true;
      }
    }
s




      getData(shopid){
        console.log(shopid);
    fetch(`https://handallo.azurewebsites.net/api/Shop/fooditems/${shopid}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
      }
    }).then((response) => response.json())
    .then(res => {
  console.log(res)
    this.setState({
       data: res
    });
})
      }


    render(){
       
        //const {navigation} = this.props,
       // const shopid = this.props.navigation.state.params;
        
        return(
            <Container>
            <Content>
            <List dataArray={this.state.data} renderRow={(item) =>
            <ListItem>
              {/* <TouchableHighlight onpress = {this.onItemPressed.bind(this,item)}
              underlayColor='#F00'
              > */}
              <Card>
                <CardItem 
                  button = {true}
                  cardBody  
                  onPress = { ()=>{this.onItemPressed(item)}}
                  style={{width: Dimensions.get('window').width}}>
                  <Image source={{uri: item.url }} style={{height: 200, width: null , flex: 1}}/>
                </CardItem>
                <CardItem>
                    <Body>
                      <Text>{item.FoodName}</Text>
                      <Text note>{item.Description}</Text>
                     
                    </Body>
                    <Button> 
                     
                    </Button>
                </CardItem>
              </Card>
              {/* </TouchableHighlight> */}
              </ListItem>
            }>
            </List>
            </Content>
          </Container>
           
        );
    }

}
export default Orders;

