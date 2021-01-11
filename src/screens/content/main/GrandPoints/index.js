import React, { Component } from 'react';
import { connect } from 'react-redux';

import GrandPoints from './GrandPoints';
import validator from '../../../../validators/points-validator';
import * as actions from '../../../../redux/actions';

class GrandPointsScreen extends Component {

  state = {
    isGranded: false,
    purchase: '',
    user: null,
  };

  componentDidMount() {
    const user = this.props.navigation.getParam('data');
    this.props.onGetCustomer({ _id: user._id })
    this.setState({ user });
  }

  goBack = () => this.props.navigation.replace('Main');

  grand = () => this.setState({ isGranded: true })

  grandPoints = () => this.props.onGrandPoints({ _id: this.state.user._id, purchase: this.state.purchase, grand: this.grand });

  onChangePurchase = (purchase) => {
    const positionOfDot = purchase.indexOf('.')

    if (positionOfDot > 0 && purchase.indexOf('.', positionOfDot + 1) < 0) {
      if (positionOfDot < 0) this.setState({ purchase });

      if (
        !purchase[positionOfDot + 3]
        && (purchase[positionOfDot]
        || purchase[positionOfDot + 1]
        || purchase[positionOfDot + 2])
      ) this.setState({ purchase });
    } else if (positionOfDot !== 0 && purchase.indexOf('.', positionOfDot + 1) < 0 && purchase[0] !== '0') this.setState({ purchase });
  }

  render() {
    const { purchase, isGranded, user } = this.state;
    const { customer, business } = this.props;
    const isDisabled = purchase.length === 0 || isGranded;

    if (!user || !customer) {
      return null;
    }
    return (
      <GrandPoints
        user={user}
        customer={customer}
        business={business}
        grandPoints={this.grandPoints}
        goBack={this.goBack}
        isGranded={isGranded}
        purchase={purchase}
        isDisabled={isDisabled}
        onChangePurchase={this.onChangePurchase}
      />
    );
  }
};

const mapStateToProps = (state) => ({
  customer: state.customer.customer,
  business: state.user.business,
})

const mapDispatchToProps = (dispatch) => ({
  onGrandPoints: (payload) => dispatch(actions.grandPointsAction(payload)),
  onGetCustomer: (payload) => dispatch(actions.getCustomerAction(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GrandPointsScreen);
