import React from 'react';
import { Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import AuthContainer from '../../../components/AuthContainer';
import LoginForm from '../../../components/Login/LoginForm';
import styles from './styles';

class Login extends React.Component {
  render() {
    const {
      email,
      signUp,
      password,
      onSubmit,
      disabled,
      emailError,
      emailHandler,
      passwordError,
      forgotPassword,
      passwordHandler,
      isVisibleSpinner,
      isVisiblePassword,
      switchVisiblePassword,
    } = this.props;

    return (
      <AuthContainer
        children={
          <>
            <Spinner
              visible={isVisibleSpinner}
              textContent='Loading...'
              textStyle={{ color: 'black', fontSize: 21, }}
              animation='animation'
            />
            <LoginForm
              email={email}
              password={password}
              disabled={disabled}
              onSubmit={onSubmit}
              emailError={emailError}
              emailHandler={emailHandler}
              passwordError={passwordError}
              forgotPassword={forgotPassword}
              passwordHandler={passwordHandler}
              isVisiblePassword={isVisiblePassword}
              switchVisiblePassword={switchVisiblePassword}
              />
          </>
        }
      />
    )
  }
}

export default Login;
