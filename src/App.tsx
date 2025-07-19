/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// aimport { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet,SafeAreaView,  View, Text, TouchableOpacity, Button} from 'react-native';
//import { StatusBar } from 'react-native/types_generated/index';
//import { SafeAreaView } from 'react-native/types_generated/index';
//import { Button } from 'react-native/types_generated/index';
import Card from './components/Card'
function App() {
  function sayHello(){
    console.log("Merhaba React")
  }
  return (
    <SafeAreaView style={styles.safeView}>
      <Card title="Bill Gates" text="Next Next Next!"/>
      <Card title="Linus Torvalds" text="Talk is cheap. Show me the code."/>
      <Card title="Richard Stallman" text="Free software, free society."/>
    </SafeAreaView>
    
  );
}        

 const styles = StyleSheet.create({
  safeView:{
    paddingTop: StatusBar.currentHeight,
    flex:1,
    backgroundColor:'#e0e0e0',
  },
  
});

export default App;
