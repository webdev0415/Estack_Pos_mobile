import React from 'react';
import {
  View,
  Image,
  Platform,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import { images } from '../../constants/images';
import styles from './styles';

const AuthContainer = (props) => {
  return (
    <ImageBackground style={styles.background} source={images['bg']}>
      <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : "padding"} enabled>
        <ScrollView contentContainerStyle={{ height: '100%', justifyContent: 'center'}}>
          <View style={styles.container}>
            <Image style={{ marginBottom: 15 }}source={images['group-5']}/>
            { props.children }
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default AuthContainer;
