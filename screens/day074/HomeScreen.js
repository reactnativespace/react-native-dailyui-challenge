import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import Swiper from 'react-native-deck-swiper'


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Feather name="arrow-left" size={24} color="black" />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="search" size={24} color="black" style={{ marginRight: 20 }} />
                    <Feather name="more-vertical" size={24} color="black" />
                </View>
            </View>

            <ScrollView style={{ flex: 1, padding: 20 }}>

                <Animated.View style={{ flexDirection: 'row' }} entering={FadeInDown.delay(500).duration(500)}>
                    <Image source={require('./reactnativespace_logo.png')} style={{ width: 80, height: 80, borderRadius: 40, }} />
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 25, color: '#1f2023' }}>Learn React</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 13, marginTop: -10, color: '#048533' }}>ReactNativeSpace</Text>
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(1000).duration(500)}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#1f2023' }}>4.5</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#d9d9d9' }}>40K reviews</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#1f2023' }}>1M+</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#d9d9d9' }}>Downloads</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('./pegi3.png')} style={{ width: 18, height: 25, resizeMode: 'stretch' }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#d9d9d9' }}>Pegi 3</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={{
                        backgroundColor: '#048533', padding: 10, borderRadius: 20, alignItems: 'center', shadowColor: "#048533",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.36,
                        shadowRadius: 6.68,
                        elevation: 11,
                        marginBottom: 20
                    }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF', }}>Download</Text>
                    </TouchableOpacity>

                </Animated.View>

                <Animated.View entering={FadeInDown.delay(1500).duration(500)}>
                    <ScrollView style={{ flexGrow: 0, marginBottom: 20 }} horizontal showsHorizontalScrollIndicator={false}>
                        <Image source={require('./1.jpg')} style={{ width: 140, height: 200, borderRadius: 20, backgroundColor: '#048533' }} />

                        <Image source={require('./2.jpg')} style={{ width: 140, height: 200, borderRadius: 20, backgroundColor: '#048533', marginLeft: 10 }} />

                        <Image source={require('./3.jpg')} style={{ width: 140, height: 200, borderRadius: 20, backgroundColor: '#048533', marginLeft: 10 }} />
                    </ScrollView>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(2000).duration(500)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#1f2023' }}>About</Text>
                        <Feather name="arrow-right" size={24} color="#048533" />
                    </View>

                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#d9d9d9', textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 0 }}>

                        <View style={{ borderWidth: 1, borderColor: '#1f2023', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#1f2023' }}>Education</Text>
                        </View>

                        <View style={{ borderWidth: 1, borderColor: '#1f2023', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#1f2023' }}>Programming</Text>
                        </View>


                        <View style={{ borderWidth: 1, borderColor: '#1f2023', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#1f2023' }}>Early Access</Text>
                        </View>
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(2500).duration(500)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#1f2023' }}>Reviews</Text>
                        <Feather name="arrow-right" size={24} color="#048533" />
                    </View>

                    <View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#1f2023' }}>5</Text>
                            <View style={{ flex: 1, height: 6, backgroundColor: '#d9d9d9', marginLeft: 10, marginBottom: 3, borderRadius: 20 }}>
                                <View style={{ width: '60%', height: 6, position: 'absolute', backgroundColor: '#048533', borderRadius: 20 }} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#1f2023' }}>4</Text>
                            <View style={{ flex: 1, height: 6, backgroundColor: '#d9d9d9', marginLeft: 10, marginBottom: 3, borderRadius: 20 }}>
                                <View style={{ width: '20%', height: 6, position: 'absolute', backgroundColor: '#048533', borderRadius: 20 }} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#1f2023' }}>3</Text>
                            <View style={{ flex: 1, height: 6, backgroundColor: '#d9d9d9', marginLeft: 10, marginBottom: 3, borderRadius: 20 }}>
                                <View style={{ width: '5%', height: 6, position: 'absolute', backgroundColor: '#048533', borderRadius: 20 }} />
                            </View>
                        </View>


                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#1f2023' }}>2</Text>
                            <View style={{ flex: 1, height: 6, backgroundColor: '#d9d9d9', marginLeft: 10, marginBottom: 3, borderRadius: 20 }}>
                                <View style={{ width: '10%', height: 6, position: 'absolute', backgroundColor: '#048533', borderRadius: 20 }} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#1f2023' }}>1</Text>
                            <View style={{ flex: 1, height: 6, backgroundColor: '#d9d9d9', marginLeft: 10, marginBottom: 3, borderRadius: 20 }}>
                                <View style={{ width: '5%', height: 6, position: 'absolute', backgroundColor: '#048533', borderRadius: 20 }} />
                            </View>
                        </View>

                    </View>
                </Animated.View>


                <View style={{ height: 50 }} />
            </ScrollView>
        </View >

    );
}

export { HomeScreen };
