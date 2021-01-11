import React, { Component } from 'react';
import StoreAddress from './StoreAddress';
import validator from '../../../validators/pos-validator';
import Geolocation from 'react-native-geolocation-service';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import axios from 'axios';

class StoreAddressScreen extends Component {
  state = {
    autoCompleteData:[],
    hideResults: false,

    address: '',
    shopName: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    pincode: '',
    myCoordinates: {
      latitude: 0,
      longitude: 0,
    },
    marker: {
      latitude: 0,
      longitude: 0,
    },
  };

  componentDidMount() {
    const place = this.props.navigation.getParam('place');
    if (place) {
      this.setState({
        shopName: place.name ? place.name : '',
        streetAddress1: place.address ? place.address : '',
        city: place.city ? place.city : '',
        pincode: place.postalCode ? place.postalCode : '',
      });
    };
    Geolocation.getCurrentPosition(
      position => {
        setTimeout(() => this.setState({
        myCoordinates: { latitude: position.coords.latitude, longitude: position.coords.longitude },
      }), 1000)}
    )
  }

  onChangeAddress = (address) => {
    this.showResults();
    this.setState({ address });
    
    axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&types=address&location=${this.state.myCoordinates.latitude},${this.state.myCoordinates.longitude}&radius=250&fields=geometry,city,formatted_address&key=AIzaSyDrPTF8iSorvUqC3MvDuqzWJq_mSXqac8Q`)
      .then(res => this.setState({ autoCompleteData: res.data.predictions }));
  };

  onSelectPlace = (place) => {
    this.hideResults();
    this.setPlace(place);
    
    axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=geometry,adr_address,vicinity,formatted_address,address_component,name&key=AIzaSyDrPTF8iSorvUqC3MvDuqzWJq_mSXqac8Q`)
      .then(res => {
        console.log('res>>>', res);
        this.setState({
          marker: {
            latitude: res.data.result.geometry.location.lat,
            longitude: res.data.result.geometry.location.lng,
          },
          city: res.data.result.address_components[2].long_name,
          streetAddress2: res.data.result.formatted_address,
          pincode: res.data.result.address_components[res.data.result.address_components.length - 1].long_name,
        })
      })
  };

  setPlace = (place) => {
    this.setState({
      streetAddress1: place.structured_formatting.main_text,
      address: place.structured_formatting.main_text,
    })
  }

  hideResults = () => this.setState({ hideResults: true });
  showResults = () => this.setState({ hideResults: false });

  onChangeShopName = (shopName) => this.setState({ shopName });
  onChangeFirstStreetAddress = (streetAddress1) => this.setState({ streetAddress1 });
  onChangeSecondStreetAddress = (streetAddress2) => this.setState({ streetAddress2 });
  onChangeCity = (city) => this.setState({ city });
  onChangePincode = (pincode) => this.setState({ pincode });

  onSubmitHandler = () => {
    if (this.state.marker.latitude && this.state.marker.longitude) {
      this.props.onSetDetails({
        place: {
          address: this.state.streetAddress1,
          address2: this.state.streetAddress2,
          lat: this.state.marker.latitude,
          lng: this.state.marker.longitude,
          name: this.state.shopName,
          city: this.state.city,
          postalCode: this.state.pincode,
        }
      });
    } else {
      alert('You have not set your place');
    }
  }

  render() {
    const {
      hideResults,
      autoCompleteData,
      myCoordinates,
      address,
      shopName,
      streetAddress1,
      streetAddress2,
      city,
      pincode,
      marker,
    } = this.state;
    const disabled = shopName.length < 3 || address < 3 || city < 3 || pincode.trim() === '' || streetAddress1.length < 3;

    return (
      <StoreAddress
        autoCompleteData={autoCompleteData}
        myCoordinates={myCoordinates}

        disabled={disabled}

        address={address}
        shopName={shopName}
        streetAddress1={streetAddress1}
        streetAddress2={streetAddress2}
        city={city}
        pincode={pincode}
        marker={marker}
        hideResults={hideResults}
        
        showResults={this.showResults}
        onMapPress={this.onMapPress}
        onChangeAddress={this.onChangeAddress}
        onChangeShopName={this.onChangeShopName}
        onChangeFirstStreetAddress={this.onChangeFirstStreetAddress}
        onChangeSecondStreetAddress={this.onChangeSecondStreetAddress}
        onChangeCity={this.onChangeCity}
        onChangePincode={this.onChangePincode}
        onSubmitHandler={this.onSubmitHandler}
        setPlace={this.setPlace}

        onSelectPlace={this.onSelectPlace}
      />
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  onSetDetails: (payload) => dispatch(actions.setPosDetailsAction(payload)),
})

export default connect(null, mapDispatchToProps)(StoreAddressScreen);
