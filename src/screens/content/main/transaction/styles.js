import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  reward_text: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.65)',
    marginBottom: 15
  },
  transaction:{
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.65)',
    marginBottom: 11,
    opacity:.9
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
    justifyContent: 'space-between'
  },
  point_text: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.65)',
    opacity:.85
  },
  card_value: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4076d9',
    opacity:.85
  },
  membership_card: {
    width: '100%',
    height: 'auto',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 10,
  },
  membership_card_inside: {
    padding: 15,
    color: 'rgba(0, 0, 0, 0.45)',
    textAlign: 'center'
  },
  dropdown: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    color: 'rgba(0, 0, 0, 0.25)'
  },
});

export default styles;
