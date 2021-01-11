import React, { useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment'

import RedeemCoupon from '../../../../components/RedeemCoupons';
import styles from './styles';

const Dashboard = (props) => {
  const {
    wallet,
    coupons,
    onDenyCoupon,
    onApproveCoupon,
    refreshing,
    onRefresh,
    goToScanCoupon,
    showAllCoupons,
    toggleShowCoupons,
  } = props;

  useEffect(() => {
    onRefresh();
  }, [coupons.length]);

  const toggleButtonText = showAllCoupons ? 'Hide all' : 'Show all'

  return (
    <View style={styles.mainView}>
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContainer}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.mainContainer}>
        <View style={styles.subContainer1}>
          <Text style={styles.reward_text}>Today | { moment().format("DD MMM YY")} </Text>

          <View style={styles.card_align}>
            <View style={styles.reward_summary_card}>
              <Text style={styles.point_text}>Points Granted</Text>
              <View style={styles.card_inside}>
                <Text style={styles.card_value}>{wallet.points}</Text>                           
              </View>
            </View>
            
            <View style={styles.reward_summary_card}>
              <Text style={styles.point_text}>Coupons Redeemed</Text>
              <View style={styles.card_inside}>
                <Text style={styles.card_value}>{wallet.coupons}</Text>              
              </View>
            </View>

            <View style={styles.reward_summary_card}>
              <Text style={styles.point_text}>GMV</Text>
              <Text style={styles.card_value}>$ {wallet.gmv}</Text>
            </View>
          </View>
        </View>

        <View style={styles.memberShipContainer}>
          <View style={styles.redeemLine}>
            <Text style={styles.reward_text}>Redeem Request</Text>

            <View style={styles.showButtonCont}>
              <TouchableOpacity onPress={() => toggleShowCoupons()}>
                <Text style={styles.showButtonText}>{toggleButtonText}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <RedeemCoupon
            coupons={coupons}
            onDenyCoupon={onDenyCoupon}
            goToScanCoupon={goToScanCoupon}
            showAllCoupons={showAllCoupons}
            onApproveCoupon={onApproveCoupon}
          />
        </View>

      </View>
    </ScrollView>
    </View>
  );
}

export default Dashboard;
