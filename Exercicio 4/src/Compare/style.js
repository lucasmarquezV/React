import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 26,
  },
  input:{
    height: 50,
    borderWidth: 1,
    borderColor: '#222',
    margin: 5,

    fontSize: 20,
    padding: 10,
  },
  button: {
    backgroundColor: 'lightgreen',
    width: '80%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 2
  },

  buttonText: {
    fontSize: 30,
  },
  result: {
    marginTop: 30,
    color: 'red',
    fontSize: 32
  }
})

export {styles}