import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    width: '100%',
    flexBasis: 'auto',
  },
  container: {
    overflow: 'scroll',
    textAlign: 'center',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 20,
    marginBottom: 20,
  },
  estackkheading: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 25,
    fontFamily: 'MyriadPro-Bold',
    fontWeight: 'bold',
    color:'rgba(0, 0, 0, 0.85)',
    fontSize:25
  },
});

export default styles;
