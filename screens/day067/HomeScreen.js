import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF', }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <Ionicons name="menu" size={24} color="#2d2d2d" />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#01a580', textAlign: 'center' }}>Hotel</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#7c7c7c', textAlign: 'center' }}>Booking</Text>
                </View>
                <Ionicons name="search" size={24} color="#2d2d2d" />
            </View>

            <Animated.View entering={FadeInDown.delay(500).duration(500)}>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30, height: 200 }}>
                    <Image source={require('./pexels-asad-photo-maldives-1450353.jpg')} style={{ width: width, height: 200, position: 'absolute', resizeMode: 'cover' }} />
                    <Text style={{
                        fontFamily: 'Poppins-Medium', fontSize: 25, color: '#FFF', textAlign: 'center', textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: { width: -1, height: 1 },
                        textShadowRadius: 5
                    }}>Find the ideal hotel</Text>

                    <View style={{ backgroundColor: '#FFF', flexDirection: 'row', borderRadius: 20, alignItems: 'center', width: 360, alignSelf: 'center' }}>
                        <Ionicons name="location" size={24} color="#01a580" style={{ marginLeft: 10 }} />
                        <TextInput placeholder='Location or hotel name' style={{ fontFamily: 'Poppins-Medium', flex: 1 }} />
                        <View style={{ backgroundColor: '#01a580', paddingVertical: 5, paddingHorizontal: 20, borderRadius: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#FFF', textAlign: 'center' }}>Find Hotels</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: 360, alignSelf: 'center', marginTop: 10 }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', alignSelf: 'center', backgroundColor: '#FFF', padding: 5, borderRadius: 20 }}>
                            <Ionicons name="calendar-outline" size={20} color="#01a580" />
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#7c7c7c', marginBottom: -5, marginLeft: 5 }}>Arrival - </Text>
                            <Ionicons name="calendar-outline" size={20} color="#01a580" />
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#7c7c7c', marginBottom: -5, marginLeft: 5 }}>Departure</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 5, flexDirection: 'row', alignItems: 'center', alignSelf: 'center', backgroundColor: '#FFF', padding: 5, borderRadius: 20 }}>
                            <Ionicons name="people" size={20} color="#01a580" />
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#7c7c7c', marginBottom: -5, marginLeft: 5 }}>1 bedroom, 2 people</Text>
                        </View>
                    </View>

                </View>
            </Animated.View>

            <View style={{ padding: 5 }}>

                <Animated.View entering={FadeInDown.delay(1000).duration(500)}>

                    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 20, color: '#000', marginTop: 4 }}>Most popular destinations</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', }}>Popular</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#01a580', }}>View all</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View>
                            <Image source={require('./1.jpg')} style={{ width: 150, height: 150, resizeMode: 'cover', borderRadius: 10 }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', marginTop: 5 }}>Italy</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Image source={require('./2.jpg')} style={{ width: 150, height: 150, resizeMode: 'cover', borderRadius: 10 }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', marginTop: 5 }}>Maldives</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Image source={require('./3.jpg')} style={{ width: 150, height: 150, resizeMode: 'cover', borderRadius: 10 }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', marginTop: 5 }}>Indonesia</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Image source={require('./7.jpg')} style={{ width: 150, height: 150, resizeMode: 'cover', borderRadius: 10 }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', marginTop: 5 }}>Turkiye</Text>
                        </View>
                    </ScrollView>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(1500).duration(500)}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', }}>Best Islands</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#01a580', }}>View all</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View>
                            <Image source={require('./4.jpg')} style={{ width: 150, height: 150, resizeMode: 'cover', borderRadius: 10 }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', marginTop: 5 }}>Hawaii</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Image source={require('./5.jpg')} style={{ width: 150, height: 150, resizeMode: 'cover', borderRadius: 10 }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', marginTop: 5 }}>Greece</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Image source={require('./6.jpg')} style={{ width: 150, height: 150, resizeMode: 'cover', borderRadius: 10 }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', marginTop: 5 }}>Caribbean</Text>
                        </View>
                        <TouchableOpacity style={{ marginLeft: 10 }}>
                            <Image source={require('./8.jpg')} style={{ width: 150, height: 150, resizeMode: 'cover', borderRadius: 10 }} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#000', marginTop: 5 }}>West Papua</Text>
                        </TouchableOpacity>
                    </ScrollView>

                </Animated.View>
            </View>




        </View >

    );
}

export { HomeScreen };
