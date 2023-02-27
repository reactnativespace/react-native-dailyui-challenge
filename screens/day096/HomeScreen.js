import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInUp, FadeInRight, FadeOutRight, Layout, ceil } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');

    return (
        <View style={{ flex: 1, backgroundColor: '#000000', padding: 20 }}>

            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome5 name="bars" size={24} color="#FFF" />
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#181818', paddingVertical: 8, paddingHorizontal: 10, borderRadius: 20, marginHorizontal: 10 }}>
                        <TextInput placeholder='Search Product' placeholderTextColor={'#737373'} style={{ flex: 1, fontFamily: 'Poppins-Regular' }} />
                        <FontAwesome5 name="search" size={24} color="#ffcf54" />
                    </View>
                    <FontAwesome5 name="microphone" size={24} color="#ffcf54" />
                </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(300)}>
                <ScrollView style={{ marginTop: 20, alignSelf: 'center', flexGrow: 0 }} horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ width: width - 70, height: 200, backgroundColor: '#2f2f2f', borderRadius: 20, padding: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 30, color: '#FFF', marginTop: 75 }}>{`Apple\niPhone`}</Text>
                        <Image source={require('./1.png')} style={{ width: 180, height: 180, position: 'absolute', right: 0, bottom: 10, zIndex: -1 }} />
                    </View>
                    <View style={{ width: width - 70, height: 200, backgroundColor: '#2f2f2f', borderRadius: 20, padding: 20, marginLeft: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 30, color: '#FFF', marginTop: 75 }}>{`Smart Watch\nSamsung`}</Text>
                        <Image source={require('./2.png')} style={{ width: 180, height: 180, position: 'absolute', right: 0, bottom: 10, zIndex: -1 }} />
                    </View>
                    <View style={{ width: width - 70, height: 200, backgroundColor: '#2f2f2f', borderRadius: 20, padding: 20, marginLeft: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 30, color: '#FFF', marginTop: 75 }}>{`Apple\niPad 9th Gen`}</Text>
                        <Image source={require('./3.png')} style={{ width: 180, height: 180, position: 'absolute', right: 0, bottom: 10, zIndex: -1 }} />
                    </View>
                    <View style={{ width: width - 70, height: 200, backgroundColor: '#2f2f2f', borderRadius: 20, padding: 20, marginLeft: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 30, color: '#FFF', marginTop: 75 }}>{`Xiaomi Mi\nWifi Extender`}</Text>
                        <Image source={require('./4.png')} style={{ width: 180, height: 180, position: 'absolute', right: 0, bottom: 10, zIndex: -1 }} />
                    </View>

                </ScrollView>
            </Animated.View>



            <Animated.View entering={FadeInDown.delay(900).duration(300)}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#FFF', marginTop: 20 }}>{`Short by Product`}</Text>
                <ScrollView style={{ flexGrow: 0, marginTop: 20 }} horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ width: 80, height: 80, backgroundColor: '#ffcf54', borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome5 name="headphones" size={30} color="black" />
                    </View>

                    <View style={{ width: 80, height: 80, backgroundColor: '#ffcf54', borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                        <FontAwesome5 name="tablet" size={30} color="black" />
                    </View>

                    <View style={{ width: 80, height: 80, backgroundColor: '#ffcf54', borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                        <FontAwesome5 name="gamepad" size={30} color="black" />
                    </View>

                    <View style={{ width: 80, height: 80, backgroundColor: '#ffcf54', borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                        <FontAwesome5 name="laptop" size={30} color="black" />
                    </View>

                    <View style={{ width: 80, height: 80, backgroundColor: '#ffcf54', borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                        <FontAwesome5 name="blender" size={30} color="black" />
                    </View>
                </ScrollView>
            </Animated.View>

            <Animated.View style={{ flex: 1 }} entering={FadeInDown.delay(1200).duration(300)}>
                <ScrollView style={{ flexGrow: 0 }}>
                    <View style={{ padding: 10, borderWidth: 1, borderColor: '#2f2f2f', marginTop: 20, borderRadius: 20, flexDirection: 'row' }}>

                        <Image source={require('./5.png')} style={{ width: 120, height: 120 }} />
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#FFF' }}>{`Zotac GeForce RTX 360`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF' }}>{`LHR Graphic Card`}</Text>
                        </View>

                        <View style={{ position: 'absolute', right: 10, bottom: 10, backgroundColor: '#ffcf54', paddingHorizontal: 10, borderRadius: 5 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#000' }}>{`In Stock`}</Text>
                        </View>

                    </View>

                    <View style={{ padding: 10, borderWidth: 1, borderColor: '#2f2f2f', marginTop: 20, borderRadius: 20, flexDirection: 'row' }}>

                        <Image source={require('./6.png')} style={{ width: 120, height: 120 }} />
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#FFF' }}>{`Xiaomi Mi Band 7`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF' }}>{`Smart Band`}</Text>
                        </View>

                        <View style={{ position: 'absolute', right: 10, bottom: 10, backgroundColor: '#ffcf54', paddingHorizontal: 10, borderRadius: 5 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#000' }}>{`In Stock`}</Text>
                        </View>

                    </View>

                    <View style={{ padding: 10, borderWidth: 1, borderColor: '#2f2f2f', marginTop: 20, borderRadius: 20, flexDirection: 'row' }}>

                        <Image source={require('./7.png')} style={{ width: 120, height: 120 }} />
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#FFF' }}>{`Anker Soundcore`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF' }}>{`Wireless Bluetooth 5.0`}</Text>
                        </View>

                        <View style={{ position: 'absolute', right: 10, bottom: 10, backgroundColor: '#ffcf54', paddingHorizontal: 10, borderRadius: 5 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#000' }}>{`In Stock`}</Text>
                        </View>

                    </View>
                </ScrollView>

            </Animated.View>





        </View>
    );
}

export { HomeScreen };
