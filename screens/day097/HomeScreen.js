import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
           setIsVisible(true)
        }, 1500);
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <Animated.View style={{ padding: 20 }} entering={FadeIn.delay(100).duration(1000)}>

                <View style={{ marginTop: 20 }}>
                    <View style={{ width: 120, height: 10, backgroundColor: '#d2e8f7' }} />
                    <View style={{ width: width - 40, height: 90, backgroundColor: '#d2e8f7', marginTop: 10 }} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <View style={{ width: 120, height: 10, backgroundColor: '#d2e8f7' }} />
                    <View style={{ width: width - 40, height: 90, backgroundColor: '#d2e8f7', marginTop: 10 }} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <View style={{ width: 120, height: 10, backgroundColor: '#d2e8f7' }} />
                    <View style={{ width: width - 40, height: 90, backgroundColor: '#d2e8f7', marginTop: 10 }} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <View style={{ width: 120, height: 10, backgroundColor: '#d2e8f7' }} />
                    <View style={{ width: width - 40, height: 90, backgroundColor: '#d2e8f7', marginTop: 10 }} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <View style={{ width: 120, height: 10, backgroundColor: '#d2e8f7' }} />
                    <View style={{ width: width - 40, height: 90, backgroundColor: '#d2e8f7', marginTop: 10 }} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <View style={{ width: 120, height: 10, backgroundColor: '#d2e8f7' }} />
                    <View style={{ width: width - 40, height: 90, backgroundColor: '#d2e8f7', marginTop: 10 }} />
                </View>

            </Animated.View>


            <Modal
                style={{ flex: 1 }}
                visible={isVisible}
                transparent={true}
                onRequestClose={() => setIsVisible(false)}
                animationType={'fade'}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}>
                    <View style={{
                        height: 500,
                        backgroundColor: '#FFF',
                        paddingHorizontal: 20,
                        paddingVertical: 30,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30
                    }}>

                        <Text style={{ fontSize: 150, position: 'absolute', top: -120, left: width / 2 - 85 }}>🥳</Text>

                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, alignSelf: 'center', marginTop: 50, color: '#23ace5' }}>CONGRATULATIONS!</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, alignSelf: 'center', marginTop: 20, color: '#3d444c' }}>Welcome Gift</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, alignSelf: 'center', marginTop: 20, color: '#3d444c', textAlign: 'center' }}>Take advantage of this discount code to benefit from free delivery for all your orders over 100 USD!</Text>

                        <View style={{ marginTop: 20, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f4f4', borderRadius: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, alignSelf: 'center', color: '#6c6c6c', textAlign: 'center' }}>0097-0222-2023-RNSPC-GIFT</Text>
                        </View>

                        <TouchableOpacity style={{ marginTop: 20, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#23ace5', borderRadius: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, alignSelf: 'center', color: '#FFF', textAlign: 'center' }}>Copy The Code</Text>
                        </TouchableOpacity>

                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, alignSelf: 'center', marginTop: 20, color: '#3d444c', textAlign: 'center', textDecorationLine: 'underline' }}>It does not interest me</Text>

                    </View>
                </View>
            </Modal>

        </View>
    );
}

export { HomeScreen };
