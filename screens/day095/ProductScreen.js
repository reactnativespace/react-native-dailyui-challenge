import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInUp, FadeInRight, FadeOutRight, Layout, ceil } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';


const ProductScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 20 }}>

            <Ionicons name="chevron-back" size={25} color="black" />

            <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,
         }} entering={FadeInDown.delay(300).duration(300)}>
                <View style={{ width: 170, height: 170, backgroundColor: '#f5f5f7', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./2.png')} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', alignSelf: 'center', marginTop: 10 }}>Emergency SOS</Text>
                </View>

                <View style={{ width: 170, height: 170, backgroundColor: '#f5f5f7', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./3.png')} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', alignSelf: 'center', marginTop: 10, textAlign: 'center' }}>Dual-Camera</Text>
                </View>
            </Animated.View>

            <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }} entering={FadeInDown.delay(600).duration(300)}>
                <View style={{ width: 170, height: 170, backgroundColor: '#f5f5f7', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./4.png')} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', alignSelf: 'center', marginTop: 10 }}>Action Mode</Text>
                </View>

                <View style={{ width: 170, height: 170, backgroundColor: '#f5f5f7', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./5.png')} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', alignSelf: 'center', marginTop: 25 }}>Long Battery Life</Text>
                </View>
            </Animated.View>

            <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }} entering={FadeInDown.delay(900).duration(300)}>
                <View style={{ width: 170, height: 170, backgroundColor: '#f5f5f7', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./6.png')} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', alignSelf: 'center', marginTop: 10 }}>A15 Bionic chip</Text>
                </View>

                <View style={{ width: 170, height: 170, backgroundColor: '#f5f5f7', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./7.png')} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', alignSelf: 'center', marginTop: 10 }}>Face ID</Text>
                </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(1200).duration(300)}>
                <TouchableOpacity style={{ paddingHorizontal: 50, paddingVertical: 5, backgroundColor: '#0071e3', alignSelf: 'center', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}
                    onPress={() => navigation.navigate('Product')}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#FFF', alignSelf: 'center' }}>Shop iPhone</Text>
                </TouchableOpacity>
            </Animated.View>





        </View>
    );
}

export { ProductScreen };
