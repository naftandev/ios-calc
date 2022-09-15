import { StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'flex-end'
  },
  previousValue: {
    ...theme.text,
    fontSize: 30,
    textAlign: 'right',
    opacity: .5
  },
  result: {
    ...theme.text,
    fontSize: 60,
    textAlign: 'right'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  column: {
    width: '50%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    marginBottom: 18,
  }
});

export default styles;
