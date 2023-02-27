import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');
    const [isVisible, setIsVisible] = React.useState(false);

    const slidesRef = React.useRef(null);

    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const viewableItemsChanged = React.useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;

    const viewConfig = React.useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={{ flex: 1, backgroundColor: '#232936' }}>

            <ScrollView
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            >
                <View style={{ flex: 1, width: width, padding: 20 }}>
                    <Image source={require('./1.png')} style={{ width: 350, height: 400, resizeMode: 'contain', alignSelf: 'center' }} />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 30, color: '#FFF', textAlign:'center' }}>BTC, Crypto and NFTs</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#8e9298', textAlign:'center', marginTop: 20 }}>Trusted by Over 120 Million Users Worldwide</Text>

                </View>
                <View style={{ flex: 1, width: width, padding: 20 }}>
                    <Image source={require('./2.png')} style={{ width: 350, height: 400, resizeMode: 'contain', alignSelf: 'center' }} />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 25, color: '#FFF', textAlign: 'center' }}>Trade and Manage 350+ Cryptocurrencies</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#8e9298', marginTop: 20, textAlign:'center' }}>New released altcoins!</Text>

                </View>
                <View style={{ flex: 1, width: width, padding: 20 }}>
                    <Image source={require('./3.png')} style={{ width: 350, height: 400, resizeMode: 'contain', alignSelf: 'center' }} />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 30, color: '#FFF', textAlign:'center' }}>Stake, Save, and Earn Daily Rewards</Text>

                    <TouchableOpacity style={{ backgroundColor: '#f6606e', justifyContent: 'center', alignItems: 'center', paddingVertical: 8, borderRadius: 10, marginTop: 90 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#FFF' }}>GET STARTED</Text>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#8e9298', alignSelf: 'center', marginTop: 15 }}>Terms of service</Text>

                </View>



            </ScrollView>

            <View style={{ flexDirection: 'row', height: 25, alignSelf: 'center', marginBottom: 20 }}>
                {[...new Array(3)].map((_, i) => {
                    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                    const dotWidth = scrollX.interpolate({ inputRange, outputRange: [10, 20, 10], extrapolate: 'clamp' });

                    const opacity = scrollX.interpolate({ inputRange, outputRange: [0.3, 1, 0.3], extrapolate: 'clamp' });
                    return <Animated.View style={{ width: dotWidth, opacity: opacity, height: 10, borderRadius: 5, backgroundColor: '#f6606e', marginHorizontal: 8 }} key={i.toString()} />
                })}
            </View>


        </View>
    );
}

export { HomeScreen };
