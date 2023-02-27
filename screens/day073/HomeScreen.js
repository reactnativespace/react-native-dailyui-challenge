import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import Swiper from 'react-native-deck-swiper'


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#28272c' }}>

            <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('./meta.png')} style={{ width: 50, height: 60, resizeMode: 'contain' }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#FFF', marginLeft: 10 }}>Meta Quest</Text>
                </View>
                <View style={{ width: 40, height: 40, backgroundColor: '#000', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="search" size={16} color="#FFF" />
                </View>
            </View>

            <Animated.View style={{ height: 250, }} entering={FadeInDown.delay(500).duration(500)}>
                <ScrollView horizontal pagingEnabled style={{ flexGrow: 0 }} showsHorizontalScrollIndicator={false}>
                    <View>
                        <Image source={require('./1.jpg')} style={{ width: width, height: 250 }} />
                        <Text style={{
                            fontFamily: 'Poppins-Bold', fontSize: 40, color: '#FFF', position: 'absolute', left: 70, top: 100, textShadowColor: 'rgba(0, 0, 0, 0.75)',
                            textShadowOffset: { width: -1, height: 1 },
                            textShadowRadius: 10,
                        }}>Most Popular</Text>
                    </View>
                    <View>
                        <Image source={require('./2.jpg')} style={{ width: width, height: 250 }} />
                        <Text style={{
                            fontFamily: 'Poppins-Bold', fontSize: 40, color: '#FFF', position: 'absolute', left: 60, top: 100, textShadowColor: 'rgba(0, 0, 0, 0.75)',
                            textShadowOffset: { width: -1, height: 1 },
                            textShadowRadius: 10,
                        }}>New Released</Text>
                    </View>
                    <View>
                        <Image source={require('./3.jpg')} style={{ width: width, height: 250 }} />
                        <Text style={{
                            fontFamily: 'Poppins-Bold', fontSize: 40, color: '#FFF', position: 'absolute', left: 90, top: 100, textShadowColor: 'rgba(0, 0, 0, 0.75)',
                            textShadowOffset: { width: -1, height: 1 },
                            textShadowRadius: 10,
                        }}>Free to Play</Text>
                    </View>
                </ScrollView>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(1000).duration(500)} style={{ flex: 1 }}>
                <ScrollView style={{ padding: 20, flexGrow: 0, marginTop: 20 }} showsVerticalScrollIndicator={false}>

                    <TouchableOpacity style={{ borderRadius: 20 }}>
                        <Image source={require('./4.jpg')} style={{ width: width - 40, height: 180, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                        <View style={{ backgroundColor: '#000', padding: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#FFF' }}>Blasters of the Universe</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', opacity: 0.4 }}>Action, Single Player</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF' }}>$9.90</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ borderRadius: 20, marginTop: 20 }}>
                        <Image source={require('./5.jpg')} style={{ width: width - 40, height: 180, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                        <View style={{ backgroundColor: '#000', padding: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#FFF' }}>Fallout 4 VR</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', opacity: 0.4 }}>Action, RPG</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF' }}>$12.50</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ borderRadius: 20, marginTop: 20 }} onPress={() => navigation.navigate('Game')}>
                        <Image source={require('./6.jpg')} style={{ width: width - 40, height: 180, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                        <View style={{ backgroundColor: '#000', padding: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: '#FFF' }}>Half-Life: Alyx</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF', opacity: 0.4 }}>Horror, Shooter</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#FFF' }}>$19.90</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={{ height: 100 }} />
                </ScrollView>
            </Animated.View>

            <View style={{ position: 'absolute', width: width, bottom: 0, backgroundColor: '#000', padding: 10, flexDirection: 'row', justifyContent: 'space-around', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <FontAwesome5 name="store" size={24} color="#FFF" />
                <FontAwesome5 name="gamepad" size={24} color="#FFF" />
                <FontAwesome5 name="bell" size={24} color="#FFF" />
                <FontAwesome5 name="shopping-cart" size={24} color="#FFF" />
            </View>
        </View >

    );
}

export { HomeScreen };
