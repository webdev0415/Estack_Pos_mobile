import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Login from '../screens/auth/Login';
import Root from '../screens/Root';
import SetPassword from '../screens/auth/ResetPassword';
import StoreAddress from '../screens/auth/StoreAddress';
import ForgotPassword from '../screens/auth/ForgotPassword';
import Main from '../screens/content/main/main';
import ScanCoupon from '../screens/content/main/ScanCoupon';
import ScanCustomer from '../screens/content/main/ScanCustomer';
import GrandPoints from '../screens/content/main/GrandPoints';

const drwernavigator = createStackNavigator({
  Root: {
    screen: Root,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  StoreAddress: {
    screen: StoreAddress,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  SetPassword: {
    screen: SetPassword,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  Main: {
    screen: Main,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },

  ScanCoupon: {
    screen: ScanCoupon,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  GrandPoints: {
    screen: GrandPoints,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  ScanCustomer: {
    screen: ScanCustomer,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  }
}, {
    initialRouteName: 'Main',
  });

export default createAppContainer(drwernavigator)