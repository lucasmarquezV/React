import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    title:{
      marginTop: 20,
      marginBottom: 20,
      fontSize: 24,
      color: 'blue',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    salary:{
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'green'
    },
    desc:{
        fontSize: 18,
        
    },
    contact:{
      fontSize: 18,
      marginTop: 10
    },
    container: {
      marginTop: 20,
      alignItems: 'justify',
      borderRadius: 5,
      borderWidth: 2, 
      borderColor: '#000', 
      maxWidth: 325,
      padding: 5 
    }
});


export {styles}