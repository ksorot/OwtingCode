import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'space-between',
  },
  instructionContainer: {
    flex: 1,
    padding: 20,
    marginTop: 25,
    marginBottom: 20,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  stepDetails: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
  continueButton: {
    backgroundColor: '#6FC9E8',
    borderColor: '#151E52',
    borderWidth: 2,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  continueButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
