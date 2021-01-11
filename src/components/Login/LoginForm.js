import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import Dash from 'react-native-dash';
import TextInput from '../CustomInput';
import CustomButton from '../CustomButton';
import COLORS from '../../constants/colors';
import styles from './styles';
import { images } from '../../constants/images';


const LoginForm = props => {
  const {
    email,
    password,
    disabled,
    onSubmit,
    emailError,
    emailHandler,
    passwordError,
    forgotPassword,
    passwordHandler,
    isVisiblePassword,
    switchVisiblePassword,
  } = props;

  return (
    <View style={styles.card}>
      <Text style={styles.login_header}>
        Login
      </Text>


      <View>
        <TextInput
          placeholder="Enter Email"
          onChangeText={emailHandler}
          value={email}
          autoCapitalize='none'
        />
        {emailError()}
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder="Enter Password"
            autoCompleteType="password"
            onChangeText={passwordHandler}
            secureTextEntry={!isVisiblePassword}
            value={password}
          />
          <TouchableOpacity onPress={switchVisiblePassword} style={{ zIndex: 999, width: 25, height: 20, position: 'absolute', right: 0, bottom: 4, }}>
            <Image source={images['eye']} style={{ width: 15, height: 15, }} />
          </TouchableOpacity>
        </View>
        {passwordError()}
      </View>
      <View style={styles.bottomContainer}>
        <CustomButton myStyle={{ marginTop: 50, marginBottom: 0 }} disabled={disabled} onPress={onSubmit} text='Login' />
        <Text style={styles.forgot_password} onPress={forgotPassword}>
            Forgot your Password?
        </Text>
      </View>
  </View>
  );
}

export default LoginForm;
