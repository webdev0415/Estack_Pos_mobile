import React from 'react';
import { Text, View, ScrollView, Platform, Image, TouchableOpacity } from 'react-native';
import { images } from '../../../../constants/images';
import styles from './styles';

const Home = (props) => {
    const { goToCoupon } = props;

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.mainContainer}>
                <View style={styles.subContainer1}>
                    <Text style={styles.reward_text}>Rewards Summary</Text>
                    <View style={styles.card_align}>
                        <View style={styles.reward_summary_card}>
                            <Text style={styles.point_text}>Points Earned</Text>
                            <View style={styles.card_inside}>
                                <Image style={{height:17,width:17}} source={images['group-10']} />  
                                <Text style={styles.card_value}>12,987</Text>                           
                            </View>
                        </View>
                        <View style={styles.reward_summary_card}>
                            <Text style={styles.point_text}>Points Redeemed</Text>
                            <Text style={[styles.card_value1, { marginTop:Platform.OS === 'ios' ? 0 : -1 }]}>1,900</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.memberShipContainer}>
                    <Text style={styles.reward_text}>Your Memberships</Text>
                        <View style={styles.membership_card}>
                            <Text style={styles.membership_card_inside}>
                                You do not have any active memberships. Checkout stores near you and Join their membership program.
                        </Text>
                        </View>
                </View>
                <View style={styles.newStoresContainer}>
                    <Text style={styles.reward_text}>New Stores</Text>

                    <View style={styles.new_store_card_align}>
                        <TouchableOpacity onPress={goToCoupon} style={styles.new_store_card}>
                            <View>
                                <Image style={styles.storeIcon} source={images['2000px-Louis_Vuitton_Logo']} />
                            </View>
                        </TouchableOpacity>

                        <View style={styles.new_store_card}>
                            <Image style={styles.storeIcon} source={images['google']} />
                        </View>
                        <View style={styles.new_store_card}>

                            <Image style={styles.storeIcon} source={images['twitter']} />

                        </View>
                        <TouchableOpacity onPress={goToCoupon} style={styles.new_store_card}>
                            <View  >
                                <Image style={styles.storeIcon} source={images['2000px-Louis_Vuitton_Logo']} />
                            </View>
                        </TouchableOpacity>

                        <View style={styles.new_store_card}>
                            <Image style={styles.storeIcon} source={images['google']} />
                        </View>
                        <View style={styles.new_store_card}>

                            <Image style={styles.storeIcon} source={images['twitter']} />

                        </View>
                        <TouchableOpacity onPress={goToCoupon} style={styles.new_store_card}>
                            <View  >
                                <Image style={styles.storeIcon} source={images['timeless-logos']} />
                            </View>
                        </TouchableOpacity>

                        <View style={styles.new_store_card}>
                            <Image style={styles.storeIcon} source={images['google']} />
                        </View>
                        <View style={styles.new_store_card}>

                            <Image style={styles.storeIcon} source={images['twitter']} />
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}

export default Home;
