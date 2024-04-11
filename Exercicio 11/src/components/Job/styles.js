
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flex: 1,
    flexDirection: 'column',
  },
  textContainer: {
    width: 300,
    flexWrap: 'wrap',
    marginTop: 23,
  },
  title: {
    margin: 24,
    marginTop: 0,
    fontSize: 18,
  },
  description: {
    margin: 24,
    marginTop: 8,
    marginBottom: 8,
    fontSize: 16,
  },

  border: {
    margin: 10,
    borderWidth: 1, 
    borderColor: '#000',
  },
});

export { styles };
