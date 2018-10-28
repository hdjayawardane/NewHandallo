import React, {Component} from "react";
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    SafeAreaView, 
    TextInput, 
    Platform, 
} from "react-native";



class Search extends Component{
    



    render(){
        return(
            <View style={styles.container} > 
                <Text>LoggedOutScreen</Text>
            </View>
           
        );
    }

}

    // componentWillMount() {
    //     this.startHeaderHeight = 80
    //     if (Platform.OS == 'android') {
    //         this.startHeaderHeight = 100 + StatusBar.currentHeight
    //     }
    // }


    // render(){
    //     return(
    //         <SafeAreaView style={{ flex: 1}}>
    //         <View style={{ flex: 1}}>
    //             <View style={{height:this.startHeaderHeight,backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
    //                 <View style={ {flexDirection : 'row', padding: 10, 
    //                 backgroundColor: 'white' , marginHorizontal: 20, 
    //                 shadowOffset: { width: 0, height: 0 },
    //                         shadowColor: 'black',
    //                         shadowOpacity: 0.2,
    //                         elevation: 1,
    //                         marginTop: Platform.OS == 'android' ? 30 : null
    //                 // shadowOffset: { width:0, heitht:0, shadowColor:'black', 
    //                 // shadowOpacity: 0.2, 
    //                 // elevation: 1}
    //              }}>
    //                     <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
    //                     <TextInput
    //                     underlineColorAndroid="transparent"
    //                     placeholder="Search Food or Restuarents "
    //                     placeholderTextColor="grey"
    //                     style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }} />
    //                 </View>
    //             </View>

    //              <ScrollView
    //                     scrollEventThrottle={16}
    //                 >
    //                     <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
    //                         <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
    //                             What can we help you find, Varun?
    //                         </Text>

    //                         <View style={{ height: 130, marginTop: 20 }}>
    //                             <ScrollView
    //                                 horizontal={true}
    //                                 showsHorizontalScrollIndicator={false}
    //                             >
    //                                 <Category imageUri={require('../assets/home.jpg')}
    //                                     name="Home"
    //                                 />
    //                                 <Category imageUri={require('../assets/experiences.jpg')}
    //                                     name="Experiences"
    //                                 />
    //                                 <Category imageUri={require('../assets/restaurant.jpg')}
    //                                     name="Resturant"
    //                                 />
    //                 </ScrollView>
    //                 </View>

    //         </View>
    //         </SafeAreaView>
           
//         );
//     }

// }
export default Search;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
        
    }
});