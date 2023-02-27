import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import Swiper from 'react-native-deck-swiper'


const GameScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#171719' }}>
            <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                <Image source={require('./7.jpg')} style={{ width: width, height: 300, resizeMode: 'cover' }} />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(300)} style={{flex:1}}>

                <ScrollView style={{ padding: 20, flexGrow: 0 }} showsVerticalScrollIndicator={false}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#FFF', opacity: 1 }}>Half-Life: Alyx</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#FFF', opacity: 0.4 }}>Shooter</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                        <FontAwesome5 name="star" size={20} color="#FFF" />
                        <FontAwesome5 name="star" size={20} color="#FFF" />
                        <FontAwesome5 name="star" size={20} color="#FFF" />
                        <FontAwesome5 name="star" size={20} color="#FFF" />
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', marginLeft: 10, marginBottom: -8 }}>4/5</Text>
                    </View>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: '#FFF', opacity: 1, marginTop: 20, lineHeight: 23, marginBottom: 20 }}>Half-Life: Alyx is a 2020 virtual reality first-person shooter game developed and published by Valve. It was released for Windows and Linux with support for most PC-compatible VR headsets. Set five years before Half-Life 2, players control Alyx Vance on a mission to seize a superweapon belonging to the alien Combine.</Text>

                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, borderTopWidth: 1, borderColor: 'rgba(255,255,255,0.2)'
                    }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#FFF', }}>Game Modes</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', opacity: 0.5 }}>Single Player</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, borderTopWidth: 1, borderColor: 'rgba(255,255,255,0.2)'
                    }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#FFF', }}>Developer</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', opacity: 0.5 }}>Valve Corporation</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, borderTopWidth: 1, borderColor: 'rgba(255,255,255,0.2)'
                    }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#FFF', }}>Release date</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', opacity: 0.5 }}>March 23, 2020</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, borderTopWidth: 1, borderColor: 'rgba(255,255,255,0.2)'
                    }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#FFF', }}>Platform</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', opacity: 0.5 }}>Microsoft Windows</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, borderTopWidth: 1, borderColor: 'rgba(255,255,255,0.2)'
                    }}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#FFF', }}>Price</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', opacity: 0.5 }}>$19.90</Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#FFF', alignSelf: 'center' }}>Add To Cart</Text>
                    </TouchableOpacity>

                    <View style={{ height: 50 }} />

                </ScrollView>
            </Animated.View>

        </View >

    );
}

export { GameScreen };
