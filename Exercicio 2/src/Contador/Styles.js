import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  displayContainer: {
    alignItems: 'center',
  },
  titulo: {
    marginTop: 50,
    fontSize: 28,
    color: 'orange',
  },
  display: {
    fontSize: 60,
    borderWidth: 5,
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginBottom: 20,
    marginTop: 30
  },
  displayContent: {
    color: 'red'
  },
  button: {
    width: '80%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10
  },
  buttonMore: {
    backgroundColor: 'green',
    marginTop: 20,
  },
  buttonLess: {
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  },
});

export {styles}