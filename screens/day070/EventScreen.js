import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { ceil, FadeInDown, FadeInRight } from 'react-native-reanimated';

const EventScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#e7e2f3', }}>

            <View style={{ padding: 20, flex: 0.3, }}>
                <FontAwesome5 name="long-arrow-alt-left" size={24} color="black" />
                <Image source={require('./cover.png')} style={{ width: 280, height: 280, alignSelf: 'center' }} />
            </View>
            
            <Animated.View style={{ flex: 0.7, backgroundColor: '#FFF', borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: 30, paddingHorizontal: 20 }} entering={FadeInDown.delay(300)}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#000', alignSelf: 'center' }}>Javascript</Text>
                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 25, color: '#000', alignSelf: 'center' }}>Web Development Meetup</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <FontAwesome5 name="calendar" size={20} color="#444444" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#444444', marginBottom: -5, marginLeft: 10 }}>February 12, 2023</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <FontAwesome5 name="map-marker-alt" size={20} color="#444444" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#444444', marginBottom: -5, marginLeft: 10 }}>Great Mills Road, Amsterdam</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <FontAwesome5 name="user" size={20} color="#444444" />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#444444', marginBottom: -5, marginLeft: 10 }}>{`45 of 100 seats available`}</Text>
                </View>

                <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, color: '#000', marginTop: 20 }}>About</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, color: '#444444', }}>{`Meet other local people interested in Web Development. Share ideas, advice and experiences with others to improve your skills!`}</Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, color: '#000', textDecorationLine: 'underline', }}>Read more</Text>

                <TouchableOpacity style={{ backgroundColor: '#7432ff', justifyContent: 'center', alignItems: 'center', width: 300, height: 50, alignSelf: 'center', borderRadius: 20, marginTop: 20 }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#FFF', }}>Buy Tickets</Text>

                </TouchableOpacity>
            </Animated.View>

        </View >

    );
}

export { EventScreen };
