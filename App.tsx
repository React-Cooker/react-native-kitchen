/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// aimport { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet,SafeAreaView, /*useColorScheme,*/ View, Text, Button} from 'react-native';
//import { StatusBar } from 'react-native/types_generated/index';
//import { SafeAreaView } from 'react-native/types_generated/index';
//import { Button } from 'react-native/types_generated/index';

function App() {
  function sayHello(){
    console.log("Merhaba React")
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{justifyContent: 'center',alignContent:'center' ,alignItems: 'center',backgroundColor: 'orange', height: StatusBar.currentHeight}}> 
        <Text>Notifications</Text> 
        </View>
      <View style={[styles.upper_view_container,{flex:1}]}>
            <Text>MerhabaYakup</Text>
           <Button title="Press me" onPress={() => {sayHello()}} /> 
    </View>
    <View style={[styles.bottom_view_container,{flex:1}]}>
      <Text> hoşgeldiniz </Text>
    </View>

    </SafeAreaView>
    
  );
}        

 const styles = StyleSheet.create({
  upper_view_container: {
    backgroundColor: 'red'
  },
  bottom_view_container: {
    backgroundColor: 'blue',
    alignItems: 'center'
  }
});

export default App;
