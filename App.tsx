/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// aimport { NewAppScreen } from '@react-native/new-app-screen';
import { /*StatusBar,*/ StyleSheet, /*useColorScheme,*/ View, Text, Button} from 'react-native';
//import { Button } from 'react-native/types_generated/index';

function App() {
  function sayHello(){
    console.log("Merhaba React")
  }
  return (
    <View>
      <Text>Merhaba Yakup</Text>
      <Button title="Press me" onPress={() => {sayHello()}} disabled={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
