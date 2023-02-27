import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');


    //#a48be6
    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#ffffff' }}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                    <Ionicons name="arrow-back" size={28} color="#171717" />

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./avatar.png')} style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: '#9b9b9b' }} />
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: '#202020', marginTop: 10 }}>Koyanagi Hiroki</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 14, marginTop: -5, color: '#9b9b9b' }}>Level 25</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Ionicons name="trophy" size={20} color="#fcbf07" />
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, marginLeft: 10, color: '#202020' }}>12</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#9b9b9b' }}> of </Text>
                            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#202020' }}>50</Text>

                        </View>
                    </View>
                </Animated.View>




                <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }} entering={FadeInDown.delay(600).duration(300)}>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 80, width: 80, borderRadius: 25, backgroundColor: '#fed5e3', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>✨</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#9b9b9b', marginTop: 5 }}>You shine!</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#d5447d', marginTop: -2 }}>+500</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 80, width: 80, borderRadius: 25, backgroundColor: '#fff3d3', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>🤞</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#9b9b9b', marginTop: 5 }}>Lucky</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#d5447d', marginTop: -2 }}>+100</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 80, width: 80, borderRadius: 25, backgroundColor: '#fde0ce', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>🙌</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#9b9b9b', marginTop: 5 }}>Parainner</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#d5447d', marginTop: -2 }}>+150</Text>
                    </View>

                </Animated.View>

                <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }} entering={FadeInDown.delay(900).duration(300)}>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 80, width: 80, borderRadius: 25, backgroundColor: '#fcd6cf', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>😻</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#9b9b9b', marginTop: 5 }}>Cat lover</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#d5447d', marginTop: -2 }}>+50</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 80, width: 80, borderRadius: 25, backgroundColor: '#fbeae7', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>🍖</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#9b9b9b', marginTop: 5 }}>Carnivore</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#d5447d', marginTop: -2 }}>+30</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 80, width: 80, borderRadius: 25, backgroundColor: '#fdcfd5', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>💥</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#9b9b9b', marginTop: 5 }}>Angry player</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#d5447d', marginTop: -2 }}>+100</Text>
                    </View>

                </Animated.View>

                <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }} entering={FadeInDown.delay(1200).duration(300)}>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 80, width: 80, borderRadius: 25, backgroundColor: '#cdf1fe', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>🚀</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#9b9b9b', marginTop: 5 }}>Traveller</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#d5447d', marginTop: -2 }}>+50</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 80, width: 80, borderRadius: 25, backgroundColor: '#fbeae7', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>🙋🏻‍♂️</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#9b9b9b', marginTop: 5 }}>Voluntary</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#d5447d', marginTop: -2 }}>+400</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 80, width: 80, borderRadius: 25, backgroundColor: '#f6f6f6', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>📬</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#9b9b9b', marginTop: 5 }}>Help friends</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#d5447d', marginTop: -2 }}>+90</Text>
                    </View>

                </Animated.View>

                <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginBottom: 60 }} entering={FadeInDown.delay(1500).duration(300)}>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 80, width: 80, borderRadius: 25, backgroundColor: '#fed5e3', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>🎤</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#9b9b9b', marginTop: 5 }}>Karaoke</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#d5447d', marginTop: -2 }}>+100</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 80, width: 80, borderRadius: 25, backgroundColor: '#fff3d3', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>🎯</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#9b9b9b', marginTop: 5 }}>Hit target</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#d5447d', marginTop: -2 }}>+250</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 80, width: 80, borderRadius: 25, backgroundColor: '#fde0ce', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>💰</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#9b9b9b', marginTop: 5 }}>Earn Revenue</Text>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 12, color: '#d5447d', marginTop: -2 }}>+100</Text>
                    </View>

                </Animated.View>

            </ScrollView>

            <View style={{
                position: 'absolute',
                bottom: 0,
                padding: 20,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                width: width,
                alignSelf: 'center',
                flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFF', shadowRadius: 2,
                shadowOffset: {
                    width: 0,
                    height: -20,
                },
                shadowColor: '#000000',
                elevation: 4,
            }}>
                <Ionicons name="compass" size={28} color="#9b9b9b" />
                <Ionicons name="search" size={28} color="#9b9b9b" />
                <Ionicons name="people-outline" size={28} color="#9b9b9b" />
                <Ionicons name="person-outline" size={25} color="#49d3d7" />
            </View>


        </View>
    );
}

export { HomeScreen };
