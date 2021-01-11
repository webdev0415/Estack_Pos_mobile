import React, { Component } from 'react';
import { Platform, Linking } from 'react-native';
import { connect } from 'react-redux';
import Login from './Login';
import * as actions from '../../../redux/actions';
import ErrorMessage from '../../../components/ErrorMessage';
import validator from '../../../validators/auth-validator';

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
    errors: {},

    isVisiblePassword: false,
    isVisibleSpinner: false,
  };

  componentDidMount() {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        this.navigate(url);
      });
    } else {
        Linking.addEventListener('url', this.handleOpenURL);
      }
  };
  
  componentWillUnmount() { // C
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = (event) => { // D
    this.navigate(event.url);
  }
  navigate = async (url) => { // E
    const { replace: navigateTo } = this.props.navigation;

    const route = url.replace(/.*?:\/\//g, '');
    const token = route.match(/\/([^\/]+)\/?$/)[1];
    const routeName = route.split('/')[0];
    if (routeName === 'estackk') {
      navigateTo('SetPassword', { token })
    }
  }

  turnOffSpinner = () => this.setState({ isVisibleSpinner: false });
  switchVisiblePassword = () => this.setState({ isVisiblePassword: !this.state.isVisiblePassword })

  validate = () => {
    const { email, password } = this.state;
    const errors = validator({ email, password });
    this.setState({ errors });
  };

  emailHandler = email => this.setState({ email }, () => this.validate());

  passwordHandler = password => this.setState({ password }, () => this.validate());

  emailError = () => {
    if (this.state.errors.email)
      return <ErrorMessage error={this.state.errors.email} />
  }

  passwordError = () => {
    if (this.state.errors.password)
      return <ErrorMessage error={this.state.errors.password} />
  };

  forgotPassword = () => this.props.navigation.navigate('ForgotPassword');

  signUp = () => this.props.navigation.navigate('Signup');

  onSubmit = () => {
    const { email, password } = this.state;

    this.validate();
    
    this.props.onSignIn({ email, password, cb: this.turnOffSpinner });
    this.setState(
      { isVisibleSpinner: true },
      () => setTimeout(() => this.setState({ isVisibleSpinner: false }), 7000)
    );
    //signIn code...
  }

  render() {
    const { email, password, isVisibleSpinner, isVisiblePassword } = this.state;
    const disabled = this.state.errors.email
      || this.state.errors.password
      || this.state.email.length === 0
      || this.state.password.length === 0

    return (
      <Login
        email={email}
        password={password}
        disabled={disabled}
        signUp={this.signUp}
        onSubmit={this.onSubmit}
        emailError={this.emailError}
        emailHandler={this.emailHandler}
        passwordError={this.passwordError}
        isVisibleSpinner={isVisibleSpinner}
        forgotPassword={this.forgotPassword}
        isVisiblePassword={isVisiblePassword}
        passwordHandler={this.passwordHandler}
        switchVisiblePassword={this.switchVisiblePassword}
      />
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  onSignIn: (payload) => dispatch(actions.signInAction(payload)),
})

export default connect(null, mapDispatchToProps)(LoginScreen);
