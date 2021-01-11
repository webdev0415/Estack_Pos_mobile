import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Button, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Dash from 'react-native-dash';



class MemberShipcard extends React.Component {



   


    render() {
        return (
            <View>
                <View style={{
                    display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center', marginTop: 20, marginBottom: 31
                }}>
                    <Text style={styles.memeber_benifit}>Membership Benefits</Text>
                    <TouchableOpacity style={styles.btn_view} onPress={this.props.gotostore}>
                        <Text style={styles.btn_text}>View Coupons</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.basic_card_align}>
                    <View>
                        <View style={{ position: 'relative' }}>
                            <View style={styles.horiz_line_top}></View>
                            <Dash style={styles.side_border} dashColor='rgba(74, 74, 74, 0.18)' dashGap={0} dashLength={6} dashThickness={1} />
                            <View style={styles.half_circle1}></View>
                            <ImageBackground style={styles.current_memeber1} source={require('./../../../../../img/group-31.png')}>
                                <Text style={styles.current_memeber_value}>113</Text>
                            </ImageBackground>
                            <View style={styles.pointer1}></View>
                        </View>
                    </View>
                    <View>
                        <ImageBackground source={require('./../../../../../img/club.png')}
                            style={styles.small_card_image_bg}>
                            <Text style={styles.small_card_image_header}>Club Membership</Text>
                            <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.point_value1}>1.2</Text>
                                <Image style={{ paddingLeft: 10, height: 16, width: 16 }} source={require('./../../../../../img/group-10.png')} />
                                <Text style={styles.point_value2}>for Every</Text>
                                <Text style={styles.point_value3}> $ 1.00</Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.birthday_mid}>25% </Text>
                                <Image style={{ marginLeft: 5, height: 14, width: 14 }} source={require('./../../../../../img/gift.png')} />
                            </View>
                            <View style={{ marginTop: 3, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.birthday}>25% </Text>
                                <Text style={styles.welcome}> Welcome  </Text>
                                <Image style={{ marginLeft: -5, marginBottom: 3, height: 24, width: 24 }} source={require('./../../../../../img/group-1.png')} />
                            </View>
                        </ImageBackground>
                        <LinearGradient colors={['#c9f0ec', '#cce8f9']}
                            start={{ x: 0.09, y: 0.09 }} end={{ x: 1.0, y: 1.0 }}
                            useAngle={true} angle={139} angleCenter={{ x: 0.5, y: 0.5 }}
                            style={styles.card_value}>
                            <Image style={{ height: 16, width: 16 }} source={require('./../../../../../img/group-10.png')} />
                            <Text style={styles.minpoint_value}>1000</Text>
                        </LinearGradient>
                    </View>
                </View>


                <View style={styles.basic_card_align}>
                    <View >
                        <View style={{ position: 'relative' }}>
                            <Dash style={styles.side_border} dashColor='rgba(74, 74, 74, 0.18)' dashGap={0} dashLength={6} dashThickness={1} />
                            <View style={styles.half_circle2}>
                            </View>
                            <ImageBackground style={styles.current_memeber2} source={require('./../../../../../img/group-31.png')}>
                                <Text style={styles.current_memeber_value}>113</Text>
                            </ImageBackground>
                            <View style={styles.pointer2}></View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <ImageBackground source={require('./../../../../../img/platinum.png')}
                            style={styles.small_card_image_bg}>
                            <Text style={styles.small_card_image_header}>Platinum Membership</Text>
                            <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.point_value1}>1.2</Text>
                                <Image style={{ paddingLeft: 10, height: 16, width: 16 }} source={require('./../../../../../img/group-10.png')} />
                                <Text style={styles.point_value2}>for Every</Text>
                                <Text style={styles.point_value3}> $ 1.00</Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.birthday_mid}>25% </Text>
                                <Image style={{ marginLeft: 5, height: 14, width: 14 }} source={require('./../../../../../img/gift.png')} />
                            </View>
                            <View style={{ marginTop: 3, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.birthday}>25% </Text>
                                <Text style={styles.welcome}> Welcome  </Text>
                                <Image style={{ marginLeft: -5, marginBottom: 3, height: 24, width: 24 }} source={require('./../../../../../img/group-1.png')} />
                            </View>
                        </ImageBackground>
                        <LinearGradient colors={['#c9f0ec', '#cce8f9']}
                            start={{ x: 0.09, y: 0.09 }} end={{ x: 1.0, y: 1.0 }}
                            useAngle={true} angle={139} angleCenter={{ x: 0.5, y: 0.5 }}
                            style={styles.card_value}>
                            <Image style={{ height: 16, width: 16 }} source={require('./../../../../../img/group-10.png')} />
                            <Text style={styles.minpoint_value}>1000</Text>
                        </LinearGradient>
                    </View>
                </View>



                <View style={styles.basic_card_align}>
                    <View>
                        <View style={{ position: 'relative' }}>
                            <Dash style={styles.side_border} dashColor='rgba(74, 74, 74, 0.18)' dashGap={0} dashLength={6} dashThickness={1} />
                            <View style={styles.half_circle2}>
                            </View>
                            <View style={styles.horiz_line_bottom}></View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <ImageBackground source={require('./../../../../../img/gold.png')}
                            style={styles.small_card_image_bg}>
                            <Text style={styles.small_card_image_header}>Gold Membership</Text>
                            <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.point_value1}>1.2</Text>
                                <Image style={{ paddingLeft: 10, height: 16, width: 16 }} source={require('./../../../../../img/group-10.png')} />
                                <Text style={styles.point_value2}>for Every</Text>
                                <Text style={styles.point_value3}> $ 1.00</Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.birthday_mid}>25% </Text>
                                <Image style={{ marginLeft: 5, height: 14, width: 14 }} source={require('./../../../../../img/gift.png')} />
                            </View>
                            <View style={{ marginTop: 3, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.birthday}>25% </Text>
                                <Text style={styles.welcome}> Welcome  </Text>
                                <Image style={{ marginLeft: -5, marginBottom: 3, height: 24, width: 24 }} source={require('./../../../../../img/group-1.png')} />
                            </View>
                        </ImageBackground>
                        <LinearGradient colors={['#c9f0ec', '#cce8f9']}
                            start={{ x: 0.09, y: 0.09 }} end={{ x: 1.0, y: 1.0 }}
                            useAngle={true} angle={139} angleCenter={{ x: 0.5, y: 0.5 }}
                            style={styles.card_value}>
                            <Image style={{ height: 16, width: 16 }} source={require('./../../../../../img/group-10.png')} />
                            <Text style={styles.minpoint_value}>1000</Text>
                        </LinearGradient>
                    </View>
                </View>
            </View>
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


export default MemberShipcard
