import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import _ from 'lodash';

import { images } from '../../constants/images';
import moment from 'moment';
import styles from './styles';

const CouponItem = (props) => {

  const {
    uuid,
    cost,
    name,
    index,
    avatar,
    setCoupon,
    expireDate,
    denyCoupon,
    redeemedArray,
    showAllCoupons,
    approveCoupon,
    selectedCoupon,
  } = props;

  renderName = (fullName) => fullName.replace(/[^ ]+ /, '');

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => setCoupon(index)}
      style={[
        styles.couponContainer,
        {
          marginTop: index === 0 ? 0 : showAllCoupons ? 13 : -85,
          zIndex: index === selectedCoupon ? redeemedArray.length + 1 : index,
        }
      ]}
    >
      <ImageBackground style={styles.couponBackground} source={images['cupon1']}>
        <View style={styles.couponSubContainer}>
          <View style={styles.topContainer}>
            <View style={styles.topLeftContainer}>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>$ {cost}</Text>
                <Text style={styles.estimates}>  Expires {moment(expireDate).fromNow()}</Text>
              </View>
              <View style={styles.limitedContainer}>
                <Text style={styles.limitedText}>
                  Limited Value Coupon
                </Text>
              </View>
            </View>
            <View style={styles.profileContainer}>
              <Image style={styles.profileIcon} source={avatar ? { uri: avatar } : images['man']} />
              <View style={styles.profileNameContainer}>
                <Text style={styles.profileNameText}>
                  { renderName(name) }
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.bottomLeftContainer}>
              <Text style={styles.couponCode}>
                C{_.padStart(uuid, 6, '0')}
              </Text>
              <Image style={styles.couponCodeImage} source={images['strih']} />
            </View>
            <View style={styles.bottomRightContainer}>
              <TouchableOpacity onPress={() => denyCoupon(uuid)} style={styles.denyButton}>
                <Text style={styles.denyButtonText}>
                  Deny
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => approveCoupon(uuid)} style={styles.approveButton}>
                <Text style={styles.approveButtonText}>
                  Approve
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
};

export default CouponItem;
