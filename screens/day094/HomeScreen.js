import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInUp, FadeInRight, FadeOutRight, Layout, ceil } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <Animated.View style={{ borderBottomWidth: 0.5, borderColor: '#9a9a9d', marginTop: 20 }} entering={FadeInDown.delay(300).duration(300)}>
                <ScrollView style={{ padding: 10 }} horizontal showsHorizontalScrollIndicator={false}>

                    <TouchableOpacity style={{ paddingHorizontal: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#004cff' }}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingHorizontal: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#9a9a9d' }}>Travel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingHorizontal: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#9a9a9d' }}>Business</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingHorizontal: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#9a9a9d' }}>Culture</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingHorizontal: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#9a9a9d' }}>Technology</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{ position: 'absolute', width: 48, height: 2, backgroundColor: '#004cff', bottom: -1, left: 30, borderRadius: 20 }} />
            </Animated.View>

            <Animated.View style={{ marginTop: 20, paddingBottom: 20, borderColor: '#9a9a9d', borderBottomWidth: 0.5 }} entering={FadeInDown.delay(600).duration(300)}>
                <ScrollView style={{ padding: 10 }} horizontal showsHorizontalScrollIndicator={false}>

                    <TouchableOpacity style={{ height: 140, width: 130, borderRadius: 10, backgroundColor: 'blue' }}>
                        <Image source={require('./1.jpg')} style={{ width: 130, height: 140, position: 'absolute', borderRadius: 10 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF', alignSelf: 'center', marginTop: 80 }}>#architecture</Text>
                        <View style={{ borderColor: '#FFF', borderWidth: 1, width: 80, paddingVertical: 2, borderRadius: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF', }}>Follow</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 140, width: 130, borderRadius: 10, backgroundColor: 'blue', marginLeft: 20 }}>
                        <Image source={require('./2.jpg')} style={{ width: 130, height: 140, position: 'absolute', borderRadius: 10 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF', alignSelf: 'center', marginTop: 80 }}>#nature</Text>
                        <View style={{ borderColor: '#FFF', borderWidth: 1, width: 80, paddingVertical: 2, borderRadius: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF', }}>Follow</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 140, width: 130, borderRadius: 10, backgroundColor: 'blue', marginLeft: 20 }}>
                        <Image source={require('./3.jpg')} style={{ width: 130, height: 140, position: 'absolute', borderRadius: 10 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF', alignSelf: 'center', marginTop: 80 }}>#teamwork</Text>
                        <View style={{ borderColor: '#FFF', borderWidth: 1, width: 80, paddingVertical: 2, borderRadius: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF', }}>Follow</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 140, width: 130, borderRadius: 10, backgroundColor: 'blue', marginLeft: 20, marginRight: 30 }}>
                        <Image source={require('./4.jpg')} style={{ width: 130, height: 140, position: 'absolute', borderRadius: 10 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF', alignSelf: 'center', marginTop: 80 }}>#money</Text>
                        <View style={{ borderColor: '#FFF', borderWidth: 1, width: 80, paddingVertical: 2, borderRadius: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#FFF', }}>Follow</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </Animated.View>

            <Animated.View style={{flex:1}} entering={FadeInDown.delay(900).duration(300)}>

                <ScrollView>

                    <View style={{ flexDirection: 'row', padding: 20 }}>
                        <AntDesign name="pushpin" size={24} color="#004cff" />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#2e2e2e', marginLeft: 10 }}>Popular</Text>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Image source={require('./5.jpg')} style={{ width: width, height: 250 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#2e2e2e', margin: 20 }}>How To Become A Freelance Blogger in 2023 (Upwork and Fiver Tricks)</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#2e2e2e', marginHorizontal: 20 }}>Freelance blogging can be a lucrative career choice for many writers. It may allow them to set their own working conditions and decide on their own pay scale. If you are interested in this career, knowing how to become a freelance blogger can help you prepare for it better. In this article, we discuss what a freelance blogger is, learn how to become a freelance blogger and explore their salary and skills, along with some useful tips on writing better blogs.</Text>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Image source={require('./6.jpg')} style={{ width: width, height: 250 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#2e2e2e', margin: 20 }}>Calculate How Much You Can Make on Youtube</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#2e2e2e', marginHorizontal: 20 }}>A YouTube calculator is a simple online tool that calculates an estimate of how much money you can earn from your YouTube channel.

                            Calculating your potential earnings from YouTube is a great way to see if it is worth your time to start a channel and begin creating videos for certain niches. It can also help you set realistic expectations for the average earnings you can expect.</Text>
                    </View>

                </ScrollView>
            </Animated.View>




        </View>
    );
}

export { HomeScreen };
