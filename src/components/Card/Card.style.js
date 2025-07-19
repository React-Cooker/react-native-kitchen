import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card_container: {
        backgroundColor: 'white',
        margin: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
      },
      card_body: {
        padding:10,
      },
      card_title: {
        fontSize: 20,
        fontWeight : 'bold',
        marginTop:-5,
        margin:10,
        marginBottom:3,
      },
      card_text: {
        fontSize: 20,
        margin: 10,
        marginBottom:3,
      },
      card_button_container:  {
        backgroundColor:'blue',
        padding: 10,
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        
      },
      card_button_title: {
        fontSize:17,
        color:'white',
        fontWeight: 'bold'
      }
})

export default styles;