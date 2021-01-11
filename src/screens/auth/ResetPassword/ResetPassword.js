import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AuthContainer from '../../../components/AuthContainer';
import TextInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import styles from './styles';

const SetPassword = (props) => {
  const {
    password,
    renderError,
    isDisabled,
    onSubmitHandler,
    passwordhandler,
    confirm_password,
    confirmpasswordhandler,
  } = props;

    return (
      <AuthContainer
        children={
          <>
            <View style={styles.card}>
              <Text style={styles.login_header}>Set Password</Text>
                <View>
                  <TextInput
                  placeholder="Set Password"
                  secureTextEntry
                  value={password}
                  onChangeText={passwordhandler}
                />
                { renderError('password') }
                <TextInput
                  placeholder="Confirm Password"
                  autoCompleteType="password"
                  secureTextEntry
                  value={confirm_password}
                  onChangeText={confirmpasswordhandler}
                />
                { renderError('confirm') }
              </View>
              <CustomButton disabled={isDisabled} onPress={onSubmitHandler} text='Set Password' />
            </View>
          </>
        }
      />
    )
};

export default SetPassword;
