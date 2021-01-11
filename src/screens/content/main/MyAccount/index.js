import React, { Component } from 'react';
import MyAccount from './MyAccount';
import { connect } from 'react-redux';
import * as actions from '../../../../redux/actions';

class MyAccountScreen extends Component {
  state = {
    notification: false
  }

  notificationHandler = () => this.setState({ notification: !this.state.notification });

  logOut = () => {
    this.props.signOut();
    this.props.navigation.navigate('Login');
  }

  goToEditStore = () => this.props.navigation.navigate('StoreAddress');

  render() {
    const { notification } = this.state;
    const { user } = this.props;
    if (!user || !user.place) {
      return null
    }
    if (!user.place.name || (user.place.location.coordinates[0] === 0 && user.place.location.coordinates[1] === 0)) {
      this.props.navigation.navigate('StoreAddress', { place: user.place });
      alert('Please, set your palce');
    };
    return (
      <MyAccount
        notification={notification}
        goToEditStore={this.goToEditStore}
        notificationHandler={this.notificationHandler}
        logOut={this.logOut}
        user={user}
      />
    );
  }
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(actions.signOutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountScreen);
