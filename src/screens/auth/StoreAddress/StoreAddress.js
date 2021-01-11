import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  FlatList,
  Alert,
} from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';

import AuthContainer from '../../../components/AuthContainer';
import TextInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';

import AutoComplete from 'react-native-autocomplete-input';
import styles from './styles';

const StoreAddress = (props) => {
  const {
    autoCompleteData,
    myCoordinates,
    address,
    shopName,
    streetAddress1,
    streetAddress2,
    city,
    pincode,
    marker,
    hideResults,
    disabled,

    onChangeAddress,
    onChangeShopName,
    onChangeFirstStreetAddress,
    onChangeSecondStreetAddress,
    onChangeCity,
    onChangePincode,
    onSubmitHandler,
    onSelectPlace,
    showResults,
    setPlace,
  } = props;

  const cameraCenter = () => {
    if (marker.latitude !== 0 && marker.longitude !== 0) {
      return {
        latitude: Number(marker.latitude),
        longitude: Number(marker.longitude),
      }
    } else {
      return {
        latitude: Number(myCoordinates.latitude),
        longitude: Number(myCoordinates.longitude),
      }
    }
  }

  const renderList = () => {
    return !hideResults && <FlatList
      data={autoCompleteData}
      style={{ position: 'absolute', top: 0, backgroundColor: 'lightgrey' }}
      renderItem={({item}) => (
      <TouchableOpacity style={{ zIndex: 10, backgroundColor: 'white', borderWidth: 1, borderColor: 'grey', borderRadius: 5, margin: 5 }} onPress={() => onSelectPlace(item)}>
        <Text style={{ textAlign: 'center' }}>{item.structured_formatting.main_text}, {item.structured_formatting.secondary_text.split(',')[0]}</Text>
      </TouchableOpacity>
      )}
    />
  }

  return (
    <AuthContainer
      children={
        <>
        <View style={styles.card}>
          <Text style={styles.login_header}>Store Address</Text>

          <TextInput
            placeholder="Search Address"
            onChangeText={address => onChangeAddress(address)}
            value={address}
            autoCapitalize='none'
            additionalStyles={{ marginTop: 12 }}
      />
        <View style={{ flex: 1, alignItems: 'center' }}>
          { renderList() }
        </View>
      
          <MapView
            style={{
              marginTop: 7,
              width: 250,
              height: 150,
              borderColor: '#d9d9d9',
              borderRadius: 4,
              borderWidth: 1,
              zIndex: -1,
            }}
            camera={{
              center: cameraCenter(),
              pitch: 0,
              altitude: 0,
              heading: 0,
              zoom: 16,
            }}

            // region={{
            //   ...cameraCenter(),
            //   longitudeDelta: 1,
            //   latitudeDelta: 1
            // }}
            
            mapType='standard'
            maxZoomLevel={16}
            minZoomLevel={15}
            showsUserLocation={true}
            loadingEnabled
            pitchEnabled={false}
            toolbarEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            zoomControlEnabled={false}
            zoomTapEnabled={false}
            zoomEnabled={false}
            liteMode
          >
            <Marker coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}>
              <Icon name='ios-pin' size={30} color='red' />
            </Marker>
          </MapView>

          <TextInput
            placeholder="Shop name/Number"
            onChangeText={shopName => onChangeShopName(shopName)}
            value={shopName}
            additionalStyles={{ marginTop: 12 }}
          />

          <TextInput
            placeholder="Street Address 1"
            onChangeText={streetAddress => onChangeFirstStreetAddress(streetAddress)}
            value={streetAddress1}
            autoCapitalize='none'
            additionalStyles={{ marginTop: 12 }}
          />
          <TextInput
            placeholder="Street Address 2"
            onChangeText={streetAddress => onChangeSecondStreetAddress(streetAddress)}
            value={streetAddress2}
            autoCapitalize='none'
            additionalStyles={{ marginTop: 12 }}
          />
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TextInput
              additionalStyles={{
                width: 135,
                marginRight: 15,
                marginTop: 12,
              }}
              placeholder="City"
              onChangeText={city => onChangeCity(city)}
              value={city}
              autoCapitalize='none'
            />
            <TextInput
              additionalStyles={{
                width: 100,
                marginTop: 12,
              }}
              placeholder="Postal code"
              onChangeText={pincode => onChangePincode(pincode)}
              value={pincode}
              autoCapitalize='none'
            />
          </View>

          <CustomButton disabled={disabled} onPress={onSubmitHandler} text='Save & Proceed' />

        </View>
        </>
      }
    />
  );
};

export default StoreAddress;
