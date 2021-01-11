import React from 'react';
import { View, Text, ImageBackground, Platform, } from 'react-native';

import { images } from '../../constants/images';
import styles from './styles';

const EmptyBlock = () => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <ImageBackground style={{ width: 339, height: 159, marginLeft: 7, }} source={images['empty']}>
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          No Requests
        </Text>
      </View>
    </ImageBackground>
  </View>
);

export default EmptyBlock;
