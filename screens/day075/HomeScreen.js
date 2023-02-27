import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import Swiper from 'react-native-deck-swiper'


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Animated.View entering={FadeInDown.delay(500).duration(500)}>
                    <Image source={require('./header.png')} style={{ width: width, height: 300, alignSelf: 'center', resizeMode: 'cover' }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 20, alignSelf: 'center', marginTop: 20 }}>PC • Windows </Text>
                </Animated.View>

                <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>

                    <Animated.View  entering={FadeInDown.delay(1000).duration(500)}>
                        <TouchableOpacity style={{ backgroundColor: '#f8e9a7', borderRadius: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#000', fontSize: 18, alignSelf: 'center', margin: 8 }}>PRE-ORDER</Text>
                        </TouchableOpacity>

                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 14, alignSelf: 'center', marginTop: 20 }}>Experience the emotional storytelling and unforgettable characters in The Last of Us™, winner of over 200 Game of the Year awards.</Text>

                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16, alignSelf: 'center', marginTop: 10 }}>Coming Mar 3, 2023</Text>

                        <View style={{ marginTop: 20 }}>
                            <Image source={require('./5.jpg')} style={{ width: width - 20, height: 200, borderRadius: 10 }} />
                            <View style={{ position: 'absolute', width: width - 20, height: 200, borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 14, position: 'absolute', top: 5, left: 10 }}>The Last of Us Part I - Launch Trailer</Text>
                                <Image source={require('./play.png')} style={{ width: 50, resizeMode: 'center' }} />
                            </View>
                        </View>

                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16, marginTop: 20 }}>Screenshots</Text>
                    </Animated.View>


                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Image source={require('./2.jpg')} style={{ width: 200, height: 120, borderRadius: 10 }} />
                        <Image source={require('./3.jpg')} style={{ width: 200, height: 120, borderRadius: 10, marginLeft: 10 }} />
                        <Image source={require('./4.jpg')} style={{ width: 200, height: 120, borderRadius: 10, marginLeft: 10 }} />
                        <Image source={require('./6.jpg')} style={{ width: 200, height: 120, borderRadius: 10, marginLeft: 10 }} />

                    </ScrollView>

                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 14, marginTop: 20, textAlign: 'justify' }}>In a ravaged civilization, where infected and hardened survivors run rampant, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone. However, what starts as a small job soon transforms into a brutal cross-country journey.</Text>

                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 16, marginTop: 20 }}>System Requirements</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderColor: 'rgba(255,255,255,0.5)' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 14, opacity: 0.5 }}>OS</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 14, }}>Windows® 10</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderColor: 'rgba(255,255,255,0.5)' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 14, opacity: 0.5 }}>Processor</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 14, }}>i7-3770 or Ryzen™ 5 1600</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderColor: 'rgba(255,255,255,0.5)' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 14, opacity: 0.5 }}>Memory</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 14, }}>8 GB RAM</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderColor: 'rgba(255,255,255,0.5)' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 14, opacity: 0.5 }}>Graphics</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 14, }}>GTX1060 6 GB or AMD Radeon™ RX590</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderColor: 'rgba(255,255,255,0.5)' }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 14, opacity: 0.5 }}>Storage</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', fontSize: 14, }}>80 GB</Text>
                    </View>
                </View>
                <Image source={require('./mushroom.png')} style={{ width: 40, height: 40, alignSelf: 'center', }} />
            </ScrollView>



        </View >

    );
}

export { HomeScreen };
