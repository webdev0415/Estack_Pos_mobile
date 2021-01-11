import React from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { images } from '../../constants/images';

class headerLeft extends React.Component {
  render() {
    if (!this.props.business) {
      return null;
    }
    return (
      <View style={{ marginLeft: 15 }}>
        <Image
          style={{ width: 30, height: 30, borderRadius: 50, borderWidth: 1 }}
          source={this.props.business.image ? { uri: this.props.business.image.ref } : images['defaultStore']}
        />
    </View>
    );
  }
};

const mapStateToProps = (state) => ({
  business: state.user.business,
})

export default connect(mapStateToProps, null)(headerLeft);
