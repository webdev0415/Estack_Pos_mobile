import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Platform, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import RangeSlider from 'rn-range-slider';
import Modal from "react-native-modal"
import MemberShipcard from './membership_card/membership_card';
import StoreLocation from './store_location/store_location'




class NewStoreCoupon extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        // title: navigation.getParam('otherParam'),
        title: 'Louis Vuitton',
        headerTitleStyle: {
            color: 'rgba(0, 0, 0, 0.85)', textAlign: 'center', width: '75%',
            fontSize: 16, fontWeight: 'bold'
        },
    })

    state = {
        visible: false,
        point_value: 0
    }

    cancelHandler = () => {
        this.setState({ visible: false })
    }

    gotoexistingstore = () => {
        this.props.navigation.navigate('StoreCoupon')
    }

   

    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1, width: '100%', flexBasis: 'auto' }}>
                <View style={{ display: 'flex', padding: 20, paddingTop: 20, backgroundColor: "#f5f7f9" }}>
                    <ImageBackground source={require('./../../../../img/gold.png')}
                        style={{ minWidth: '95%', height: 213, padding: 20, paddingLeft: 25, borderRadius: 12, overflow: 'hidden' }}>
                        <View style={styles.card}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Text style={{ fontSize: 12, color: "rgba(0, 0, 0, 0.65)", fontFamily: 'Roboto-Bold', fontWeight: 'bold', opacity: .8 }}>View Coupons</Text>
                                <Image source={require('./../../../../img/group-7.png')} style={{ height: 16, width: 16, marginLeft: 10 }} />

                            </View>
                            <View style={{
                                width: 30, height: 30, backgroundColor: 'white', borderRadius: 100, borderWidth: 1,
                                borderColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: -40
                            }}>
                                <Image style={styles.image} source={require('./../../../../img/2000px-Louis_Vuitton_Logo.svg_.png')} />
                            </View>
                            <View>
                                <Text style={styles.user_name}>Sarah Silverman</Text>
                                <Text style={{ color: 'rgba(0, 0, 0, 0.85)', fontSize: 20, fontFamily: 'Roboto-Bold', fontWeight: 'bold' }}>Gold Member</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Image style={{ width: 20, height: 22 }} source={require('./../../../../img/group-20.png')} />
                                    <Text style={styles.point}>5,790 </Text>
                                </View>
                                <TouchableOpacity style={styles.btn_custom} onPress={() => this.setState({ visible: true })}>
                                    <Text style={styles.btn_text}>Convert</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </ImageBackground>
                    <MemberShipcard gotostore={this.gotoexistingstore}/>
                    <StoreLocation/>
                     
                </View>


                <View style={styles.container}>
                    <Modal dialogStyle={styles.popup_dialog}
                        onBackButtonPress={this.cancelHandler}
                        onBackdropPress={this.cancelHandler}
                        backdropOpacity={0.65}
                        isVisible={this.state.visible}
                        onTouchOutside={() => {
                            this.setState({ visible: false });
                        }}>
                        <View style={styles.popup_dialog}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.popup_heading}>Convert Points</Text>
                                <TouchableOpacity onPress={this.cancelHandler}>
                                    <Image source={require('./../../../../img/group-12.png')} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.para}>Sepecify points or use the Slider and choose the points to create a coupon.</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize: 14 }}>
                                <View>
                                    <Text style={styles.title_header}>Points to Convert</Text>
                                    <TextInput style={{ height: 40, borderColor: '#d9d9d9', borderWidth: 1, borderRadius: 4 }} />
                                </View>
                                <View>
                                    <Text style={styles.title_header}>Coupon Value</Text>
                                    <Text style={{
                                        color: '#4076d9', fontSize: 14, fontFamily: 'Roboto-Regular'
                                    }}>$ 15.00</Text>
                                </View>
                            </View>
                            <View style={styles.slider_view}>
                                <RangeSlider
                                    style={{ width: '100%', height: 80 }}
                                    gravity={'center'}
                                    min={0}
                                    max={250}
                                    step={20}
                                    selectionColor="#44dec5"
                                    blankColor="#e6e6e6"
                                    rangeEnabled={false}
                                    lineWidth={8}
                                    labelBackgroundColor="#44dec5"
                                    labelBorderColor="#fff"
                                    labelTextColor="#000"
                                    labelPadding={10}
                                    thumbBorderColor="#d9d9d9"

                                />
                                <View style={styles.slider_range}>
                                    <Text style={styles.slider_range_text}>10</Text>
                                    <Text style={styles.slider_range_text}>250</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 30 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#4a4a4a', fontFamily: 'Roboto-Bold', }}>Point Balance</Text>
                                <Text style={styles.balance_point_value}>8,799</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.cancelHandler} >
                                    <Text style={styles.cancel_text}> Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btn_convert} onPress={() => this.setState({ visible: true })}>
                                    <Text style={styles.btn_text}>Convert</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({


    //for andriod
    linearGradient_view: {
        borderColor: '#d6d8da',
        borderWidth: 1,
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        zIndex: 1000

    },

    //for ios
    shadow: {
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 1000

    },

    store_image_view: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    store_image: {
        width: 13,
        height: 13,
        marginTop: 3,
        marginRight: 8
    },

    store_location: {
        padding: 22,
        paddingLeft: 20,
        paddingTop: 30,
    },
    storename: {
        fontSize: 12,
        marginBottom: 10,
        color: 'black',
        fontFamily: 'Roboto-Regular'
    },
    store_address: {
        color: 'rgba(0, 0, 0, 0.65)',
        fontSize: 12,
        fontFamily: 'Roboto-Regular'
    },

    user_name: {
        color: 'rgba(0, 0, 0, 0.65)',
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: Platform.OS === 'ios' ? 5 : 0,
    },

    card: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%'
    },
    image: {
        height: 20,
        width: 20,
        borderRadius: 100,
        resizeMode: 'contain',
        padding: 10
    },
    point: {
        marginLeft: 10,
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.65)'
    },
    view_coupon_btn: {
        borderRadius: 5,
        overflow: 'hidden',
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold'
    },

    popup_heading: {
        fontSize: 16,
        color: '#4a4a4a',
        marginBottom: 10,
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold'

    },
    para: {
        color: 'rgba(0, 0, 0, 0.65)',
        fontSize: 12,
        marginBottom: 15,
        fontFamily: 'Roboto-Regular',
    },
    title_header: {
        fontSize: 14,
        marginBottom: 8,
        color: '#4a4a4a',
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold'
    },
    side_border: {
        height: 230,
        width: 1,
        marginLeft: 12,
        marginRight: 24,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
    },
    half_circle1: {
        height: 14,
        width: 14,
        backgroundColor: 'white',
        borderRadius: 100,
        borderColor: '#d9d9d9',
        borderWidth: 1,
        position: 'absolute',
        bottom: '27%',
        right: 17,
        shadowColor: 'rgba(0, 21, 41, 0.12)',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: .5,
        shadowRadius: 1,
        elevation: 3,
    },
    half_circle2: {
        height: 14,
        width: 14,
        backgroundColor: 'white',
        borderRadius: 100,
        borderColor: '#d9d9d9',
        borderWidth: 1,
        position: 'absolute',
        bottom: '18%',
        right: 17,
        shadowColor: 'rgba(0, 21, 41, 0.12)',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: .5,
        shadowRadius: 1,
        elevation: 3,
    },
    basic_card_align: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 0,
        color: 'rgba(0, 0, 0, 0.65)',
        fontWeight: '400',
        fontFamily: 'Roboto-Regular',
        position: 'relative'
    },
    minpoint_value: {
        marginLeft: 8,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Roboto-Bold',
        opacity: .8

    },
    container: {
        backgroundColor: 'red'
    },
    popup_dialog: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#d9d9d9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    slider_view: {
        marginTop: 20
    },

    slider_range: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#4a4a4a',
        fontSize: 14,
        marginTop: 5
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 2,
        overflow: 'hidden',
        borderColor: '#4076d9',
        borderWidth: 1,
        color: '#4076d9',
        width: 80,
        height: 25,
        marginRight: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_custom: {
        borderRadius: 2,
        overflow: 'hidden',
        margin: 'auto',
        backgroundColor: '#4076d9',
        color: 'white',
        width: 65,
        height: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    btn_view: {
        borderRadius: 2,
        overflow: 'hidden',
        margin: 'auto',
        backgroundColor: '#4076d9',
        color: 'white',
        width: 80,
        height: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_text: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
        marginTop: Platform.OS === 'ios' ? 0 : -2,
    },
    cancel_text: {
        color: '#4681c3',
        fontSize: 10,
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
        marginTop: Platform.OS === 'ios' ? 0 : -2,
    },
    btn_convert: {
        borderRadius: 3,
        overflow: 'hidden',
        margin: 'auto',
        backgroundColor: '#4076d9',
        color: 'white',
        width: 80,
        height: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    horiz_line_top: {
        height: 1,
        width: 10,
        backgroundColor: 'rgba(74, 74, 74, 0.18)',
        position: 'absolute',
        left: '22%',
        top: '0%'
    },
    horiz_line_bottom: {
        height: 1,
        width: 10,
        backgroundColor: 'rgba(74, 74, 74, 0.18)',
        position: 'absolute',
        left: '22%',
        top: '102%'
    },
    small_card_image_bg: {
        width: 223,
        height: 145,
        position: 'relative',
        marginTop: 0,
        padding: 23,
        paddingLeft: 27,
        borderRadius: 12,
        overflow: 'hidden'
    },
    small_card_image_header: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
        color: 'rgba(0, 0, 0, 0.65)'
    },
    point_value1: {
        marginRight: 5,
        fontSize: 12,
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.65)',
    },
    point_value2: {
        marginLeft: 5,
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
        color: 'rgba(0, 0, 0, 0.65)',
    },
    point_value3: {
        fontSize: 12,
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.65)',
    },
    birthday_mid: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.65)',
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold',
        marginTop: Platform.OS === 'ios' ? 4 : 3,
    },
    birthday: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.65)',
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold',
        marginTop: Platform.OS === 'ios' ? 2 : 1,
    },
    welcome: {
        marginRight: 5,
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.65)',
        fontFamily: 'Roboto-Regular',
        marginTop: Platform.OS === 'ios' ? 2 : 1,
    },
    card_value: {
        borderRadius: 20,
        marginTop: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 85,
        height: 30
    },
    memeber_benifit: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.65)',
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
    },
    current_memeber1: {
        position: 'absolute',
        top: '21.5%',
        left: -10,
        height: 38,
        width: 45,
        display: 'flex',
        justifyContent: 'center',
        opacity: 0
    },
    pointer1: {
        height: 14,
        width: 14,
        backgroundColor: '#3dc6f3',
        borderRadius: 100,
        position: 'absolute',
        bottom: '56%',
        right: 17,
        shadowColor: 'rgba(0, 21, 41, 0.12)',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: .5,
        shadowRadius: 1,
        elevation: 3,
        opacity: 0
    },
    current_memeber2: {
        position: 'absolute',
        top: '30%',
        left: -10,
        height: 38,
        width: 45,
        display: 'flex',
        justifyContent: 'center'
    },
    pointer2: {
        height: 14,
        width: 14,
        backgroundColor: '#3dc6f3',
        borderRadius: 100,
        position: 'absolute',
        bottom: '47.5%',
        right: 17,
        shadowColor: 'rgba(0, 21, 41, 0.12)',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: .5,
        shadowRadius: 1,
        elevation: 3,
    },
    current_memeber_value: {
        fontSize: 12,
        // height:'60%',
        color: 'rgba(0, 0, 0, 0.65)',
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
        textAlign: 'center',
        marginBottom: '20%'


    },
    slider_range_text: {
        color: '#4a4a4a',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
    },
    balance_point_value: {
        fontSize: 14,
        color: '#4076d9',
        fontFamily: 'Roboto-Regular',
        marginTop: Platform.OS === 'ios' ? 8 : 6,
    }

})


export default NewStoreCoupon