import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import _ from 'lodash';
import moment from 'moment';

import { images } from '../../../../constants/images';
import styles from './styles';

const GrandPoints = (props) => {
  const {
    isDisabled,
    onChangePurchase,
    purchase,
    goBack,
    isGranded,
    grandPoints,
    user,
    customer,
    business,
  } = props;

  const points = purchase * customer.tier.multiplier;
  const avatar = customer.user.image ? { uri: customer.user.image.ref } : images['defaultIcon'];

  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ borderBottomWidth: 1, paddingTop: 21, borderColor: 'rgba(0, 21, 41, 0.12)', position: 'absolute', top: 0, left: 0, width: '100%', height: 70, flexDirection: 'row', backgroundColor: '#FFFFFF' }}>
        <TouchableOpacity style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }} onPress={goBack} >
          <Image style={{ width: 30, height: 15,  marginLeft: 10}} source={images['backarrow']} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <Text>Grant Points</Text>
        </View>
        <View style={{ flex: 1 }}>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Image style={styles.profileAvatar} source={avatar} />
        <View style={styles.profileNameContainer}>
          <Text style={styles.profileName}>{user.fullName}</Text>
        </View>

        <Text style={styles.memberShip}>
          { customer.tier.tierName } Member | Member Since { moment(customer.customer.created_at).format('MMM YYYY') }
        </Text>

        <Text style={styles.enterValue}>
          Enter Purchase Value
        </Text>

        <View style={[styles.purchaseInputContainer, { marginLeft: isGranded ? '12%' : 13 }]}>
          <Image style={styles.dollarImage} source={images['dollar']} />
          <TextInput
            style={[
              styles.purchaseInput,
              {
                borderWidth: isGranded ? 0 : 1,
                backgroundColor: isGranded ? '#F2F2F2' : '#FFFFFF',
                paddingBottom: Platform.OS === 'android' ? 7 : 0,
              }
            ]}
            keyboardAppearance='light'
            editable={isGranded ? false : true}
            value={props.purchase}
            keyboardType='numeric'
            placeholderTextColor='rgba(0, 0, 0, 0.25)'
            placeholder='0.00'
            onChangeText={onChangePurchase}
          />
        </View>
        <View style={styles.purchaseContainer}>
          <Text style={styles.purchaseText}>
              Point Value:
          </Text>
          <Text style={styles.purchaseValue}>
            {_.floor(points, 2)} Points
          </Text>
        </View>
        
        <TouchableOpacity onPress={grandPoints} disabled={isDisabled} style={[styles.grandPointsButtonContainer, { backgroundColor: isGranded ? '#7ED321' : isDisabled ? 'lightgrey' : '#4076D9' }]}>
          <Text style={styles.grandPointsButtonText}>
            {isGranded ? 'Points Granted Successfully' : 'Grant Points'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goBack} style={styles.backButtonContainer}>
          <Text style={styles.backButtonText}>
              Back
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GrandPoints;
