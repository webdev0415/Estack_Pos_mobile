import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackActions } from 'react-navigation';

import * as actions from '../../../../redux/actions';
import Dashboard from './Dashboard';

class DashboardScreen extends Component {
  state = {
    refreshing: false,
    showAllCoupons: false,
  };

  onRefresh = () => {
    this.setState({ refreshing: true }, () => {
      this.props.refresh();
      setTimeout(() => this.setState({ refreshing: false }), 750);
    });
  };

  toggleShowCoupons = () => this.setState({ showAllCoupons: !this.state.showAllCoupons })

  goToScanCoupon = (uuid) => this.props.navigation.push('ScanCoupon', { uuid });

  render() {
    
    if (!this.props.coupons || !this.props.wallet) {
      return null;
    }
    return (
      <Dashboard
        wallet={this.props.wallet}
        onRefresh={this.onRefresh}
        coupons={this.props.coupons}
        refreshing={this.state.refreshing}
        goToScanCoupon={this.goToScanCoupon}
        onDenyCoupon={this.props.onDenyCoupon}
        toggleShowCoupons={this.toggleShowCoupons}
        showAllCoupons={this.state.showAllCoupons}
        onApproveCoupon={this.props.onApproveCoupon}
      />
    );
  }
};

const mapStateToProps = (state) => ({
  coupons: state.coupons.coupons,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  refresh: () => dispatch(actions.refreshAction()),
  onDenyCoupon: (payload) => dispatch(actions.denyCouponAction(payload)),
  onApproveCoupon: (payload) => dispatch(actions.approveCouponAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
