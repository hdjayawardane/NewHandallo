// import React, {Component} from "react";
// import {
//     View,
//     Text,
//     StyleSheet
// } from "react-native";
// import Shop from '../BaseComponents/Shop/Shop'



// class Home extends Component{
//     render(){
//         return(
//             <Shop></Shop>
//         );
//     }

// }
// export default Home;

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent:'center'
        
//     }
// });

// import React, { Component, PropTypes } from 'react';
// import { Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon } from 'native-base';
// //import ProgressiveImage from '../global/progressiveImage';
// import {
// 	View,
// 	Text,
// 	Image,
// 	ListView,
// 	StyleSheet,
// 	Dimensions,
// } from 'react-native';
// //import { Navigation } from 'react-native-navigation';
// import ProgressBar from '../BaseComponents/ShopsList/ProgressBar';


// const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


// class Home extends Component {
//     constructor(props) {
// 		super(props);
// 		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
// 		this.state = {
// 			isLoading: true,
//             dataSource: ds.cloneWithRows(this.props.stories),
//             showLoader:true
//         }
//         this.props.stories=[
//             {
//             "topicName":"sometopic",
//             "title":"sometitle",
//             "imageurl":"https://ibb.co/gyMrUf",
//             "story":"storydata",
//             "moral":"",
//             "sid":0
//             },
            
//             ]
		
//     }
   
  
    
//     renderCards(stories) {
// 		return (
// 			<Card>
// 				<CardItem>
// 					<Left style={{flex:0.8}}>
// 						<Icon name="ios-book" />
// 						<Body>
// 							<Text style={{fontWeight:'bold',fontSize:17}}>{stories.title}</Text>
// 							<Text note style={{fontSize:15}}>{stories.topicName}</Text>
// 						</Body>
// 					</Left>
// 					<Right style={{flex:0.2}}>
// 						<Icon name="ios-heart"/>
// 					</Right>
// 				</CardItem>
// 				<CardItem cardBody>
// 					<ProgressiveImage source={{ uri: stories.imageurl }} thumbnail={require("../BaseComponents/ShopsList/login.jpg")} style={{ width: viewportWidth, height: 170 }} thumbnailresizeMode={"cover"} thumbnailkey={"pimg"} />
// 				</CardItem>
// 				<CardItem content>
// 					<Text>{stories.story}</Text>
// 				</CardItem>
// 			</Card>
//         )
//         }

//         renderLoader(){
//             return (
//                 this.state.showLoader?<View><Spinner color='red' /></View>:null
//             )
//         }
//         hideLoader(){
//             setTimeout(() => {
//                 this.setState({showLoader:false})
//             }, 1);	
//         }

 



//    componentDidMount() {c
// 		var self = this;
// 		setTimeout(function () {
// 			self.setState({ isLoading: false });
// 		}, 1);
// 	}
// //    render() {
// // 		return (
// // 			this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
// // 				<View style={styles.listContainer}>
// // 				</View>
// //         );
//     render() {
//             return (
//                 this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
//                     <View style={styles.listContainer}>
//                         <SGListView
//                             dataSource={this.state.dataSource}
//                             renderRow={this.renderCards}
//                             pageSize={10}
//                             stickyHeaderIndices={[]}
//                             onEndReachedThreshold={1}
//                             initialListSize={10}
//                             renderFooter={(event)=>this.renderLoader(event)}
//                             scrollRenderAheadDistance={4}
//                             onEndReached={(event)=>this.hideLoader(event)}
//                         />
//                     </View>
//             );
//         }
//     }
	




// this.props.stories=[
//     {
//     "topicName":"sometopic",
//     "title":"sometitle",
//     "imageurl":"https://ibb.co/gyMrUf",
//     "story":"storydata",
//     "moral":"",
//     "sid":0
//     },
    
//     ]
  


import React, { Component } from 'react';
import { Image, Dimensions,AsyncStorage,  } from 'react-native';
import { Container, List, Content, Card, CardItem, ListItem, Text, Button, Icon, Left, Body, Right } from 'native-base';


class Home extends Component {

  constructor(props) {
    super(props);
  
      this.state = {
          data: [],
      };

      this.onPressShop = this.onPressShop. bind(this);
  }


onPressShop = (shopid) => {
  console.log(shopid);
    this.props.navigation.navigate('FoodItem',{
      ShopId : shopid
    });

}



// onPressShopButton = () => {
    
//     this.props.navigation.navigate('ShopDetails');
// }
componentDidMount(){
 this.getData()
}

async getData(){
   const token = await AsyncStorage.getItem('token')
    console.log(token)
    fetch('https://handallo.azurewebsites.net/api/Shop/',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer '.concat(token)
      }
    }).then((response) => response.json())
      .then(res => {
    console.log(res)
      this.setState({
         data: res
      });
  })
}

  render() {
    return (
      <Container>
      <Content>
      <List dataArray={this.state.data} renderRow={(item) =>
      <ListItem>
        <Card>
          <CardItem 
            button = {true}
            onPress = { ()=>{this.onPressShop(item.ShopId)}}
            cardBody  
            style={{width: Dimensions.get('window').width}}>
            <Image source={{uri: item.url }} style={{height: 200, width: null , flex: 1}}/>
          </CardItem>
          <CardItem>
              <Body>
                <Text>{item.ShopName}</Text>
                <Text note>{item.Des_cription}</Text>
               
              </Body>
              <Button> 
               
              </Button>
          </CardItem>
        </Card>
        </ListItem>
      }>
      </List>
      </Content>
    </Container>
    );
  }
}

export default Home;