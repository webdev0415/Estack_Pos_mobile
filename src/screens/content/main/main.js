import React from 'react';
import { View, ImageBackground, Image, Text, Platform, Dimensions, } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import MyAccount from './MyAccount'
import HomeScreen from './Home'
import DashboardScreen from './Dashboard';
import TransactionScreen from './transaction/transaction'
import ScunCustomer from './ScanCustomer';
import { HeaderTitle } from 'react-navigation-stack';
import HeaderLeft from '../../../components/MainNavigation/headerLeft';
import headerRight from '../../../components/MainNavigation/headerRight';
import { headerTitleStyle, headerStyle, tabBarOptions } from '../../../constants/navigationStyles';
import { SvgXml } from 'react-native-svg';
import { HOME, TRANSACTIONS, MYACCOUNT } from '../../../constants/bottomMenuIcons';
import { images } from '../../../constants/images';

const { height } = Dimensions.get('window');

const HomeStack = createStackNavigator({
    Home: {
        screen: DashboardScreen,
        navigationOptions: {
            headerRight: headerRight(),
            headerLeft: <HeaderLeft />,
            title: 'Dashboard',
            headerTitleStyle: headerTitleStyle,
            headerStyle: headerStyle,
            cardStyle: { backgroundColor: '#F4F6FA' }
        }
    }
});

const TransactionStack = createStackNavigator({
    Transactions: {
        screen: ScunCustomer,
        navigationOptions: {
            header: null,
            HeaderTitle: "Transaction",
            headerRight: headerRight,
            headerLeft: <HeaderLeft />,
            title: 'Transaction',
            headerTitleStyle: headerTitleStyle,
            headerStyle: headerStyle,
        }
    }
});
const MyAccountStack = createStackNavigator({
    MyAccount: {
        screen: MyAccount,
        navigationOptions: {
            HeaderTitle: "My Account",
            headerRight: headerRight,
            headerLeft: <HeaderLeft />,
            title: 'My Account',
            headerTitleStyle: headerTitleStyle,
            headerStyle: headerStyle,
        }
    }
});

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <SvgXml xml={HOME(tintColor)} width={21} height={21} />
                )
            },
        },
        Transactions: {
            screen: TransactionStack,
            navigationOptions: {
                tabBarVisible: false,
                tabBarIcon: () => (
                    <ImageBackground style={{  width: 64, height: 67, marginBottom: Platform.OS === 'android' ? '25%' : height >= 810 ? '35%' : height > 610 ? '27%' : '31%' }} source={images['tess']}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: Platform.OS === 'android' ? '48.5%' : '53%' }} >
                            <SvgXml xml={TRANSACTIONS} width={19} height={15} style={{ marginRight: 2 }} />
                        </View>
                    </ImageBackground>
                )
            },
        },
        MyAccount: {
            screen: MyAccountStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <SvgXml xml={MYACCOUNT(tintColor)} width={21} height={21} />
                )
            },
        },
    },
    {
        defaultNavigationOptions: {
            tabBarOptions: {
                showLabel: false,
                activeTintColor: '#4dbff6',
                inactiveTintColor: 'black',
                style: tabBarOptions,
            },

        }
    }
);

export default createAppContainer(TabNavigator);
