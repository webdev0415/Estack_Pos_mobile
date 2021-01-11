import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { images } from '../../../../constants/images';
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';

import MapView, { Marker } from 'react-native-maps';

import styles from './styles';

const MyAccount = (props) => {
  const { logOut, user, goToEditStore } = props;
//47.8558882,34.8951733
  const posNum = _.padStart(user.pos.id, 3, '0');
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.card}>

          <Image
            style={[styles.merchantLogo, { borderRadius: 5 }]}
            source={user.business.image ? { uri: user.business.image.ref } : images['defaultStore']}
          />
          <Text style={styles.pos}>
            {user.place.name} | POS{posNum}
          </Text>
          <Text style={[styles.lowInfo, { marginBottom: 10 }]}>
            {user.email}
          </Text>
          <Text style={styles.lowInfo}>
           {user.place.address}
          </Text>
          <Text style={styles.lowInfo}>
            {user.place.city}{user.place.postalCode ? ` - ${user.place.postalCode}` : ''}
          </Text>

          <MapView
            style={styles.map}
            mapType='standard'
            maxZoomLevel={17}
            initialCamera={{
              center: {
                latitude: user.place.location.coordinates[1],
                longitude: user.place.location.coordinates[0],
              },
              pitch: 0,
              heading: 0,
              zoom: 17,
            }}
            onPress={e => console.log(e.nativeEvent.coordinate)}
          >
            {/*<View style={{ flex: 1, alignItems: 'flex-end', paddingTop: 7, marginRight: 7 }}>
              <TouchableOpacity onPress={goToEditStore}>
                <Image style={{ width: 20, height: 20 }} source={images['edit']} />
              </TouchableOpacity>
          </View>*/}
            <Marker coordinate={{ latitude: user.place.location.coordinates[1], longitude: user.place.location.coordinates[0] }}>
              <Icon name='ios-pin' size={30} color='red' />
            </Marker>
          </MapView>

          {/*<TouchableOpacity style={styles.googleLink}>
            <Image style={styles.googleIcon} source={images['googleIcon']} />
            <Text style={styles.googleLinkText}>
              Link with Google
            </Text>
          </TouchableOpacity>*/}

          <TouchableOpacity style={styles.logOutContainer} onPress={logOut}>
            <Text style={styles.logOutText}>
              Logout
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
};

export default MyAccount;
