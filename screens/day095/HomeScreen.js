import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInUp, FadeInRight, FadeOutRight, Layout, ceil } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 20 }}>
            <Ionicons name="menu-outline" size={25} color="black" />

            <Animated.View entering={FadeInDown.delay(300).duration(500)}>
                <MaskedView
                    style={{ marginTop: 30, width: 200, height: 60, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}
                    maskElement={<Text style={{ fontFamily: 'Poppins-Bold', fontSize: 40, color: '#000', alignSelf: 'center' }}>iPhone 14</Text>
                    }
                >
                    <LinearGradient
                        colors={['#ed4152', '#6a8fef', '#2fa1b7']}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 0, y: 0.33 }}
                        style={{ width: 200, height: 60 }}
                    />
                </MaskedView>
            </Animated.View>


            <Animated.View entering={FadeInDown.delay(800).duration(500)}>
                <Image source={require('./1.jpg')} style={{ resizeMode: 'contain', alignSelf: 'center', marginTop: 30, alignSelf: 'center' }} />

                <TouchableOpacity style={{ paddingHorizontal: 50, paddingVertical: 5, backgroundColor: '#0071e3', alignSelf: 'center', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}
                    onPress={() => navigation.navigate('Product')}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#FFF', alignSelf: 'center' }}>See Details</Text>
                </TouchableOpacity>
            </Animated.View>



        </View>
    );
}

export { HomeScreen };
