import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  
  button: {
    backgroundColor: 'lightblue',
    width: '80%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'blue'
  },
  
  buttonText: {
    fontSize: 30,
    color: 'black',
  },

  result: {
    marginTop: 30,
    color: 'green',
    fontSize: 32
  },

  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    marginTop: 25,
    fontSize: 20,
    padding: 10,
  },
  
  titulo: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 24,
    color: 'orange',
  }
})

export {styles}