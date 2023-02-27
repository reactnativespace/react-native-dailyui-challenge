import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight, FadeOutRight, Layout } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';

const HomeScreen = ({ navigation }) => {

    const { width, height } = Dimensions.get('window')
    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Entypo name="chevron-left" size={24} color="#a3a7b8" />
                <Entypo name="dots-three-horizontal" size={24} color="#a3a7b8" />
            </View>

            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', color: '#404552', fontSize: 25 }}>Upcoming Trips</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                <Animated.View entering={FadeInRight.delay(300).duration(300)}>
                    <TouchableOpacity style={{ alignSelf: 'center', borderRadius: 20, marginTop: 20, backgroundColor: '#FFF', }}>
                        <Image source={require('./1.jpg')} resizeMode='center' style={{ width: 360, height: 200, backgroundColor: 'black', borderRadius: 20 }} />
                        <View style={{ position: 'absolute', bottom: 0, left: 55, backgroundColor: '#FFF', width: 250, height: 50, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#404552', fontSize: 20 }}>Venice, Italy</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInRight.delay(600).duration(300)}>
                    <TouchableOpacity style={{ alignSelf: 'center', borderRadius: 20, marginTop: 20, backgroundColor: '#FFF', }}>
                        <Image source={require('./2.jpg')} resizeMode='cover' style={{ width: 360, height: 200, backgroundColor: 'black', borderRadius: 20 }} />
                        <View style={{ position: 'absolute', bottom: 0, left: 55, backgroundColor: '#FFF', width: 250, height: 50, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#404552', fontSize: 20 }}>Seoul, South Korea</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInRight.delay(900).duration(300)}>
                    <TouchableOpacity style={{ alignSelf: 'center', borderRadius: 20, marginTop: 20, backgroundColor: '#FFF', }} onPress={() => navigation.navigate('Nav')}>
                        <Image source={require('./3.jpg')} resizeMode='cover' style={{ width: 360, height: 200, backgroundColor: 'black', borderRadius: 20 }} />
                        <View style={{ position: 'absolute', bottom: 0, left: 55, backgroundColor: '#FFF', width: 250, height: 50, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#404552', fontSize: 20 }}>Bali, Indonesia</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInRight.delay(1200).duration(300)}>
                    <TouchableOpacity style={{ alignSelf: 'center', borderRadius: 20, marginTop: 20, backgroundColor: '#FFF', marginBottom: 20}}>
                        <Image source={require('./4.jpg')} resizeMode='cover' style={{ width: 360, height: 200, backgroundColor: 'black', borderRadius: 20 }} />
                        <View style={{ position: 'absolute', bottom: 0, left: 55, backgroundColor: '#FFF', width: 250, height: 50, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#404552', fontSize: 20 }}>Agra, india</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
                

            </ScrollView>


        </View>
    );
}

export { HomeScreen };
