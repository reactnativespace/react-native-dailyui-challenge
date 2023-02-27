import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Modal, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 20 }}>

            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 25, }}>
                    <FontAwesome5 name="canadian-maple-leaf" size={30} color="#0c59ea" />
                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, color: '#32363b' }}>Welcome</Text>
                    <FontAwesome5 name="bars" size={24} color="#32363b" />
                </View>
            </Animated.View>




            <Animated.View entering={FadeInDown.delay(600).duration(300)}>

                <View style={{ paddingVertical: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#32363b' }}>Popular</Text>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#f9844b' }}>View all</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }}>
                    <View style={{ width: 315, height: 220, backgroundColor: '#135def', borderRadius: 10, padding: 20 }}>
                        <FontAwesome5 name="user-ninja" size={150} color="#104ec9" style={{ position: 'absolute', right: 20, top: 30 }} />
                        <View style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#296ff0', borderRadius: 10, alignSelf: 'flex-start' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 10, color: '#FFF' }}>Defence</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: '#FFF', marginTop: 10 }}>{`KUNG FU\nFIGHT CLUB`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#FFF', marginTop: 10 }}>{`The Kung Fu Club opens its doors\nto you this April`}</Text>
                        <TouchableOpacity style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#FFF', borderRadius: 10, alignSelf: 'flex-start', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 10, color: '#135def' }}>Discover the club</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: 315, height: 220, backgroundColor: '#f94045', borderRadius: 10, padding: 20, marginLeft: 20 }}>
                    </View>
                </ScrollView>
            </Animated.View>





            <Animated.View entering={FadeInDown.delay(900).duration(300)}>

                <View style={{ paddingVertical: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#32363b' }}>Categories</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#f9844b' }}>View all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }}>

                    <TouchableOpacity style={{ backgroundColor: '#fdd6c5', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome5 name="volleyball-ball" size={30} color="#f8864a" />
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#f8864a', marginTop: 10 }}>{`Volleyball`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#fdc2c4', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                        <FontAwesome5 name="basketball-ball" size={30} color="#f84145" />
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#f84145', marginTop: 10 }}>{`Basketball`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#c2e3da', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                        <FontAwesome5 name="baseball-ball" size={30} color="#43aa8c" />
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#43aa8c', marginTop: 10 }}>{`Baseball`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#b9c9e0', width: 100, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                        <FontAwesome5 name="football-ball" size={30} color="#2858a2" />
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#2858a2', marginTop: 10 }}>{`Football`}</Text>
                    </TouchableOpacity>

                </ScrollView>
            </Animated.View>




            <Animated.View entering={FadeInDown.delay(1200).duration(300)}>

                <View style={{ paddingVertical: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#32363b' }}>New Clubs</Text>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#f9844b' }}>View all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexGrow: 0 }}>

                    <TouchableOpacity style={{ backgroundColor: '#cbb9e1', width: 165, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#b9d5e0', width: 165, height: 100, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
                    </TouchableOpacity>

                </ScrollView>
            </Animated.View>

        </View>
    );
}

export { HomeScreen };
