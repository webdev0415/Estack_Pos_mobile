import React, { Component } from 'react';
import Home from './Home';

class HomeScreen extends Component {
  goToCoupon = () => {
    this.props.navigation.navigate('NewStoreCoupon', {
      itemId: 86,
      otherParam: 'starbuck',
    })
  }

  render() {
    return (
      <Home goToCoupon={this.goToCoupon}/>
    );
  }
};

export default HomeScreen;
