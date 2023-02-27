import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 20 }}>


            <Animated.View style={{ marginTop: 20 }} entering={FadeIn.delay(300).duration(2000)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#d9d9d9', marginRight: 20 }} />
                    <View>
                        <View style={{ width: 200, height: 10, borderRadius: 20, backgroundColor: '#d9d9d9' }} />
                        <View style={{ width: 200, height: 10, borderRadius: 20, backgroundColor: '#d9d9d9', marginTop: 20 }} />
                    </View>
                </View>

                <View style={{ width: 350, height: 5, borderRadius: 20, backgroundColor: '#d9d9d9', marginTop: 20 }} />
                <View style={{ width: 350, height: 5, borderRadius: 20, backgroundColor: '#d9d9d9', marginTop: 20 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <View style={{ width: 100, height: 100, borderRadius: 5, backgroundColor: '#d9d9d9', justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="image-inverted" size={40} color="#FFF" />
                    </View>
                    <View style={{ width: 100, height: 100, borderRadius: 5, backgroundColor: '#d9d9d9', justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="image-inverted" size={40} color="#FFF" />
                    </View>
                    <View style={{ width: 100, height: 100, borderRadius: 5, backgroundColor: '#d9d9d9', justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="image-inverted" size={40} color="#FFF" />
                    </View>
                </View>
            </Animated.View>

            <Animated.View style={{ marginTop: 20, padding: 20, backgroundColor: '#70dfb9', borderRadius: 20 }} entering={FadeIn.delay(300).duration(2000)}>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 80, height: 80, backgroundColor: '#FFF', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                        <FontAwesome5 name="microphone-alt" size={50} color="#70dfb9" />
                    </View>

                    <View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, color: '#FFF' }}>Smart Recorder</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, color: '#FFF' }}>ReactNativeSpace LTD.</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Entypo name="star" size={15} color="#fbf30d" />
                                <Entypo name="star" size={15} color="#fbf30d" />
                                <Entypo name="star" size={15} color="#fbf30d" />
                                <Entypo name="star" size={15} color="#fbf30d" />
                                <Entypo name="star" size={15} color="#fbf30d" />
                            </View>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 13, color: '#FFF', marginLeft: 5 }}>9,200</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={{ alignSelf: 'flex-end', borderWidth: 1, borderColor: '#FFF', paddingHorizontal: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF' }}>INSTALL</Text>
                </TouchableOpacity>


            </Animated.View>

            <Animated.View style={{ marginTop: 20 }} entering={FadeIn.delay(300).duration(2000)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#d9d9d9', marginRight: 20 }} />
                    <View>
                        <View style={{ width: 200, height: 10, borderRadius: 20, backgroundColor: '#d9d9d9' }} />
                        <View style={{ width: 200, height: 10, borderRadius: 20, backgroundColor: '#d9d9d9', marginTop: 20 }} />
                    </View>
                </View>

                <View style={{ width: 350, height: 5, borderRadius: 20, backgroundColor: '#d9d9d9', marginTop: 20 }} />
                <View style={{ width: 350, height: 5, borderRadius: 20, backgroundColor: '#d9d9d9', marginTop: 20 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <View style={{ width: 100, height: 100, borderRadius: 5, backgroundColor: '#d9d9d9', justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="image-inverted" size={40} color="#FFF" />
                    </View>
                    <View style={{ width: 100, height: 100, borderRadius: 5, backgroundColor: '#d9d9d9', justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="image-inverted" size={40} color="#FFF" />
                    </View>
                    <View style={{ width: 100, height: 100, borderRadius: 5, backgroundColor: '#d9d9d9', justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="image-inverted" size={40} color="#FFF" />
                    </View>
                </View>
            </Animated.View>




        </View>
    );
}

export { HomeScreen };
