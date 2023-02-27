import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Pressable } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';


const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')
    const animation = React.useRef(null);

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF', padding: 18 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <MaterialCommunityIcons name="chevron-left" size={30} color="#c03e45" />
                <MaterialCommunityIcons name="magnify" size={30} color="#c03e45" />
            </View>

            <Animated.View entering={FadeInDown.delay(500).duration(500)}>

                <ScrollView horizontal style={{ marginTop: 20, height: 370 }}>
                    <TouchableOpacity>
                        <Image source={require('./avatar.jpg')} style={{ width: 180, height: 280, borderRadius: 20 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, marginTop: 10, color: '#4d545e' }}>{`Avatar\nThe Way of Water`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#4d545e' }}>{`3h 12m - Fantasy`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginLeft: 20 }}>
                        <Image source={require('./babylon.jpg')} style={{ width: 180, height: 280, borderRadius: 20 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, marginTop: 10, color: '#4d545e' }}>{`Babylon`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#4d545e' }}>{`3h 9m - Drama`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.navigate('Confirm')}>
                        <Image source={require('./pale.jpg')} style={{ width: 180, height: 280, borderRadius: 20 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, marginTop: 10, color: '#4d545e' }}>{`The Pale Blue Eye`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#4d545e' }}>{`2h 8m - Mystery`}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginLeft: 20 }}>
                        <Image source={require('./white.jpg')} style={{ width: 180, height: 280, borderRadius: 20 }} />
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, marginTop: 10, color: '#4d545e' }}>{`White Noise`}</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#4d545e' }}>{`2h 16m - Drama`}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(1000).duration(500)}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#c03e45' }}>{`Coming Soon`}</Text>
                    <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
                </View>

                <ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Image source={require('./john.jpeg')} style={{ width: 90, height: 150, borderRadius: 10 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#4d545e' }}>{`John Wick: Chapter 4`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#4d545e' }}>{`2023, Action`}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Image source={require('./fast.jpg')} style={{ width: 90, height: 150, borderRadius: 10 }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#4d545e' }}>{`Fast X`}</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, color: '#4d545e' }}>{`2023, Action/Adventure`}</Text>
                        </View>
                    </View>
                </ScrollView>
            </Animated.View>

        </View >


    );
}

export { HomeScreen };
