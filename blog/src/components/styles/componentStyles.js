import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  label: {
    marginTop: 15,
    marginLeft: 5,
  },
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 24,
  },
  row: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  icon: {
    fontSize: 24,
  },
  input: {
    backgroundColor: '#eae1e1',
    fontSize: 18,
    borderColor: '#ddd4d4',
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
})

export default styles
