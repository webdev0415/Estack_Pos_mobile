import { Component } from 'react';
import { Platform, Text, Linking, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import { testAuthAction } from '../redux/actions';

@connect(null, ({
  testAuth: testAuthAction,
}))
class Root extends Component {
  static navigationOptions = {
    header: null,
  }

  static propTypes = {
    testAuth: PropTypes.func,
  };

  componentDidMount() { // B
    if (true || Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        this.navigate(url);
      });
    } else {
        Linking.addEventListener('url', this.handleOpenURL);
      }
  }
    
    componentWillUnmount() { // C
      Linking.removeEventListener('url', this.handleOpenURL);
    }
    handleOpenURL = (event) => { // D
      this.navigate(event.url);
    }
    navigate = async (url) => { // E
      const { replace: navigateTo } = this.props.navigation;
      if (!url) {
        const accessToken = await AsyncStorage.getItem('accessToken');
        accessToken ? this.props.onGetSelf() : this.props.navigation.replace('Login');
      }

      const route = url.replace(/.*?:\/\//g, '');
      const token = route.match(/\/([^\/]+)\/?$/)[1];
      const routeName = route.split('/')[0];
      if (routeName === 'estackk') {
        navigateTo('SetPassword', { token })
      }
    }

  render() {
    return null;
  }
};

const mapDispatchToProps = (dispatch) => ({
  onGetSelf: () => dispatch(actions.getDetailsAction()),
})

export default connect(null, mapDispatchToProps)(Root);
