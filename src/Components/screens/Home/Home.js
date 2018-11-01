import React, {Component} from "react";
import { List, ListItem } from 'react-native-elements'
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Home extends Component{
    render(){
        return( <List>
            <ListItem
              roundAvatar
              title='Limited supply! Its like digital gold!'
              subtitle={
                <View style={styles.subtitleView}>
                  <Image source={require('../Images/upalis.jpeg')} style={styles.ratingImage}/>
                  <Text style={styles.ratingText}>5 months ago</Text>
                </View>
              }
              avatar={require('../Images/upalis.jpeg')}
            />
          </List>

        );
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