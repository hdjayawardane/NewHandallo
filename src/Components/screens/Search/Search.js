// // import React, {Component} from "react";
// // import {
// //     View,
// //     Text,
// //     StatusBar,
// //     StyleSheet,
// //     SafeAreaView, 
// //     TextInput, 
// //     Platform, 
// // } from "react-native";




// // class Search extends Component{
    



// //     render(){
// //         return(
// //             <View style={styles.container} > 
// //                 <Text>Search Screen</Text>
// //             </View>
           
// //         );
// //     }

// // }

// // //dddddddddddddddddd

// //     // componentWillMount() {
// //     //     this.startHeaderHeight = 80
// //     //     if (Platform.OS == 'android') {
// //     //         this.startHeaderHeight = 100 + StatusBar.currentHeight
// //     //     }
// //     // }


// //     // render(){
// //     //     return(
// //     //         <SafeAreaView style={{ flex: 1}}>
// //     //         <View style={{ flex: 1}}>
// //     //             <View style={{height:this.startHeaderHeight,backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
// //     //                 <View style={ {flexDirection : 'row', padding: 10, 
// //     //                 backgroundColor: 'white' , marginHorizontal: 20, 
// //     //                 shadowOffset: { width: 0, height: 0 },
// //     //                         shadowColor: 'black',
// //     //                         shadowOpacity: 0.2,
// //     //                         elevation: 1,
// //     //                         marginTop: Platform.OS == 'android' ? 30 : null
// //     //                 // shadowOffset: { width:0, heitht:0, shadowColor:'black', 
// //     //                 // shadowOpacity: 0.2, 
// //     //                 // elevation: 1}
// //     //              }}>
// //     //                     <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
// //     //                     <TextInput
// //     //                     underlineColorAndroid="transparent"
// //     //                     placeholder="Search Food or Restuarents "
// //     //                     placeholderTextColor="grey"
// //     //                     style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }} />
// //     //                 </View>
// //     //             </View>

// //     //              <ScrollView
// //     //                     scrollEventThrottle={16}
// //     //                 >
// //     //                     <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
// //     //                         <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
// //     //                             What can we help you find, Varun?
// //     //                         </Text>

// //     //                         <View style={{ height: 130, marginTop: 20 }}>
// //     //                             <ScrollView
// //     //                                 horizontal={true}
// //     //                                 showsHorizontalScrollIndicator={false}
// //     //                             >
// //     //                                 <Category imageUri={require('../assets/home.jpg')}
// //     //                                     name="Home"
// //     //                                 />
// //     //                                 <Category imageUri={require('../assets/experiences.jpg')}
// //     //                                     name="Experiences"
// //     //                                 />
// //     //                                 <Category imageUri={require('../assets/restaurant.jpg')}
// //     //                                     name="Resturant"
// //     //                                 />
// //     //                 </ScrollView>
// //     //                 </View>

// //     //         </View>
// //     //         </SafeAreaView>
           
// // //         );
// // //     }

// // // }


// // //ddddddddddddddddddddd


// // // export default Search;

// // // const styles = StyleSheet.create({
// // //     container:{
// // //         flex: 1,
// // //         alignItems: 'center',
// // //         justifyContent:'center'
        
// // //     }
// // // });

// // // import React, {Component} from "react";
// // // import {
// // //     View,
// // //     Text,
// // //     StyleSheet
// // // } from "react-native";
// // // import Shop from '../BaseComponents/Shop/Shop'



// // // class Home extends Component{
// // //     render(){
// // //         return(
// // //             <Shop></Shop>
// // //         );
// // //     }

// // // }
// // export default Search;

// // const styles = StyleSheet.create({
// //     container:{
// //         flex: 1,
// //         alignItems: 'center',
// //         justifyContent:'center'
        
// //     }
// // });

// import React, { Component, PropTypes } from 'react';
// import { Container, Content, Card, CardItem, Left,Right, Body, Thumbnail,Spinner, Icon, SGListView } from 'native-base';
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


// class Search extends Component {
//     constructor(props) {
// 		super(props);
// 		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
// 		this.state = {
// 			isLoading: true,
//             dataSource: ds.cloneWithRows(this.props.stories=[
//                 {
//                 "topicName":"sometopic",
//                 "title":"sometitle",
//                 "imageurl":"imageurl",
//                 "story":"storydata",
//                 "moral":"",
//                 "sid":0
//                 }
//                 ]),
//             showLoader:true


//         }
		
//     };
   
  
    
//     renderCards(stories) {
// 		return (
// 			<Content>
//                 <List dataarray={} renderRow={(item) =>
//                 <ListItem >
//                       <Card>
//             <CardItem>
//               <Left>
//                 <Thumbnail source={{uri: 'Image URL'}} />
//                 <Body>
//                   <Text>NativeBase</Text>
//                   <Text note>GeekyAnts</Text>
//                 </Body>
//               </Left>
//             </CardItem>
//             <CardItem cardBody>
//               <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
//             </CardItem>
//             <CardItem>
//               <Left>
//                 <Button transparent>
//                   <Icon active name="thumbs-up" />
//                   <Text>12 Likes</Text>
//                 </Button>
//               </Left>
//               <Body>
//                 <Button transparent>
//                   <Icon active name="chatbubbles" />
//                   <Text>4 Comments</Text>
//                 </Button>
//               </Body>
//               <Right>
//                 <Text>11h ago</Text>
//               </Right>
//             </CardItem>
//           </Card>

//                 </ListItem>
//             }>
//             </List>
//             </Content>
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

 



//    componentDidMount() {
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
//                 this.state.isLoading ? <View //style={styles.progressBar}
//                 ><ProgressBar /></View> :
//                     <View //style={styles.listContainer}
//                     >
//                         <SGListView
//                             dataSource={this.state.dataSource}
//                             renderRow={this.renderCards}
//                             pageSize={10}
//                             stickyHeaderIndices={[]}
//                             onEndReachedThreshold={1}
//                             initialListSize={10}
//                             //renderFooter={(event)=>this.renderLoader(event)}
//                             scrollRenderAheadDistance={4}
//                            // onEndReached={(event)=>this.hideLoader(event)}
//                         />
//                     </View>
//             );
//         }
//     }
	

//     export default Search;


// // // this.props.stories=[
// // //     {
// // //     "topicName":"sometopic",
// // //     "title":"sometitle",
// // //     "imageurl":"https://ibb.co/gyMrUf",
// // //     "story":"storydata",
// // //     "moral":"",
// // //     "sid":0
// // //     },
    
// // //     ]


import React, {Component} from "react";
import {
    View,
    
    StyleSheet, TouchableOpacity
} from "react-native";
import {  Button, Text } from 'native-base';
//import {Card, Button} from 'react-native-elements';



class Search extends Component{


goShopDetails = () =>{
        this.props.navigation.navigate('Location')
  }







  render(){
    return(
        <View style={styles.container} > 
            <Button full onPress={()=>this.goShopDetails()}>
            <Text>login</Text>
            </Button>
          
            <Text>Cart</Text>
        </View>
       
    );
}


}
export default Search;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
        
    }
});


    
