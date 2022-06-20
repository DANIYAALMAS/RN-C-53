import React, { Component } from 'react';
import { Button, View, Text,Alert } from 'react-native';


 export default class App extends Component {
   displayAlert(){
      Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
     alert("i am busy");

   }
  render(){
    return(
      <View style={{marginTop:200}}>
      <Button color="red" title="Click Me" onPress={this.displayAlert}/>
      </View>
    )
  }
}
