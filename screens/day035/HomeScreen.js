import React from 'react';
import { View, Image, Dimensions, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { FadeInRight, FadeInLeft } from 'react-native-reanimated';


const HomeScreen = ({ navigation }) => {

    return (

        <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'Poppins-Bold', color: '#263238', fontSize: 20 }}>Popular</Text>
                <Text style={{ fontFamily: 'Poppins-Bold', color: '#ed6527', fontSize: 14, }}>Show all</Text>
            </View>

            <Animated.View entering={FadeInRight.delay(300).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 12 }}>
                    <Image source={require('./image1.png')} style={{ width: 100, height: 100, borderRadius: 20, resizeMode: 'cover' }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#263238', fontSize: 20, marginLeft: 10 }}>{`What is cryptocurrency,\nbitcoin and web3 in 2023?`}</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(600).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 12 }}>
                    <Image source={require('./image2.png')} style={{ width: 100, height: 100, borderRadius: 20, resizeMode: 'cover' }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#263238', fontSize: 20, marginLeft: 10 }}>{`The most popular\nBackend framework\nwith Node.js`}</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(900).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 12 }}>
                    <Image source={require('./image3.jpg')} style={{ width: 100, height: 100, borderRadius: 20, resizeMode: 'cover' }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#263238', fontSize: 20, marginLeft: 10 }}>{`React Drag and\nDrop File Upload example`}</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(1200).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 12 }}>
                    <Image source={require('./image4.png')} style={{ width: 100, height: 100, borderRadius: 20, resizeMode: 'cover' }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#263238', fontSize: 20, marginLeft: 10 }}>{`Add Google Analytics to\nReact/Next in 5 minutes`}</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(1500).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 12 }} onPress={()=> navigation.navigate('Blog')}>
                    <Image source={require('./image5.jpg')} style={{ width: 100, height: 100, borderRadius: 20, resizeMode: 'cover' }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#263238', fontSize: 20, marginLeft: 10 }}>{`How I Made $150,000\nin My First Year as a\nFreelancer`}</Text>
                </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(1800).duration(300)}>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 12 }}>
                    <Image source={require('./image6.jpg')} style={{ width: 100, height: 100, borderRadius: 20, resizeMode: 'cover' }} />
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#263238', fontSize: 20, marginLeft: 10 }}>{`3 Steps To Quickly Build\nA MySQL Online Database`}</Text>
                </TouchableOpacity>
            </Animated.View>

            <Text style={{ fontFamily: 'Poppins-Regular', color: 'rgba(0,0,0,0.3)', fontSize: 15, alignSelf: 'center' }}>More</Text>

        </View>

    );
}

export { HomeScreen };
