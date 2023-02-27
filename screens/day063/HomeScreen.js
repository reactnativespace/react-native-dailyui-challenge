import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')

    return (

        <View style={{ flex: 1, backgroundColor: '#1d1d1d', padding: 12 }}>
            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 60, color: '#494949', marginTop: 40 }}>{`Best Of`}</Text>
            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 60, color: '#FFF', marginTop: -45 }}>{`2022`}</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Animated.View entering={FadeInDown.delay(300).duration(300)}>
                    <TouchableOpacity style={{ width: 360, height: 250, alignSelf: 'center', flexDirection: 'row', borderRadius: 20 }}>
                        <Image source={require('./batman.jpg')} style={{ width: 120, height: 250, resizeMode: 'cover', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                        <Image source={require('./topgun.jpg')} style={{ width: 120, height: 250, resizeMode: 'cover' }} />
                        <Image source={require('./avatar.jpg')} style={{ width: 120, height: 250, resizeMode: 'cover', borderTopRightRadius: 20, borderBottomRightRadius: 20 }} />
                        <View style={{ position: 'absolute', width: 360, height: 250, backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, position: 'absolute', bottom: 0, width: 360, alignItems: 'center' }}>
                                <View>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 40, color: '#FFF', }}>{`Movies`}</Text>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10, color: '#FFF', marginTop: -15 }}>{`Check out selection of the greatest movies of 2022`}</Text>
                                </View>
                                <Entypo name="chevron-right" size={40} color="#FFF" />
                            </View>

                        </View>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(600).duration(300)}>
                    <TouchableOpacity style={{ width: 360, height: 250, alignSelf: 'center', flexDirection: 'row', borderRadius: 20, marginTop: 20 }}>
                        <Image source={require('./1.png')} style={{ width: 120, height: 250, resizeMode: 'cover', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                        <Image source={require('./2.png')} style={{ width: 120, height: 250, resizeMode: 'cover' }} />
                        <Image source={require('./3.png')} style={{ width: 120, height: 250, resizeMode: 'cover', borderTopRightRadius: 20, borderBottomRightRadius: 20 }} />
                        <View style={{ position: 'absolute', width: 360, height: 250, backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, position: 'absolute', bottom: 0, width: 360, alignItems: 'center' }}>
                                <View>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 40, color: '#FFF', }}>{`Songs`}</Text>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10, color: '#FFF', marginTop: -15 }}>{`Listen to the hits from last year!`}</Text>
                                </View>
                                <Entypo name="chevron-right" size={40} color="#FFF" />
                            </View>

                        </View>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(900).duration(300)}>
                    <TouchableOpacity style={{ width: 360, height: 250, alignSelf: 'center', flexDirection: 'row', borderRadius: 20, marginTop: 20 }}>
                        <Image source={require('./4.jpg')} style={{ width: 120, height: 250, resizeMode: 'cover', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                        <Image source={require('./5.jpg')} style={{ width: 120, height: 250, resizeMode: 'cover' }} />
                        <Image source={require('./6.jpg')} style={{ width: 120, height: 250, resizeMode: 'cover', borderTopRightRadius: 20, borderBottomRightRadius: 20 }} />
                        <View style={{ position: 'absolute', width: 360, height: 250, backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, position: 'absolute', bottom: 0, width: 360, alignItems: 'center' }}>
                                <View>
                                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 40, color: '#FFF', }}>{`Books`}</Text>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10, color: '#FFF', marginTop: -15 }}>{`Top seller books!`}</Text>
                                </View>
                                <Entypo name="chevron-right" size={40} color="#FFF" />
                            </View>

                        </View>
                    </TouchableOpacity>
                </Animated.View>
            </ScrollView>
        </View >

    );
}

export { HomeScreen };
