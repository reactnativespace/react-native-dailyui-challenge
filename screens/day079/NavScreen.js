import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Button } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';

const NavScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')
    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <View style={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                    <TouchableOpacity style={{ position: 'absolute', top: 20, left: 20, zIndex: 2, width: 40, height: 40, backgroundColor: '#1f1f1f', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Entypo name="chevron-left" size={24} color="#FFF" />
                    </TouchableOpacity>
                    <Image source={require('./3.jpg')} resizeMode='cover' style={{ backgroundColor: 'black', height: 400, width: width, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }} />
                    <View style={{ position: 'absolute', bottom: 30, left: 20 }}>
                        <Text style={{
                            fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 35, textShadowColor: 'rgba(0, 0, 0, 0.75)',
                            textShadowOffset: { width: -1, height: 1 },
                            textShadowRadius: 10
                        }}>{`Your trip in\nBali, Indonesia`}</Text>
                    </View>
                </View>
            </Animated.View>

            <Animated.View style={{ padding: 20 }} entering={FadeInDown.delay(600).duration(300)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0e9488', fontSize: 20, marginBottom: -10 }}>Florence</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0e9488', fontSize: 40 }}>FLO</Text>
                    </View>
                    <MaterialCommunityIcons name="airplane" size={50} color="#0e9488" />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0e9488', fontSize: 20, marginBottom: -10 }}>Bali</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0e9488', fontSize: 40 }}>DPS</Text>
                    </View>
                </View>

                <Text style={{ fontFamily: 'Poppins-Regular', color: '#a3a7b8', fontSize: 15 }}>Passenger</Text>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#0e9488', fontSize: 15, marginTop: -5 }}>Louise Malone</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#a3a7b8', fontSize: 15 }}>Flight</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0e9488', fontSize: 15, marginTop: -5 }}>RNS1234</Text>
                    </View>

                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#a3a7b8', fontSize: 15 }}>Departs</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0e9488', fontSize: 15, marginTop: -5 }}>FRI, 6:00PM</Text>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#a3a7b8', fontSize: 15 }}>Seat</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0e9488', fontSize: 15, marginTop: -5 }}>06B</Text>
                    </View>

                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#a3a7b8', fontSize: 15 }}>Arrives</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0e9488', fontSize: 15, marginTop: -5 }}>FRI, 11:50PM</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#a3a7b8', fontSize: 15 }}>Terminal</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0e9488', fontSize: 15, marginTop: -5 }}>J8</Text>
                    </View>

                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#a3a7b8', fontSize: 15 }}>Gate</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0e9488', fontSize: 15, marginTop: -5 }}>C</Text>
                    </View>

                    <View>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#a3a7b8', fontSize: 15 }}>Boarding</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#0e9488', fontSize: 15, marginTop: -5 }}>3:00PM</Text>
                    </View>
                </View>

            </Animated.View>

        </View>
    );
}

export { NavScreen };
