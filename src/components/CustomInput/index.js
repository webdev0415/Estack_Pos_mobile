import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const CustomInput = (props) => (
  <TextInput
    style={[styles.input, { ...props.additionalStyles } ]}
    placeholder={props.placeholder || 'Enter value'}
    onChangeText={value => props.onChangeText(value)}
    value={props.value}
    {...props}
  />
);

export default CustomInput;
