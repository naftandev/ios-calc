import { StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'flex-end'
  },
  operation: {
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
    marginTop: 10
  },
  buttonsRowContainer: {
    flexDirection: 'row',
    marginBottom: 18,
    paddingHorizontal: 10,
    justifyContent: 'center'
  }
});

export default styles;
