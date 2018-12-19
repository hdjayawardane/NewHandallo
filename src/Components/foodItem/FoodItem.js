import React, {Component} from "react";
import { Container, List, Content, Card, CardItem, ListItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image, Dimensions,AsyncStorage,TouchableHighlight  } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
 
var radio_props = [
  {label: 'Not Selected', value: 0 },
  {label: 'Small Potion', value: 1 },
  {label: 'Medium Potion', value: 2 },
  {label: 'Large Potion', value: 3 },
];



class FoodItem extends Component{
    constructor(props) {
        super(props);
      
          this.state = {
              data: [],
              ShopID: null,
              latitude:'',
              longitude:'',
              error:null,
              selectedItems: [],
              value: 0,
              IsSmallPotion: false,
              IsMediumPotion: false,
              IsLargePotion: false
          };
    
      }

      componentDidMount(){
        const shopid = (this.props.navigation.state.params);
        this.state.ShopID=shopid.ShopId
          this.getData(shopid.ShopId);
          navigator.geolocation.getCurrentPosition(
              (position) => {
                  this.setState({
                      latitude:position.coords.latitude,
                      longitude:position.coords.longitude,
                      error:null
                  })
              },
              (error) => this.setState({error:error.message}),
              {enableHighAccuracy:true,timeout:20000,maximumAge:1000}
          )
      }

      onItemPressed(item) {
            if(this.state.value === 1){
                this.state.IsSmallPotion = true;
            }
            else if(this.state.value === 2){
                this.state.IsMediumPotion = true;
            }
            else if(this.state.value === 3){
                this.state.IsLargePotion = true;
            }

        
            fooditems={
                "ShopId":this.state.ShopID,
                "FoodItemId":item.FoodItemId,
                "IsSmallPotion":this.state.IsSmallPotion,
                "IsLargePotion":this.state.IsLargePotion,
                "IsMediumPotion":this.state.IsMediumPotion,
                
            }

            if (this.state.selectedItems.includes(fooditems)){
                this.state.selectedItems.pop(fooditems);
            }
            else{
                this.state.IsSmallPotion = false;
                this.state.IsMediumPotion = false;
                this.state.IsLargePotion = false;
                this.state.selectedItems.push(fooditems)
                
            }
            //console.log(fooditems)

            //console.log(this.state.selectedItems)
    

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

    
       


    // itemExists(fooditems) {
    //   if(this.state.selectedItems.includes(fooditems)){ 
    //     return true;
    //   }
    // }

 async placeorder(){
        var today = new Date();
        date= today.getFullYear()+ "/"+ parseInt(today.getMonth()+1) +"/"+ today.getDate();
        time=today.getHours() + ":"+today.getMinutes();
        const Customer = await this.customerdetails();
        console.log(Customer)

        order={
            "OrderDate":date,
            "OrderTime":time,
            "Order":this.state.selectedItems,
            "Customer" : Customer,
            "PaymentMethod" : "Cash" 
        };
       console.log(order)
       fetch('https://handallo.azurewebsites.net/api/Customer/placeorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      //   body: JSON.stringify({
      //     email: username,
      //     pass_word: password,
      //   }),
      body: JSON.stringify(order)
        
    }).then((response) => console.log(response))
    }


async customerdetails(){
    var decoded;
  const token =  await AsyncStorage.getItem('token')

    var jwtDecode = require('jwt-decode');
    
    decoded = jwtDecode(token);


  Customer={
    "CustomerId" : decoded.acr,
    "CurrentLat" : this.state.latitude,
    "CurrentLng" : this.state.longitude,
}
  //console.log(Customer);
  return await Customer;
}


      getData(shopid){
        console.log(shopid);
    fetch(`https://handallo.azurewebsites.net/api/Shop/fooditems/${shopid}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
      }
    }).then((response) => response.json())
    .then(res => {
  console.log(res.value)
    this.setState({
       data: res.value
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
                      <RadioForm
                        isSelected={false}
                        radio_props={radio_props}
                        initial={0}
                        formHorizontal={false}
                        buttonHorizontal={true}
                        onPress={(value) => {this.setState({value:value})}}
                    />
                    </Body>
                    <Button
                       onPress = { ()=>{this.onItemPressed(item)}}>
                        <Text>Add To Cart</Text>
                    </Button>
                </CardItem>
              </Card>
              {/* </TouchableHighlight> */}
              </ListItem>
            }>
            </List>
            <Button full onPress={()=>this.placeorder()}>
          <Text>PlaceOrder</Text>
          </Button>
            </Content>
          </Container>
           
        );
    }

}
export default FoodItem;

