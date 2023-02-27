import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (
        <LinearGradient style={{ flex: 1, }}
            colors={['#4ea7ff', '#7639ff']}>
            <Animated.View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 40 }} entering={FadeInDown.delay(500).duration(500)}>
                <Feather name="thumbs-up" size={150} color='#FFF' />
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 70, color: '#FFF' }}>Thanks</Text>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 30, color: '#FFF', marginTop: -30 }}>for the following!</Text>
            </Animated.View>

            <Animated.View style={{ position: 'absolute', left: 30, top: 50 }} entering={FadeInDown.delay(300).duration(400)}>
                <Feather name="thumbs-up" size={30} color='#4065ff' />
            </Animated.View>

            <Animated.View style={{ position: 'absolute', left: 120, top: 30 }} entering={FadeInDown.delay(250).duration(450)}>
                <Feather name="thumbs-up" size={45} color='#4065ff' />
            </Animated.View>

            <Animated.View style={{ position: 'absolute', left: 180, top: 80 }} entering={FadeInDown.delay(260).duration(600)}>
                <Feather name="thumbs-up" size={35} color='#4065ff' />
            </Animated.View>

            <Animated.View style={{ position: 'absolute', left: 260, top: 60 }} entering={FadeInDown.delay(280).duration(550)}>
                <Feather name="thumbs-up" size={50} color='#4065ff' />
            </Animated.View>

            <Animated.View style={{ position: 'absolute', left: 340, top: 35 }} entering={FadeInDown.delay(200).duration(420)}>
                <Feather name="thumbs-up" size={45} color='#4065ff' />
            </Animated.View>
            
            <Animated.View style={{ position: 'absolute', left: 100, top: 120 }} entering={FadeInDown.delay(260).duration(380)}>
                <Feather name="thumbs-up" size={30} color='#4065ff' />
            </Animated.View>

            <Animated.View style={{ position: 'absolute', left: 160, top: 180 }} entering={FadeInDown.delay(250).duration(420)}>
                <Feather name="thumbs-up" size={38} color='#4065ff' />
            </Animated.View>

            <Animated.View style={{ position: 'absolute', left: 230, top: 135 }} entering={FadeInDown.delay(300).duration(460)}>
                <Feather name="thumbs-up" size={42} color='#4065ff' />
            </Animated.View>

            <Animated.View style={{ position: 'absolute', left: 310, top: 165 }} entering={FadeInDown.delay(254).duration(410)}>
                <Feather name="thumbs-up" size={45} color='#4065ff' />
            </Animated.View>

            <Animated.View style={{ position: 'absolute', left: 40, top: 250 }} entering={FadeInDown.delay(230).duration(510)}>
                <Feather name="thumbs-up" size={55} color='#4065ff' />
            </Animated.View>

            <Animated.View style={{ position: 'absolute', left: 20, top: 150 }} entering={FadeInDown.delay(270).duration(520)}>
                <Feather name="thumbs-up" size={35} color='#4065ff' />
            </Animated.View>


            <Animated.View style={{ position: 'absolute', left: 180, top: 260 }} entering={FadeInDown.delay(250).duration(440)}>
                <Feather name="thumbs-up" size={40} color='#4065ff' />
            </Animated.View>


            <Animated.View style={{ position: 'absolute', left: 260, top: 220 }} entering={FadeInDown.delay(240).duration(435)}>
                <Feather name="thumbs-up" size={28} color='#4065ff' />
            </Animated.View>

            <Animated.View style={{ position: 'absolute', left: 350, top: 280 }} entering={FadeInDown.delay(290).duration(420)}>
                <Feather name="thumbs-up" size={32} color='#4065ff' />
            </Animated.View>
        </LinearGradient>

    );
}

export { HomeScreen };
