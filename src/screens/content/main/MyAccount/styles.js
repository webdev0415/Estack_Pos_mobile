import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  scrollContainer: {
    flexGrow: 1,
    width: '100%',
    flexBasis: 'auto',
    backgroundColor: '#F4F6FA',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 30,
  },
  card: {
   height: 500,
   width: 300,
   flex: 1,
   alignContent: 'center',
   alignItems: 'center',
   justifyContent: 'center',
   shadowColor: 'rgba(0, 0, 0, 0.25)',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.8,
   shadowRadius: 2,
   elevation: 2,
   backgroundColor: 'white',
   textAlign: 'center',
   borderRadius: 6,
   borderWidth: 1,
   borderColor: '#d9d9d9',
   display: 'flex',
   alignItems: 'center',
   marginTop: 17,
   marginBottom: 27,
 },
  merchantLogo: {
   width: 90,
   height: 90,
   marginBottom: 10,
  },
  pos: {
   fontFamily: 'Roboto',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: 14,
   textAlign: 'center',
   color: 'rgba(0, 0, 0, 0.65)',
  },
  lowInfo: {
   fontFamily: 'Roboto',
   fontStyle: 'normal',
   fontWeight: 'normal',
   fontSize: 10,
   textAlign: 'center',
   color: 'rgba(0, 0, 0, 0.65)',
  },
  map: {
   marginTop: 7,
   width: 250,
   height: 150,
   borderColor: '#d9d9d9',
   borderRadius: 4,
   borderWidth: 1,
  },
  googleLink: {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'flex-start',
   alignItems: 'center',
   marginTop: 22,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.25,
   shadowRadius: 3.84,
   elevation: 5,
   borderRadius: 3,
   borderWidth: 1,
   borderBottomWidth: 2,
   borderColor: 'rgba(0, 0, 0, 0.12)',
   height: 40,
   width: 185,
   marginLeft: 10,
   marginRight: 10,
   fontFamily: 'Roboto-Bold',
   fontWeight: 'bold',
  },
  googleIcon: {
   width: 20,
   height: 20,
   marginLeft: 13,
  },
  googleLinkText: {
   textAlign: 'left',
   marginLeft: 14,
   fontSize: 14,
   fontFamily: 'Roboto',
   fontStyle: 'normal',
   fontWeight: '500',
   color: 'rgba(0, 0, 0, 0.54)',
   letterSpacing: 0.21875,
  },
  logOutContainer: {
   marginTop: 16,
   alignItems: 'center',
   justifyContent: 'center',
   width: 185,
   height: 40,
   backgroundColor: '#FFFFFF',
   borderWidth: 1,
   borderColor: '#4076D9',
   borderRadius: 4,
  },
  logOutText: {
   fontFamily: 'Roboto',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: 14,
   textAlign: 'center',
   color: '#4076D9',
  },
});

export default styles;
