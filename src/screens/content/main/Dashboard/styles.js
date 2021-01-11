import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F4F6FA',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    marginBottom: 15,
  },
  scrollContainer: {
    flexGrow: 1,
    width: '100%',
    flexBasis: 'auto',
    backgroundColor: '#F4F6FA',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  subContainer1: {
    width: '100%',
    marginTop: 15,
  },
  memberShipContainer: {
    width: '100%',
    marginTop: 30,
  },
  redeemLine: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  showButtonCont: {
    flex: 1,
    alignItems: 'flex-end',
  },
  showButtonText: {
    fontSize: 12,
    color: '#4681C3',
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
    width: '32%',
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
    fontSize: 10,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: 'rgba(0, 0, 0, 0.65)',
  },
  card_value: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#7C70FF',
    marginBottom: 7,
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
    fontSize: 10,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.45)',
    fontFamily: 'Roboto-Regular',
  },
  new_store_card_align: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  new_store_card: {
    height: 70,
    width: '31%',
    elevation: 5,
    marginRight: 0,
    borderRadius: 6,
    display: 'flex',
    marginBottom: 15,
    shadowRadius: 3.84,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    borderRadius: 5,
    paddingRight: 15,
  },
  buttonText: {
    margin: 10,
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Gill Sans',
    backgroundColor: 'transparent',
  },
});

export default styles;
