import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  SafeAreaView,
  Platform,
  Button,
  FlatList,
  Switch
} from 'react-native';
import { useState } from 'react';
const data = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'KafaKafe', isFavorite: false},
  {id: 2, name: 'BugG', isFavorite: false},
  {id: 3, name: 'Rock`n Code', isFavorite: true},
  {id: 4, name: 'do(drink)', isFavorite: false},
  {id: 5, name: 'esc', isFavorite: false},
];
function App(): React.JSX.Element { const isDarkMode = useColorScheme() === 'dark'; 
  const[cafeList, setCafeList] = useState(data);
  const[showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  
function onFavoritesChange(isFavoriteSelected: boolean){
  setShowOnlyFavorites(isFavoriteSelected);
  isFavoriteSelected ? 
   setCafeList(cafeList.filter(cafe => cafe.isFavorite))
   : setCafeList(data);
}

return (
    <SafeAreaView style={[styles.safeArea,{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, },]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={styles.contentContainer}>
        
          <Switch value={showOnlyFavorites} onValueChange={onFavoritesChange} />
      <FlatList data={cafeList} 
      renderItem={({item}) => <Text>{item.name}</Text>} />
      <Button title="Add" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    //flex: 1,
    paddingBottom: 0,
    paddingHorizontal: 0,
  },
  contentContainer: {
    //backgroundColor: 'brown',
    //flex: 1,
    //alignItems:'center',
  },
});

export default App;