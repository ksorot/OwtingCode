import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  spinner: {
    marginBottom: 20,
    transform: [{ scale: 1.5 }], 
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1E1E1E', 
    textAlign: 'center',
  },
});

export default styles;
