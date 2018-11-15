import React, {Component} from "react";
import { List, ListItem, Card, Button, Icon, Text} from 'react-native-elements'
import {
    View,
    
    StyleSheet,
    Image, SafeAreaView, ScrollView, Animated, width
} from "react-native";

import Shop from '../ScreenComponents/Shop'

class Home extends Component{
    render(){
        return( 
          <SafeAreaView style={{ flex: 1 }}>
            
            <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                { nativeEvent: { contentOffset: { y: this.scrollY } } }
                            ]
                        )}
                    >
                                <Shop>

                                </Shop>

                                <Shop>

</Shop>

                                <Shop>

</Shop>

                                <Shop>

</Shop>

                                <Shop>

</Shop>



          </ScrollView>
       
          </SafeAreaView>

        )
        ;
    }

}
export default Home;


styles = StyleSheet.create({
    subtitleView: {
      flexDirection: 'row',
      paddingLeft: 10,
      paddingTop: 5
    },
    ratingImage: {
      height: 19.21,
      width: 100
    },
    ratingText: {
      paddingLeft: 10,
      color: 'grey'
    }
  })