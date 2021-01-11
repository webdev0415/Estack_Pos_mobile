import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const GrandPointsHeader = (props) => (
  <View style={{ width: '100%', paddingTop: 40, height: 70, flexDirection: 'row', justifyContent: 'center' }}>
    <TouchableOpacity style={{ alignItems: 'flex-start', flex: 1 }}>
      <Icon name='ios-arrow' size={35} color='black' />
    </TouchableOpacity>
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>Grant Points</Text>
    </View>
  </View>
);

export default GrandPointsHeader;
