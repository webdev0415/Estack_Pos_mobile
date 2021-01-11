import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';
import DatePicker from 'react-native-date-ranges';
import { Dropdown } from 'react-native-material-dropdown';
import styles from './styles';

let data = [{
    value: 'All',
}, {
    value: 'Redeemed',
}, {
    value: 'Earned',
}];

class Transaction extends React.Component {

    customButton = (onConfirm) => (
      <View style={{ borderRadius: 5, overflow: 'hidden' }}>
        <Button
          onPress={onConfirm}
          style={{ container: { width: '80%', marginHorizontal: '3%' }, text: { fontSize: 20 } }}
          primary
          title={'Select'}
          color='#4076d9'
        />
      </View>
    )

    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1, width: '100%', flexBasis: 'auto' }}>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 15, backgroundColor: 'white' }}>
                    <View style={{ width: '100%', marginTop: 15 }}>
                        <Text style={styles.reward_text}>Point Summary</Text>
                        <View style={styles.card_align}>
                            <View style={styles.reward_summary_card}>
                              <Text style={styles.point_text}>Balance Points</Text>
                              <Text style={styles.card_value}>1,900</Text>
                            </View>
                            <View style={styles.reward_summary_card}>
                              <Text style={styles.point_text}>Value</Text>
                              <Text style={styles.card_value}>$ 1,900</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: 22, display: 'flex', flexDirection: 'row',justifyContent:'space-between' }}>
                        <View style={{width:'48%'}}>
                            <Text style={styles.transaction}>Transaction Duration</Text>
                            <DatePicker
                              selectedBgColor="#4076d9"
                              selectedTextColor="white"
                              style={{
                                width: '100%', height: 30, borderRadius: 4, borderWidth: 1,
                                borderColor: '#d9d9d9', backgroundColor: 'white'
                              }}
                              customStyles={{
                                placeholderText: { fontSize: 12, color: 'rgba(0, 0, 0, 0.25)',fontFamily: 'Roboto-Regular' }, // placeHolder style
                                headerStyle: {backgroundColor:'#4076d9'},			// title container style
                                headerMarkTitle: {}, // title mark style 
                                headerDateTitle: {}, // title Date style
                                contentInput: {}, //content text container style
                                contentText: { fontSize: 12, color: 'rgba(0, 0, 0, 0.25)',fontFamily: 'Roboto-Regular' }, //after selected text Style
                              }} // optional 
                              centerAlign // optional text will align center or not
                              allowFontScaling={false} // optional
                              placeholder={'04/11/2019 - 05/11/2019'}
                              mode={'range'}
                              markText="Pick Range"
                              customButton={this.customButton}
                              returnFormat='DD/MM/YYYY'
                              headFormat='DD/MM/YYYY'
                              outFormat='DD/MM/YYYY'
                            />

                        </View>
                        <View style={{width:'48%'}}>
                          <Text style={styles.transaction}>Transaction Type</Text>
                          <Dropdown
                            fontSize={12}
                            dropdownOffset={{ top: 1.8,left:0 }}
                            containerStyle={{
                              borderWidth: 1, borderColor: '#d9d9d9', height: 30,
                              borderRadius: 4, paddingLeft: 7,paddingTop:3.5, 
                            }}
                            inputContainerStyle={{ borderBottomColor: 'transparent'}}
                            data={data} value="All"
                            textColor='rgba(0, 0, 0, 0.25)'
                            rippleCentered={true}
                          />
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: 20 }}>
                        <Text style={styles.transaction}>Transactions</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Transaction;
