import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const CategoriesScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 20 }}>

            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 25, }}>
                    <FontAwesome5 name="canadian-maple-leaf" size={30} color="#0c59ea" />
                    <FontAwesome5 name="bars" size={24} color="#32363b" />
                </View>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(300)}>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: '#32363b', alignSelf: 'center', marginTop: 10 }}>Discover the categories</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 12, marginVertical: 20, padding: 10, backgroundColor: '#f5f6fa', borderRadius: 10 }}>
                    <FontAwesome5 name="search" size={20} color="#d2d5da" />
                    <TextInput placeholder='Search for a category' placeholderTextColor={'#d2d5da'} style={{ fontFamily: 'Poppins-Medium', marginLeft: 10, flex: 1 }} />
                </View>

            </Animated.View>

            <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 25 }} entering={FadeInDown.delay(900).duration(300)}>
                <View style={{ backgroundColor: '#fdd6c5', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="volleyball-ball" size={30} color="#f8864a" />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#f8864a', marginTop: 10 }}>{`Volleyball`}</Text>
                </View>

                <View style={{ backgroundColor: '#fdc2c4', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="basketball-ball" size={30} color="#f84145" />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#f84145', marginTop: 10 }}>{`Basketball`}</Text>
                </View>

                <View style={{ backgroundColor: '#c2e3da', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="baseball-ball" size={30} color="#43aa8c" />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#43aa8c', marginTop: 10 }}>{`Baseball`}</Text>
                </View>
            </Animated.View>

            <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }} entering={FadeInDown.delay(1200).duration(300)}>

                <View style={{ backgroundColor: '#fcedc4', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="football-ball" size={30} color="#f8c848" />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#f8c848', marginTop: 10 }}>{`Football`}</Text>
                </View>

                <View style={{ backgroundColor: '#bdeeeb', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="table-tennis" size={30} color="#31ccc4" />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#31ccc4', marginTop: 10 }}>{`Tennis`}</Text>
                </View>

                <View style={{ backgroundColor: '#cbb9e1', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="heartbeat" size={30} color="#9d70d4" />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#9d70d4', marginTop: 10 }}>{`Fitness`}</Text>
                </View>
            </Animated.View>

            <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }} entering={FadeInDown.delay(1500).duration(300)}>
                <View style={{ backgroundColor: '#dcead1', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="bowling-ball" size={30} color="#91be6d" />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#91be6d', marginTop: 10 }}>{`Bowling`}</Text>
                </View>

                <View style={{ backgroundColor: '#b8c8e1', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="bicycle" size={30} color="#2858a2" />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#2858a2', marginTop: 10 }}>{`Bicycle`}</Text>
                </View>

                <View style={{ backgroundColor: '#b9d5e0', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="user-ninja" size={30} color="#277da0" />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#277da0', marginTop: 10 }}>{`Kung Fu`}</Text>
                </View>
            </Animated.View>

            <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }} entering={FadeInDown.delay(1800).duration(300)}>
                <View style={{ backgroundColor: '#b9c9e0', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="swimmer" size={30} color="#2858a2" />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#2858a2', marginTop: 10 }}>{`Swimming`}</Text>
                </View>

                <View style={{ backgroundColor: '#cbb9e1', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="running" size={30} color="#5d27a1" />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#5d27a1', marginTop: 10 }}>{`Running`}</Text>
                </View>

                <View style={{ backgroundColor: '#c9d2db', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="mountain" size={30} color="#577591" />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#577591', marginTop: 10 }}>{`Mountain`}</Text>
                </View>
            </Animated.View>

            <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }} entering={FadeInDown.delay(2100).duration(300)}>
                <View style={{ backgroundColor: '#eab7ef', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>

                </View>

                <View style={{ backgroundColor: '#b0b9c8', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>

                </View>

                <View style={{ backgroundColor: '#c8c1f5', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>

                </View>
            </Animated.View>



        </View>
    );
}

export { CategoriesScreen };
