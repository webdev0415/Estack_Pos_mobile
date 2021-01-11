import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { StackActions } from 'react-navigation';
import { connect } from 'react-redux';

import * as actions from '../../../../redux/actions';
import QRCodeScanner from 'react-native-qrcode-scanner';

import styles from './styles';

class ScanCoupon extends Component {

  state = {
    uuid: null,
  }

  componentDidMount() {
    this.setState({ uuid: this.props.navigation.getParam('uuid'), })
  }

  onRead = (data) => {
    const { uuid } = this.state;
    const qrData = JSON.parse(data.data);

    if (qrData == uuid) {
      this.props.onApproveCoupon({ uuid });
    } else {
      setTimeout(() => this.scanner.reactivate(), 1500);
      Alert.alert('Ooops!', `The selected coupon does not match the scanned. You selected ${this.state.uuid}, scanned ${qrData}`);
    }
  };

  goBack = () => this.props.navigation.replace('Main');

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={this.goBack}>
          <Text style={styles.backButton}>
            Cancel
          </Text>
        </TouchableOpacity>
        <QRCodeScanner
          ref={(node) => { this.scanner = node }}
          onRead={this.onRead} 
        />
      </View>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  onApproveCoupon: (payload) => dispatch(actions.approveCouponAction(payload)),
})

export default connect(null, mapDispatchToProps)(ScanCoupon);
