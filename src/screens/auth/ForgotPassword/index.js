import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../redux/actions';
import ForgotPassword from './ForgotPassword';
import validator from '../../../validators/auth-validator';

class ForgotPasswordScreen extends Component {
  state = {
    email: '',
    error: '',
  };

  goToLogin = () => this.props.navigation.navigate('Login');

  onEmailHandler = (email) => {
    const { email: error} = validator({ email });
    this.setState({ email, error: error || '' });
  };

  resetPassword = () => {
    const { email } = this.state;
    this.props.onForgotPassword({ email })
  };


  render() {
    const { email, error } = this.state;
    const disabled = error.length !== 0 || email.length === 0;

    return (
      <ForgotPassword
        email={email}
        error={error}
        disabled={disabled}
        goToLogin={this.goToLogin}
        resetPassword={this.resetPassword}
        onEmailHandler={this.onEmailHandler}
      />
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  onForgotPassword: (payload) => dispatch(actions.forgotPasswordAction(payload)),
})

export default connect(null, mapDispatchToProps)(ForgotPasswordScreen);
