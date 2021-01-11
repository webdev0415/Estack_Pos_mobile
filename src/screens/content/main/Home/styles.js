import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    width: '100%',
    flexBasis: 'auto',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
  },
  subContainer1: {
    width: '100%',
    marginTop: 15,
  },
  memberShipContainer: {
    width: '100%',
    marginTop: 30,
  },
  newStoresContainer: {
    width: '100%',
    marginTop: 30,
  },
  storeIcon: {
    width: 70,
    height: 40,
    resizeMode: 'contain',
  },
  reward_text: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.65)',
    marginBottom: 15,

},
  card_align: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  reward_summary_card: {
    width: '48%',
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between'
  },
  card_inside: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center'
  },
  point_text: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    fontWeight:'bold',
    opacity:.85,
    color: 'rgba(0, 0, 0, 0.65)'
  },
  card_value: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    opacity:.85,
    color: '#4076d9',
    marginLeft:10,
    marginTop:Platform.OS === 'ios' ? 0 : -1,
  },
  card_value1: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    opacity:.85,
    color: '#4076d9',
  },
  membership_card: {
    width: '100%',
    height: 70,
    shadowColor: 'rgba(0, 21, 41, 0.12)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.17,
    shadowRadius: 2,
    elevation: 0,
    backgroundColor: '#f4f6fa',
    borderRadius: 6,
    padding: 20,
  },
  membership_card_inside: {
    color: 'rgba(0, 0, 0, 0.45)',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
  },
  new_store_card_align: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  new_store_card: {
    width: '31%',
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0,
    marginBottom: 15,
  },
});

export default styles;
