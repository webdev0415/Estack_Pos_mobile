import React, { Component } from 'react';
import ErrorMessage from '../../../components/ErrorMessage';
import ResetPassword from './ResetPassword';
import validator from '../../../validators/auth-validator';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

class ResetPasswordScreen extends Component {
  state = {
    password: '',
    confirm_password: '',
    passwordError: false,
    confirm_passwordError: false,
    errors: {},
    token: this.props.navigation.getParam('token'),
  };

  validate = () => {
    const { password, confirm_password } = this.state;
    const errors = validator({ password });
    this.setState({ errors });

    if (confirm_password.length > 0) this.confirmValidate();
  };

  confirmValidate = () => {
    const { confirm_password, password } = this.state;

    if (confirm_password !== password) {
      this.setState({ errors: { ...this.state.errors, confirm: 'Passwords don`t match' } })
    } else {
      this.setState({ errors: { ..._.omit(this.state.errors, 'confirm') }});
    }
  };

  passwordhandler = (password) => this.setState({ password }, () => this.validate());

  confirmpasswordhandler = (confirm_password) => this.setState({ confirm_password }, () => this.confirmValidate());

  onSubmitHandler = () => {
    const { password, token } = this.state;
    this.props.onSetPassword({ password, token });
    // this.props.navigation.navigate('StoreAddress')
  };

  renderError = (error) => {
    if (this.state.errors[error]) {
      return <ErrorMessage error={this.state.errors[error]} />
    }
  };

  render() {
    const { password, confirm_password, errors } = this.state;
    const isDisabled = password.length === 0 || confirm_password.length === 0 || errors.password || errors.confirm;

    return (
      <ResetPassword
        password={password}
        isDisabled={isDisabled}
        renderError={this.renderError}
        confirm_password={confirm_password}
        passwordhandler={this.passwordhandler}
        onSubmitHandler={this.onSubmitHandler}
        confirmpasswordhandler={this.confirmpasswordhandler}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSetPassword: (payload) => dispatch(actions.createPosAction(payload)),
})

export default connect(null, mapDispatchToProps)(ResetPasswordScreen);
