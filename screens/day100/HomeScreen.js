import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 20 }}>

            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <MaterialIcons name="design-services" size={60} color="#4d57f8" style={{ alignSelf: 'center', marginTop: 20 }} />
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 25, alignSelf: 'center', color: '#4d57f8' }}>Daily UI</Text>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, alignSelf: 'center', color: '#4d57f8', marginTop: 20, textAlign: 'center' }}>Become a better designer in 100 days.</Text>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(300)}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, alignSelf: 'center', color: '#999999', marginTop: 20, textAlign: 'center' }}>Daily UI promts, inspiration, and neat surprise rewards.</Text>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(900).duration(300)}>
                <View style={{ backgroundColor: '#f9fafe', padding: 10, borderRadius: 20, marginTop: 20, borderWidth: 1, borderColor: '#e1e3e9' }}>
                    <TextInput placeholder='Email address' style={{ fontFamily: 'Poppins-Medium' }} />
                </View>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#999999', marginTop: 5 }}>100% FREE. No Spam. No Affiliate Links. No data sharing.</Text>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(1200).duration(300)}>
                <TouchableOpacity style={{
                    backgroundColor: '#4d57f8', alignSelf: 'center', paddingHorizontal: 40, paddingVertical: 5, borderRadius: 20, marginTop: 20, justifyContent: 'center', alignItems: 'center',
                    shadowColor: "#4d57f8",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#FFF', }}>Get Started</Text>
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, alignSelf: 'center', color: '#999999', marginTop: 10, textAlign: 'center' }}>www.dailyui.co</Text>
            </Animated.View>

        </View>
    );
}

export { HomeScreen };
