import React from 'react';
import { TouchableOpacity } from 'react-native';
import { images } from '../../constants/images';
import Icon from 'react-native-vector-icons/Ionicons';

const headerRight = () => (
  <TouchableOpacity onPress={() => alert('Notifications')}>
    <Icon style={{marginRight: 15}} name='ios-notifications-outline' size={25} color='black' />
  </TouchableOpacity>
);

export default headerRight;
