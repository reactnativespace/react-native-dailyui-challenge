import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';


const CouponScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#0f68d7' }}>
            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <Image source={require('./adidas.png')} style={{ width: 200, height: 300, resizeMode: 'contain', alignSelf: 'center', marginTop: 100 }} />
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 40, color: '#FFF' }}>{`10% Off`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 20, color: '#FFF' }}>{`Adidas Store`}</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, color: '#FFF' }}>{`JAN 1 - JAN 12`}</Text>
                    <Image source={require('./barcode.png')} style={{ width: 300, resizeMode: 'contain' }} />
                    <Ionicons name="close-circle-outline" size={50} color="#FFF" />
                </View>
            </Animated.View>



        </View >

    );
}

export { CouponScreen };
