import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView, Modal, Dimensions, LogBox } from 'react-native';
import FadeIn from '../../components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInDown, useSharedValue } from 'react-native-reanimated';

const width = Dimensions.get('window').width;

const MapScreen = ({ navigation }) => {


    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <FontAwesome5 name="map-marker-alt" size={40} color="#ec121d" style={{ position: 'absolute', left: 46, top: 250, zIndex: 999 }} />

            <Image source={require('./map.png')} style={{ width: width, height: 560 }} resizeMode='center' />

            <View style={{
                backgroundColor: '#FFF', borderRadius: 10, padding: 15
            }}>
                <Image source={require('./image9.jpg')} style={{ position: 'absolute', top: -40, left: width / 2 - 40, width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor: '#ec121d' }} />
                <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#000', textAlign: 'center', marginTop: 40 }}>Jack Black</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#000', textAlign: 'center', }}>Location</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#000', textAlign: 'center', }}>Delivery Time</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#000', textAlign: 'center', }}>Tracking Number</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#000', textAlign: 'center', marginLeft: 9 }}>3.2 Km</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#000', textAlign: 'center', marginLeft: -20 }}>12 minutes</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#000', textAlign: 'center', marginRight: 30 }}>154646416</Text>
                </View>
            </View>
        </View>

    );
}

export { MapScreen };
