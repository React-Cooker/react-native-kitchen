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
  
  return (
    <SafeAreaView style={styles.safeView}>
      
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
